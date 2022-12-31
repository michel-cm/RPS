import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";
import { useNormasContext } from "../../../hooks/useNormasContext";
import { useState } from "react";

export function ModalAddNewItemForGroupRisc({ setModal, idCategory }) {
  const handleCloseModal = () => {
    setModal(false);
  };

  const { addNewItemForGrouRisc, getAllRiscosOcupacionais } =
    useNormasContext();

  const [nameNewItem, setNameNewItem] = useState("");

  const handleAddNewItemForCategoryRisc = async () => {
    await addNewItemForGrouRisc(idCategory, nameNewItem)
      .then(async () => {
        await getAllRiscosOcupacionais().then(() => {
          handleCloseModal();
        });
      })
      .catch((error) => console.log(error));
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
        <h3>Cadastrar novo Item</h3>
        <C.AreaInput>
          <input
            type="text"
            placeholder="Nome do grupo"
            onChange={(e) => setNameNewItem(e.target.value)}
          />
        </C.AreaInput>
        <div>
          <C.ButtonConfirm onClick={handleAddNewItemForCategoryRisc} disabled={nameNewItem ? false : true}>
            Adicionar
          </C.ButtonConfirm>
          <C.ButtonNot onClick={handleCloseModal}>Cancelar</C.ButtonNot>
        </div>
      </C.Modal>
    </C.Container>
  );
}
