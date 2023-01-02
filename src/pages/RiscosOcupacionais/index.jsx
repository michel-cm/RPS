import * as C from "./styles";
import { Button } from "../../components/Button";

import { BsFillTrashFill } from "react-icons/bs";

import { useNormasContext } from "../../hooks/useNormasContext";
import { useState } from "react";

import { ModalAddNewCategory } from "./ModalAddNewCategory";
import { ModalAddNewItemForGroupRisc } from "./ModalAddNewItemForGroupRisc";
import { ModalEditRisc } from "./ModalEditeRisc";

export function RiscosOcupacionais() {
  const { riscosOcupacionais, deleteItemForGroupRisc, deleteGroupRisc } =
    useNormasContext();

  const [modalAddNewCategoryOpen, setModalAddNewCategoryOpen] = useState(false);
  const [modalAddNewItemForGroupRisc, setModalAddNewItemForGroupRisc] =
    useState(false);
  const [modalEditRisco, setModalEditRisco] = useState(false);

  const [nameNewCategoria, setNameNewCategoria] = useState("");
  const [idCategoryForAddNewItem, setIdCategoryForAddNewItem] = useState("");

  const [idCategoryForEdit, setIdCategoryForEdit] = useState("");

  function handleShowModalAddNewCategory() {
    setModalAddNewCategoryOpen(true);
  }

  function handleShowModalAddNewItemForGroupRisc(id) {
    setIdCategoryForAddNewItem(id);
    setModalAddNewItemForGroupRisc(true);
  }

  function handleShowEditRisc() {
    setModalEditRisco(true);
  }

  function handleConfirmDelete(idGroup, idItem) {
    window.confirm("Confirmar exclusão ?") &&
      deleteItemForGroupRisc(idGroup, idItem);
  }

  function handleDeleteGroupRisc(idGroup) {
    window.confirm("Confirmar exclusão ?") && deleteGroupRisc(idGroup);
  }

  return (
    <C.Container>
      <C.title>Riscos ocupacionais</C.title>
      <C.AreaIdentificacao>
        {riscosOcupacionais.length > 0 &&
          riscosOcupacionais.map((risco, index) => {
            return (
              <C.AreaCategoria key={risco.id}>
                <>
                  <C.HeaderHroupRiscos>
                    <C.InputTitle
                      type="text"
                      value={risco.categoria}
                      readOnly
                    />
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <span
                        onClick={() => handleDeleteGroupRisc(risco.id)}
                        style={{
                          color: "white",
                        }}
                      >
                        Editar grupo
                      </span>
                      <span onClick={() => handleDeleteGroupRisc(risco.id)}>
                        excluir grupo
                      </span>
                    </div>
                  </C.HeaderHroupRiscos>
                  {risco.riscos.length > 0 && (
                    <C.AreaItems>
                      {risco.riscos.map((item, index) => {
                        return (
                          <C.Item key={item.id}>
                            <input
                              type={"text"}
                              value={item.risco}
                              readOnly
                              key={item.id}
                            />
                            <C.Icon
                              onClick={() =>
                                handleConfirmDelete(risco.id, item.id)
                              }
                            >
                              <BsFillTrashFill size={14} />
                            </C.Icon>
                          </C.Item>
                        );
                      })}
                    </C.AreaItems>
                  )}
                </>
                <div
                  style={{
                    margin: "1.5rem 0 1rem 0",
                  }}
                >
                  <C.ButtonCadastrarItem
                    onClick={() =>
                      handleShowModalAddNewItemForGroupRisc(risco.id)
                    }
                  >
                    Cadastrar novo risco
                  </C.ButtonCadastrarItem>
                </div>
              </C.AreaCategoria>
            );
          })}
        <div
          style={{
            margin: "2.5rem 0 1rem 0",
          }}
        >
          <Button
            fn={handleShowModalAddNewCategory}
            title={"Cadastrar nova categoria"}
          />
        </div>
        {modalAddNewCategoryOpen && (
          <ModalAddNewCategory
            setModal={setModalAddNewCategoryOpen}
            nameNewCategoria={nameNewCategoria}
            setNameNewCategoria={setNameNewCategoria}
          />
        )}
        {modalAddNewItemForGroupRisc && (
          <ModalAddNewItemForGroupRisc
            setModal={setModalAddNewItemForGroupRisc}
            idCategory={idCategoryForAddNewItem}
          />
        )}
        {modalEditRisco && <ModalEditRisc setModal={setModalEditRisco} />}
      </C.AreaIdentificacao>
    </C.Container>
  );
}
