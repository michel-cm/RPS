import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";
import { useState } from "react";

export function ModalAddNewExame({ setModal, exame }) {
  const handleCloseModal = () => {
    setModal(false);
  };

  const [codeExame, setCodeExame] = useState("");
  const [nameNewExame, setNameNewExame] = useState("");

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
        <h3>Cadastrar novo Item</h3>
        <C.AreaInput>
          <input
            type="text"
            placeholder="Código"
            onChange={(e) => setNameNewExame(e.target.value)}
          />
          <textarea
            rows="5"
            cols="1"
            placeholder="Nome do procedimento"
            onChange={(e) => setNameNewExame(e.target.value)}
          ></textarea>
        </C.AreaInput>
        <div>
          <C.ButtonConfirm disabled={nameNewExame ? false : true}>
            Adicionar
          </C.ButtonConfirm>
          <C.ButtonNot onClick={handleCloseModal}>Cancelar</C.ButtonNot>
        </div>
      </C.Modal>
    </C.Container>
  );
}
