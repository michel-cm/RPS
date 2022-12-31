import * as C from "./styles";
import { Button } from "../../components/Button";

import { BsFillTrashFill } from "react-icons/bs";

import { Search } from "../../components/Search";

export function Exames() {
  return (
    <C.Container>
      <C.title> Exames Médicos </C.title>
      <C.AreaIdentificacao>
        <C.AreaSearchAndInput>
          <Search placeholder={"Pesquisar procedimento"} />{" "}
          <Button title={"Cadastrar novo procedimento"} />
        </C.AreaSearchAndInput>
        <C.AreaCategoria>
          <C.AreaItems>
            <C.Item>
              <C.InputCod type={"text"} readOnly value={1037} />
              <C.InputExame
                type={"text"}
                readOnly
                value={
                  "Radiografia de tórax (PA) Padrão OIT (o mais recente), com pelo menos um leitor habilitado"
                }
              />
            </C.Item>
          </C.AreaItems>
        </C.AreaCategoria>
      </C.AreaIdentificacao>
    </C.Container>
  );
}
