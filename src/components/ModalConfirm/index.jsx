import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";

export const ModalConfirm = ({ setModal }) => {
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
        <p>Deseja excluir ?</p>

        <C.ButtonConfirm>Sim</C.ButtonConfirm>
        <C.ButtonNot onClick={handleCloseModal}>Não</C.ButtonNot>
      </C.Modal>
    </C.Container>
  );
};
