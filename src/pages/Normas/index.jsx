import * as C from "./styles";
import { Button } from "../../components/Button";

import { BsFillTrashFill } from "react-icons/bs";

import { useNormasContext } from "../../hooks/useNormasContext";

export function Normas() {
  const { normas, exames, riscosOcupacionais } = useNormasContext();

  return (
    <C.Container>
      <C.title>Riscos ocupacionais</C.title>
      <C.AreaIdentificacao>
        {riscosOcupacionais.length > 0 &&
          riscosOcupacionais.map((risco, index) => {
            return (
              <C.AreaCategoria key={risco.id}>
                <div>
                  <C.InputTitle
                    style={{}}
                    type="text"
                    value={risco.categoria}
                    readOnly
                  />
                  {risco.variacoes.length > 0 && (
                    <C.AreaItems>
                      {risco.variacoes.map((item, index) => {
                        return (
                          <>
                            <input
                              key={item.id}
                              type={"text"}
                              value={item.nome}
                              readOnly
                            />
                            <C.IconSearch>
                              <BsFillTrashFill size={14} />
                            </C.IconSearch>
                          </>
                        );
                      })}
                    </C.AreaItems>
                  )}
                </div>
                <div
                  style={{
                    margin: "1.5rem 0 1rem 0",
                  }}
                >
                  <C.ButtonCadastrarItem>
                    Cadastrar novo risco
                  </C.ButtonCadastrarItem>
                </div>
              </C.AreaCategoria>
            );
          })}
        <div
          style={{
            margin: "1.5rem 0 1rem 0",
          }}
        >
          <Button title={"Cadastrar nova categoria"} />
        </div>
      </C.AreaIdentificacao>
    </C.Container>
  );
}
