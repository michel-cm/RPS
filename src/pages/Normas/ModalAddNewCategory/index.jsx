import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";
import { useNormasContext } from "../../../hooks/useNormasContext";

export function ModalAddNewCategory({
  setModal,
  nameNewCategoria,
  setNameNewCategoria,
}) {
  const handleCloseModal = () => {
    setModal(false);
  };

  const { addNewCategoriaRiscoOcupacional, getAllRiscosOcupacionais } =
    useNormasContext();

  const handleAddNewCateogry = async () => {
    await addNewCategoriaRiscoOcupacional(nameNewCategoria)
      .then(async () => {
        await getAllRiscosOcupacionais().then(() => {
          handleCloseModal();
        });
      })
      .catch((error) => console(error));
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
          <C.ButtonConfirm onClick={handleAddNewCateogry}>
            Adicionar
          </C.ButtonConfirm>
          <C.ButtonNot onClick={handleCloseModal}>Cancelar</C.ButtonNot>
        </div>
      </C.Modal>
    </C.Container>
  );
}
