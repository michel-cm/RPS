import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useNormasContext } from "../../../hooks/useNormasContext";

export function ModalEditExame({ setModal, idExameForUpdate }) {
  const handleCloseModal = () => {
    setModal(false);
  };

  const { getAllExames, exames, updateExame } = useNormasContext();

  const [codeExame, setCodeExame] = useState("");
  const [nameNewExame, setNameNewExame] = useState("");

  const getExameForId = () => {
    const filtered = exames.filter((exame) => exame.id == idExameForUpdate);
    setCodeExame(filtered[0].cod);
    setNameNewExame(filtered[0].nome);
  };

  const handleUpdateExame = async (idExame, cod, nome) => {
    await updateExame(idExame, cod, nome).then(async () => {
      await getAllExames().then(() => {
        handleCloseModal();
      });
    });
  };

  useEffect(() => {
    getExameForId();
  }, [idExameForUpdate]);

  return (
    <C.Container>
      <C.Modal>
        <C.AreaClose onClick={handleCloseModal}>
          <BsFillXCircleFill
            style={{
              cursor: "pointer",
            }}
          />
        </C.AreaClose>
        <h3>Editar procedimento</h3>
        <C.AreaInput>
          <input
            type="text"
            value={codeExame || ""}
            placeholder="Código"
            onChange={(e) => setCodeExame(e.target.value)}
          />
          <textarea
            rows="5"
            value={nameNewExame || ""}
            placeholder="Nome do procedimento"
            onChange={(e) => setNameNewExame(e.target.value)}
          ></textarea>
        </C.AreaInput>
        <div>
          <C.ButtonConfirm
            onClick={() =>
              handleUpdateExame(idExameForUpdate, codeExame, nameNewExame)
            }
            disabled={nameNewExame && codeExame ? false : true}
          >
            Salvar
          </C.ButtonConfirm>
          <C.ButtonNot onClick={handleCloseModal}>Cancelar</C.ButtonNot>
        </div>
      </C.Modal>
    </C.Container>
  );
}
