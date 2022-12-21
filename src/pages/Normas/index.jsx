import * as C from "./styles";
import { Button } from "../../components/Button";

import { BsFillTrashFill } from "react-icons/bs";

import { useNormasContext } from "../../hooks/useNormasContext";
import { useState } from "react";

import { ModalAddNewItem } from "./ModalAddNewItem";
import { ModalConfirm } from "../../components/ModalConfirm";

export function Normas() {
  const { riscosOcupacionais } = useNormasContext();
  const [modalAddNewItemOpen, setModalAddNewItemOpen] = useState(false);
  const [modalConfirmDeleteOpen, setModalConfirmDeleteOpen] = useState(false);
  const [nameNewCategoria, setNameNewCategoria] = useState("");

  function handleShowModalAddNewItem() {
    setModalAddNewItemOpen(true);
  }
  function handleShowModalConfirmDelete() {
    setModalConfirmDeleteOpen(true);
  }

  return (
    <C.Container>
      <C.title>Riscos ocupacionais</C.title>
      <C.AreaIdentificacao>
        {riscosOcupacionais.length > 0 &&
          riscosOcupacionais.map((risco, index) => {
            return (
              <C.AreaCategoria key={risco.id}>
                <div>
                  <C.InputTitle
                    style={{}}
                    type="text"
                    value={risco.categoria}
                    readOnly
                  />
                  {risco.riscos.length > 0 && (
                    <C.AreaItems>
                      {risco.riscos.map((item, index) => {
                        return (
                          <>
                            <input
                              type={"text"}
                              value={item.risco}
                              readOnly
                              key={item.id}
                            />
                            <C.Icon onClick={handleShowModalConfirmDelete}>
                              <BsFillTrashFill size={14} />
                            </C.Icon>
                          </>
                        );
                      })}
                    </C.AreaItems>
                  )}
                </div>
                <div
                  style={{
                    margin: "1.5rem 0 1rem 0",
                  }}
                >
                  <C.ButtonCadastrarItem>
                    Cadastrar novo risco
                  </C.ButtonCadastrarItem>
                </div>
              </C.AreaCategoria>
            );
          })}
        <div
          style={{
            margin: "1.5rem 0 1rem 0",
          }}
        >
          <Button
            fn={handleShowModalAddNewItem}
            title={"Cadastrar nova categoria"}
          />
        </div>
        {modalAddNewItemOpen && (
          <ModalAddNewItem
            setModal={setModalAddNewItemOpen}
            nameNewCategoria={nameNewCategoria}
            setNameNewCategoria={setNameNewCategoria}
          />
        )}
        {modalConfirmDeleteOpen && (
          <ModalConfirm setModal={setModalConfirmDeleteOpen} />
        )}
      </C.AreaIdentificacao>
    </C.Container>
  );
}
