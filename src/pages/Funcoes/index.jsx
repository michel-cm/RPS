import { Button } from "../../components/Button";
import * as C from "./styles";

import { useNormasContext } from "../../hooks/useNormasContext";
import { useState } from "react";
import { ModalAddNovaFuncao } from "./ModalAddNovaFuncao";
import { BsFillTrashFill } from "react-icons/bs";

export function Funcoes() {
  const [modalAddFuncao, setModalAddFuncao] = useState(false);

  const { deletFuncao, getAllFuncoes, funcoes } = useNormasContext();

  function handleOpenModalAddFuncao() {
    setModalAddFuncao(true);
  }

  async function handleConfirmDelete(idFuncao) {
    window.confirm("Confirmar exclusão ?") &&
      (await deletFuncao(idFuncao).then(async () => {
        await getAllFuncoes();
      }));
  }

  console.log("funcoesss")

  return (
    <C.Container>
      <C.title> Funções </C.title>
      <C.AreaInternal>
        <Button title={"Cadastrar Função"} fn={handleOpenModalAddFuncao} />
      </C.AreaInternal>
      <C.AreaInternal>
        {funcoes.length > 0 &&
          funcoes.map((funcao) => {
            return (
              <C.AreaFuncao key={funcao.id}>
                <h2>{funcao.funcaoNome}</h2>
                <C.Icon onClick={() => handleConfirmDelete(funcao.id)}>
                  <BsFillTrashFill size={14} />
                </C.Icon>
                <h4>Riscos Ocupacionais:</h4>
                <C.AreaRiscos>
                  {funcao.riscosOcupacionais.map((funcao, index) => {
                    return (
                      <C.RiscosItens key={index}>
                        <span
                          style={{
                            textDecoration: "underline",
                            fontWeight: "bold",
                          }}
                        >
                          {funcao.categoria}
                        </span>
                        {funcao.riscosItems &&
                          funcao.riscosItems.map((item, index) => {
                            return <li key={index}>{item}</li>;
                          })}
                      </C.RiscosItens>
                    );
                  })}
                </C.AreaRiscos>

                <C.AreaExames>
                  <h4>Exames:</h4>
                  <C.ExamesItens>
                    {funcao.exames.map((exame) => {
                      return (
                        <li key={exame.cd}>
                          {exame.cod} - {exame.nome}
                        </li>
                      );
                    })}
                  </C.ExamesItens>
                </C.AreaExames>
              </C.AreaFuncao>
            );
          })}
      </C.AreaInternal>
      {modalAddFuncao && <ModalAddNovaFuncao setModal={setModalAddFuncao} />}
    </C.Container>
  );
}
