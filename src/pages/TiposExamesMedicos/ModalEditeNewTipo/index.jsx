import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useNormasContext } from "../../../hooks/useNormasContext";

export function ModalEditeNewTipo({ setModal, idExameForUpdate }) {
  const handleCloseModal = () => {
    setModal(false);
  };

  const { updateTipoExame, getAllTiposExames, tiposExamesMedicos } =
    useNormasContext();

  const [nameTipoExame, setNameTipoExame] = useState("");

  const getTipoExameForId = () => {
    const filtered = tiposExamesMedicos.filter(
      (exame) => exame.id == idExameForUpdate
    );
    setNameTipoExame(filtered[0].nome);
  };

  const handleUpdateTipoExame = async () => {
    await updateTipoExame(idExameForUpdate, nameTipoExame).then(async () => {
      await getAllTiposExames().then(() => {
        handleCloseModal();
      });
    });
  };

  useEffect(() => {
    getTipoExameForId();
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
        <h3>Cadastrar novo Tipo de Exame</h3>
        <C.AreaInput>
          <input
            type="text"
            placeholder="Tipo de Exame"
            value={nameTipoExame}
            onChange={(e) => setNameTipoExame(e.target.value)}
          />
        </C.AreaInput>
        <div>
          <C.ButtonConfirm
            onClick={handleUpdateTipoExame}
            disabled={nameTipoExame ? false : true}
          >
            Salvar
          </C.ButtonConfirm>
          <C.ButtonNot onClick={handleCloseModal}>Cancelar</C.ButtonNot>
        </div>
      </C.Modal>
    </C.Container>
  );
}
