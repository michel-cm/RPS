import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";

export function ModalAddNewItem({
  setModal,
  nameNewCategoria,
  setNameNewCategoria,
}) {
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <C.Container>
      <C.Modal>
        <C.AreaClose>
          <BsFillXCircleFill
            style={{
              cursor: "pointer",
            }}
            onClick={handleCloseModal}
          />
        </C.AreaClose>
        <h3>Cadastrar novo grupo de risco</h3>
        <C.AreaInput>
          <input
            type="text"
            placeholder="Nome do grupo"
            value={nameNewCategoria}
            onChange={(e) => setNameNewCategoria(e.target.value)}
          />
        </C.AreaInput>
        <div>
          <C.ButtonConfirm>Adicionar</C.ButtonConfirm>
          <C.ButtonNot onClick={handleCloseModal}>Cancelar</C.ButtonNot>
        </div>
      </C.Modal>
    </C.Container>
  );
}
