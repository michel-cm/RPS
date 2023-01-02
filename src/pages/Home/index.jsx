import * as C from "./styles";
import { Button } from "../../components/Button";

import { useNormasContext } from "../../hooks/useNormasContext";
import { useState } from "react";

export function Home() {
  const { funcoes } = useNormasContext();

  const [empresa, setEmpresa] = useState({});

  const [funcionario, setFuncionario] = useState({});

  const [funcao, setFuncao] = useState("");

  return (
    <C.Container>
      <h2>Atestado médico de saúde ocupacional</h2>
      <C.AreaIdentificacao>
        <h3>Empresa</h3>
        <C.AreaInputsDisplayFlex>
          <C.InputColumn
            style={{
              width: "350px",
            }}
          >
            <label>Razão Social</label>
            <C.Input
              type={"text"}
              value={empresa.razaoSocial}
              onChange={(e) =>
                setEmpresa((prevState) => {
                  return { ...prevState, razaoSocial: e.target.value };
                })
              }
            />
          </C.InputColumn>

          <C.InputColumn
            style={{
              width: "150px",
            }}
          >
            <label>CNPJ/CEI</label>
            <C.Input
              type={"text"}
              onChange={(e) =>
                setEmpresa((prevState) => {
                  return { ...prevState, cnpj: e.target.value };
                })
              }
            />
          </C.InputColumn>
        </C.AreaInputsDisplayFlex>

        <C.AreaInputsDisplayFlex
          style={{
            gap: "1rem",
          }}
        >
          <C.InputColumn
            style={{
              width: "350px",
            }}
          >
            <label>Rua</label>
            <C.Input
              type={"text"}
              onChange={(e) =>
                setEmpresa((prevState) => {
                  return { ...prevState, rua: e.target.value };
                })
              }
            />
          </C.InputColumn>
          <C.InputColumn
            style={{
              width: "100px",
            }}
          >
            <label>N°</label>
            <C.Input
              type={"text"}
              onChange={(e) =>
                setEmpresa((prevState) => {
                  return { ...prevState, n: e.target.value };
                })
              }
            />
          </C.InputColumn>
          <C.InputColumn
            style={{
              width: "150px",
            }}
          >
            <label>Bairro</label>
            <C.Input
              type={"text"}
              onChange={(e) =>
                setEmpresa((prevState) => {
                  return { ...prevState, bairro: e.target.value };
                })
              }
            />
          </C.InputColumn>
          <C.InputColumn
            style={{
              width: "150px",
            }}
          >
            <label>Cidade</label>
            <C.Input
              type={"text"}
              onChange={(e) =>
                setEmpresa((prevState) => {
                  return { ...prevState, cidade: e.target.value };
                })
              }
            />
          </C.InputColumn>
        </C.AreaInputsDisplayFlex>

        <C.AreaInputsDisplayFlex
          style={{
            gap: "1rem",
          }}
        ></C.AreaInputsDisplayFlex>
      </C.AreaIdentificacao>
      <C.AreaIdentificacao>
        <h3>Funcionário</h3>
        <C.AreaInputsDisplayFlex>
          <C.InputColumn
            style={{
              width: "350px",
            }}
          >
            <label>Nome do funcionário</label>
            <C.Input
              type={"text"}
              onChange={(e) =>
                setFuncionario((prevState) => {
                  return { ...prevState, nome: e.target.value };
                })
              }
            />
          </C.InputColumn>

          <C.InputColumn
            style={{
              width: "150px",
            }}
          >
            <label>CPF</label>
            <C.Input
              type={"text"}
              maxLength={11}
              onChange={(e) =>
                setFuncionario((prevState) => {
                  return { ...prevState, cpf: e.target.value };
                })
              }
            />
          </C.InputColumn>
          <C.InputColumn
            style={{
              width: "150px",
            }}
          >
            <label>CTPS</label>
            <C.Input
              type={"text"}
              maxLength={11}
              onChange={(e) =>
                setFuncionario((prevState) => {
                  return { ...prevState, ctps: e.target.value };
                })
              }
            />
          </C.InputColumn>

          <C.InputColumn
            style={{
              width: "150px",
            }}
          >
            <label>Data nascimento</label>
            <C.Input
              type={"date"}
              onChange={(e) =>
                setFuncionario((prevState) => {
                  return { ...prevState, dataNasc: e.target.value };
                })
              }
            />
          </C.InputColumn>
        </C.AreaInputsDisplayFlex>

        <C.AreaInputsDisplayFlex
          style={{
            gap: "1rem",
          }}
        >
          <C.InputColumn
            style={{
              width: "250px",
            }}
          >
            <label>Função</label>
            <C.Select
              onChange={(e) => setFuncao(e.target.value)}
              value={funcao}
            >
              <option value="branco"></option>
              {funcoes.length > 0 &&
                funcoes.map((funcao, index) => (
                  <option key={funcao.id} value={funcao.id}>
                    {funcao.funcaoNome}
                  </option>
                ))}
            </C.Select>
          </C.InputColumn>
        </C.AreaInputsDisplayFlex>

        <C.AreaInputsDisplayFlex
          style={{
            gap: "1rem",
          }}
        ></C.AreaInputsDisplayFlex>
      </C.AreaIdentificacao>
      <C.ButtonAdd>
        <Button title="Gerar atestado" />
      </C.ButtonAdd>
    </C.Container>
  );
}
