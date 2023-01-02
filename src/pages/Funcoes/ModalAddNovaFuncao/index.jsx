import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";
import { useNormasContext } from "../../../hooks/useNormasContext";
import { useState } from "react";

export function ModalAddNovaFuncao({ setModal }) {
  const handleCloseModal = () => {
    setModal(false);
  };

  const { riscosOcupacionais, addNewFuncao, exames, getAllFuncoes } =
    useNormasContext();

  const [nomeNewFuncao, setNomeNewFuncao] = useState("");

  const [examesSelected, setExamesSelected] = useState([]);

  const [riscosSelected, setRiscosSelected] = useState([]);

  const [riscoInexistente, setRiscoInexistente] = useState(false);

  const handleRiscoInexistente = (e) => {
    setRiscoInexistente(e);
  };

  const handleGroupRisckAdd = (e, item) => {
    if (e == true) {
      setRiscosSelected([...riscosSelected, item]);
    } else {
      const filtered = riscosSelected.filter(
        (risco) => risco.categoria !== item.categoria
      );
      setRiscosSelected(filtered);
    }
  };

  const handleGroupRiscAddItem = (e, item) => {
    if (e == true) {
      const altered = riscosSelected.map((risco) => {
        if (risco.categoria == item.categoria) {
          risco.riscosItems.push(item.riscoAdd);
        }
      });
    }
  };

  const handleGroupExamesAdd = (e, item) => {
    if (e == true) {
      setExamesSelected([...examesSelected, item]);
    } else {
      const filtered = examesSelected.filter((exame) => exame.cod !== item.cod);
      setExamesSelected(filtered);
    }
  };

  const handleAddFuncao = async () => {
    if (riscoInexistente) {
      await addNewFuncao(nomeNewFuncao, examesSelected, [
        { categoria: "Inexistente", riscoItems: [] },
      ]).then(async () => {
        await getAllFuncoes().then(() => {
          handleCloseModal();
        });
      });
    } else {
      await addNewFuncao(nomeNewFuncao, examesSelected, riscosSelected).then(
        async () => {
          await getAllFuncoes().then(() => {
            handleCloseModal();
          });
        }
      );
    }
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
        <h3>Cadastrar nova Função</h3>
        <C.AreaInput>
          <input
            type="text"
            placeholder="Nome da Função"
            value={nomeNewFuncao}
            onChange={(e) => setNomeNewFuncao(e.target.value)}
          />
        </C.AreaInput>
        <div>
          <h4>Riscos Ocupacionais:</h4>
          <input
            type={"checkbox"}
            name="inexistente"
            id="inexistente"
            checked={riscoInexistente}
            onChange={(e) => handleRiscoInexistente(e.target.checked)}
          />
          <C.Inexistente htmlFor="inexistente">inexistente</C.Inexistente>
          {riscoInexistente == false && (
            <C.AreaCategory>
              {riscosOcupacionais.length > 0 &&
                riscosOcupacionais.map((risco) => {
                  return (
                    <div key={risco.id}>
                      <input
                        type={"checkbox"}
                        name={risco.categoria}
                        id={risco.categoria}
                        onChange={(e) =>
                          handleGroupRisckAdd(e.target.checked, {
                            categoria: risco.categoria,
                            riscosItems: [],
                          })
                        }
                      />
                      <C.TitleCategoryRiscos htmlFor={risco.categoria}>
                        {risco.categoria}
                      </C.TitleCategoryRiscos>
                      {riscosSelected.length > 0 &&
                        riscosSelected.find(
                          (riscoItem) => riscoItem.categoria == risco.categoria
                        ) &&
                        risco.riscos.map((riscoItem) => {
                          return (
                            <div
                              key={riscoItem.id}
                              style={{ marginLeft: "0.75rem" }}
                            >
                              <input
                                type={"checkbox"}
                                name={riscoItem.risco}
                                id={riscoItem.risco}
                                value={riscoItem.risco}
                                onChange={(e) =>
                                  handleGroupRiscAddItem(e.target.checked, {
                                    categoria: risco.categoria,
                                    riscoAdd: riscoItem.risco,
                                  })
                                }
                              />
                              <label htmlFor={riscoItem.risco}>
                                {riscoItem.risco}
                              </label>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
            </C.AreaCategory>
          )}
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h4>Exames:</h4>
          <C.AreaExames>
            {exames.length > 0 &&
              exames.map((exame) => {
                return (
                  <div key={exame.cod}>
                    <input
                      type={"checkbox"}
                      name={exame.nome}
                      id={exame.nome}
                      onChange={(e) =>
                        handleGroupExamesAdd(e.target.checked, {
                          cod: exame.cod,
                          nome: exame.nome,
                        })
                      }
                    />
                    <C.TitleCategoryRiscos htmlFor={exame.nome}>
                      {exame.nome}
                    </C.TitleCategoryRiscos>
                  </div>
                );
              })}
          </C.AreaExames>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <C.ButtonConfirm onClick={handleAddFuncao}>Adicionar</C.ButtonConfirm>
          <C.ButtonNot onClick={handleCloseModal}>Cancelar</C.ButtonNot>
        </div>
      </C.Modal>
    </C.Container>
  );
}
