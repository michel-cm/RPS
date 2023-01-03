import * as C from "./styles";
import { Button } from "../../components/Button";

import { useNormasContext } from "../../hooks/useNormasContext";
import { useRef, useState } from "react";

import { formatDate } from "../../helpers/dateFilter";

import iconPdfSpr from "../../assets/iconPdfSpr.jpg";

import ReactToPrint from "react-to-print";
import { useAuth } from "../../hooks/useAuth";

export function Home() {
  const { logoutAccount, handleUpdatePassowrd } = useAuth();

  const { funcoes, tiposExamesMedicos } = useNormasContext();

  const [empresa, setEmpresa] = useState({});

  const [funcionario, setFuncionario] = useState({});

  const [funcao, setFuncao] = useState("");

  const [tipoExame, setTipoExame] = useState("");

  const [funcoesInPdf, setFuncoesInPdf] = useState([]);

  const componentRef = useRef();

  function handleFuncaoInPdf(e) {
    setFuncao(e.target.value);
    const filtered = funcoes.filter((funcao) => funcao.id === e.target.value);
    setFuncoesInPdf(filtered);
  }

  return (
    <C.Container>
      <h2>Atestado médico de saúde ocupacional</h2>
      <div className="pagebreakDisplayNone"></div>
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
              width: "300px",
            }}
          >
            <label>Tipo Exame</label>
            <C.Select
              onChange={(e) => setTipoExame(e.target.value)}
              value={tipoExame}
            >
              <option value="branco"></option>
              {tiposExamesMedicos.length > 0 &&
                tiposExamesMedicos.map((tipo, index) => (
                  <option key={tipo.id} value={tipo.nome}>
                    {tipo.nome}
                  </option>
                ))}
            </C.Select>
          </C.InputColumn>
        </C.AreaInputsDisplayFlex>
        <C.AreaInputsDisplayFlex
          style={{
            gap: "1rem",
          }}
        >
          <C.InputColumn
            style={{
              width: "300px",
            }}
          >
            <label>Função</label>
            <C.Select onChange={(e) => handleFuncaoInPdf(e)} value={funcao}>
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
        <ReactToPrint
          trigger={() => (
            <button
              style={{
                padding: "4px",
              }}
            >
              Gerar Atestado
            </button>
          )}
          content={() => componentRef.current}
        />
      </C.ButtonAdd>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button fn={logoutAccount} title={"Deslogar"} type={"cancel"} />
        <span
          onClick={handleUpdatePassowrd}
          style={{ cursor: "pointer", fontSize: "0.9rem" }}
        >
          Alterar senha
        </span>
      </div>
      <C.ContainerPDF
        ref={componentRef}
        style={{ width: "100%", height: window.innerHeight }}
      >
        <C.Header>
          <img src={iconPdfSpr} alt="" />
          <span>Sindicato dos Produtores Rurais de machado</span>
          <p>
            LEI Nº 4214 - 02-03-63 - CARTA SINDICAL 06-07-66 - CNPJ Nº
            22.230.940/0001-00
          </p>
          <p>
            Praça Danton Magalhães, 99 - Fone: (35) 3295-5620 - Machado - MG
          </p>
        </C.Header>
        <C.AreaEmpresa>
          <span>ATESTADO MÉDICO DE SAÚDE OCUPACIONAL</span>
          <p>
            De conformidade com o Art. 168/169 da CLT e nr 7 (portaria nº 8 de
            08/05/1996)
          </p>
          <C.AreaItems style={{ borderBottom: "1px dotted #000" }}>
            <p>Empresa : {empresa.razaoSocial ? empresa.razaoSocial : ""}</p>
            <p>CNPJ/ : {empresa.cnpj ? empresa.cnpj : ""}</p>
            <p>
              Endereço : {empresa.rua ? empresa.rua + "," : " "}
              {empresa.n ? empresa.n + "," : " "}
              {empresa.bairro ? empresa.bairro : " "}
            </p>
            <p>Cidade: {empresa.cidade ? empresa.cidade : ""}</p>
          </C.AreaItems>
          <C.AreaItems>
            <p>Funcionário : {funcionario.nome ? funcionario.nome : " "}</p>
            <p>
              Função : {funcoesInPdf.length > 0 && funcoesInPdf[0].funcaoNome}{" "}
            </p>
            <p>CPF : {funcionario.cpf ? funcionario.cpf : " "}</p>
            <p>CTPS : {funcionario.ctps ? funcionario.ctps : " "}</p>
            <p>
              Data Nasc :{" "}
              {funcionario.dataNasc
                ? funcionario.dataNasc.split("-").reverse().join("/")
                : " "}
            </p>
          </C.AreaItems>
          <C.AreaItems style={{ borderBottom: "1px dotted #000" }}>
            <div style={{ display: "flex" }}>
              <p style={{ fontWeight: "bold" }}>Exame Médico : </p>
              <p style={{ marginLeft: "0.25rem" }}>
                {tipoExame ? tipoExame : " "}
              </p>
            </div>
          </C.AreaItems>
          <C.AreaItems style={{ borderBottom: "1px dotted #000" }}>
            <p style={{ fontWeight: "bold" }}>Riscos Ocupacionais :</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: ".5rem 2rem",
              }}
            >
              {funcoesInPdf.length > 0 &&
                funcoesInPdf[0].riscosOcupacionais.map((risco, index) => {
                  return (
                    <div key={index}>
                      <span
                        style={{
                          fontWeight: "bold",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                        }}
                      >
                        {risco.categoria}
                      </span>
                      {risco.riscosItems.map((item, index) => {
                        return <p key={index}>{item}</p>;
                      })}
                    </div>
                  );
                })}
            </div>
          </C.AreaItems>
          <C.AreaItems style={{ borderBottom: "1px dotted #000" }}>
            <p style={{ fontWeight: "bold" }}>
              Exames Complementares Realizados :{" "}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: " .5rem 2rem",
              }}
            >
              {funcoesInPdf.length > 0 &&
                funcoesInPdf[0].exames.map((exame) => {
                  return (
                    <div
                      key={exame.cod}
                      style={{
                        marginTop: "1rem",
                        fontWeight: "normal",
                      }}
                    >
                      <p>
                        ___/___ /_____ - {exame.nome} - {exame.cod}
                      </p>
                    </div>
                  );
                })}
            </div>
          </C.AreaItems>
          <C.AreaItems
            style={{ borderBottom: "1px dotted #000", alignItems: "center" }}
          >
            <p style={{ fontWeight: "bold" }}>Tenho Sido Considerado : </p>
            <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
              <li style={{ fontSize: "0.9rem" }}>( ) APTO</li>
              <li style={{ fontSize: "0.9rem" }}>( ) INAPTO</li>
              <li style={{ fontSize: "0.9rem" }}>( ) INAPTO TEMPORARIAMENTE</li>
            </ul>
          </C.AreaItems>

          <div style={{ display: "flex", gap: "3rem", marginTop: "4rem" }}>
            <p style={{ fontSize: "0.9rem" }}>
              {" "}
              EXAME CLÍNICO EM: ___/___ /_____{" "}
            </p>
            <p>OBS: ______________________________________</p>
          </div>
          <footer
            style={{
              width: "100%",
              display: "flex",
              marginTop: "4rem",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>_______________________________________</p>
              <p style={{ fontSize: "0.9rem" }}>ASSINATURA DO EXAMINADOR</p>
              <p style={{ fontSize: "0.75rem" }}>
                Declaro ter sido examinado pelo médico
              </p>
              <p style={{ fontSize: "0.75rem" }}>
                e recebi uma cópia deste atestado.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>_______________________________________</p>
              <p style={{ fontSize: "0.9rem" }}>ASSINATURA DO Médico</p>
              <p style={{ fontSize: "0.75rem" }}>Examinador</p>
            </div>
          </footer>
        </C.AreaEmpresa>
      </C.ContainerPDF>
    </C.Container>
  );
}
