import * as C from "./styles";
import { Button } from "../../components/Button";

import { BsFillTrashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

import { useNormasContext } from "../../hooks/useNormasContext";

import { useState } from "react";
import { ModalAddNewTipo } from "./ModalAddNewTipo";
import { ModalEditeNewTipo } from "./ModalEditeNewTipo";

export function TiposExamesMedicos() {
  const [modalAddNewTipoExameOpen, setModalAddNewTipoExameOpen] =
    useState(false);
  const [modalEditExameTipoOpen, setModalEditExameTipoOpen] = useState(false);

  const { getAllTiposExames, tiposExamesMedicos, deleteTipoExameMedico } =
    useNormasContext();

  const [idForEdit, setIdForEdit] = useState("");

  const handleOpenModal = () => {
    setModalAddNewTipoExameOpen(true);
  };

  const handleConfirmDelete = (idExame) => {
    window.confirm("Confirmar exclusão ?") &&
      deleteTipoExameMedico(idExame).then(async () => {
        await getAllTiposExames();
      });
  };

  const handleEditExame = (idExame) => {
    setIdForEdit(idExame);
    setModalEditExameTipoOpen(true);
  };

  return (
    <C.Container>
      <C.title> Tipos Exames Médicos </C.title>
      <C.AreaIdentificacao>
        <Button fn={handleOpenModal} title={"Cadastrar novo procedimento"} />
        <C.AreaCategoria>
          <C.AreaItems>
            {tiposExamesMedicos.length > 0 &&
              tiposExamesMedicos
                .sort(function (a, b) {
                  if (a.nomne > b.nome) {
                    return 1;
                  }
                  if (a.nome < b.nome) {
                    return -1;
                  }
                  // a must be equal to b
                  return 0;
                })
                .map((exame) => {
                  return (
                    <C.Item key={exame.id}>
                      <C.InputExame type={"text"} readOnly value={exame.nome} />
                      <C.AreaIcon>
                        <C.Icon>
                          <BsFillEyeFill
                            size={14}
                            onClick={() => handleEditExame(exame.id)}
                          />
                        </C.Icon>
                        <C.Icon>
                          <BsFillTrashFill
                            size={14}
                            onClick={() => handleConfirmDelete(exame.id)}
                          />
                        </C.Icon>
                      </C.AreaIcon>
                    </C.Item>
                  );
                })}
          </C.AreaItems>
        </C.AreaCategoria>
      </C.AreaIdentificacao>
      {modalAddNewTipoExameOpen && (
        <ModalAddNewTipo setModal={setModalAddNewTipoExameOpen} />
      )}
      {modalEditExameTipoOpen && (
        <ModalEditeNewTipo
          setModal={setModalEditExameTipoOpen}
          idExameForUpdate={idForEdit}
        />
      )}
    </C.Container>
  );
}
