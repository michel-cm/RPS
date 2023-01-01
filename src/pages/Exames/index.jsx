import * as C from "./styles";
import { Button } from "../../components/Button";

import { BsFillTrashFill } from "react-icons/bs";

import { useNormasContext } from "../../hooks/useNormasContext";

import { Search } from "../../components/Search";
import { useState } from "react";
import { ModalAddNewExame } from "./ModalAddNewExame";

export function Exames() {
  const [modalAddNewExameOpen, setModalAddNewExameOpen] = useState(false);

  const { exames, getAllExames } = useNormasContext();

  const handleOpenModal = () => {
    setModalAddNewExameOpen(true);
  };

  return (
    <C.Container>
      <C.title> Exames Médicos </C.title>
      <C.AreaIdentificacao>
        <C.AreaSearchAndInput>
          <Search placeholder={"Pesquisar procedimento"} />{" "}
          <Button fn={handleOpenModal} title={"Cadastrar novo procedimento"} />
        </C.AreaSearchAndInput>
        <C.AreaCategoria>
          <C.AreaItems>
            {exames.length > 0 &&
              exames
                .sort(function (a, b) {
                  if (a.cod > b.cod) {
                    return 1;
                  }
                  if (a.cod < b.cod) {
                    return -1;
                  }
                  // a must be equal to b
                  return 0;
                })
                .map((exame) => {
                  return (
                    <C.Item key={exame.cod}>
                      <C.InputCod type={"text"} readOnly value={exame.cod} />
                      <C.InputExame type={"text"} readOnly value={exame.nome} />
                    </C.Item>
                  );
                })}
          </C.AreaItems>
        </C.AreaCategoria>
        {modalAddNewExameOpen && (
          <ModalAddNewExame setModal={setModalAddNewExameOpen} />
        )}
      </C.AreaIdentificacao>
    </C.Container>
  );
}
