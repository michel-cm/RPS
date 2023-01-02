import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";
import { useState } from "react";
import { useNormasContext } from "../../../hooks/useNormasContext";

export function ModalAddNewTipo({ setModal }) {
  const handleCloseModal = () => {
    setModal(false);
  };

  const { addNewTipoExame, getAllTiposExames } = useNormasContext();

  const [nameTipoExame, setNameTipoExame] = useState("");

  async function handleAddNewExame() {
    await addNewTipoExame(nameTipoExame).then(() => {
      getAllTiposExames().then(() => {
        handleCloseModal();
      });
    });
  }

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
        <h3>Cadastrar novo Tipo de Exame</h3>
        <C.AreaInput>
          <input
            type="text"
            placeholder="Tipo de Exame"
            onChange={(e) => setNameTipoExame(e.target.value)}
          />
        </C.AreaInput>
        <div>
          <C.ButtonConfirm
            onClick={handleAddNewExame}
            disabled={nameTipoExame ? false : true}
          >
            Adicionar
          </C.ButtonConfirm>
          <C.ButtonNot onClick={handleCloseModal}>Cancelar</C.ButtonNot>
        </div>
      </C.Modal>
    </C.Container>
  );
}
