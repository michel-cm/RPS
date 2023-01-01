import { useCallback } from "react";
import { createContext, useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";

export const NormasContext = createContext({});

import { Api } from "../services/Api";

export function NormasContextProvider({ children }) {
  const [exames, setExames] = useState([]);
  const [riscosOcupacionais, setRiscosOcupacionais] = useState([]);

  //Riscos Ocupacionais Context//
  const getAllRiscosOcupacionais = useCallback(async () => {
    await Api.getAllRiscosOcupacionais().then((data) => {
      setRiscosOcupacionais(data);
    });
  }, []);

  const addNewCategoriaRiscoOcupacional = async (nome) => {
    await Api.addNewCategoriaRiscoOcupacional(nome);
  };

  const addNewItemForGrouRisc = async (idCategoria, nomeRiscoItem) => {
    const item = { id: uuidv1(), risco: nomeRiscoItem };

    await Api.addNewRiscoOcupacional(idCategoria, item);
  };

  const deleteItemForGroupRisc = async (idGroup, idItem) => {
    const riscosOcupacionaisCategory = riscosOcupacionais.filter(
      (risco) => risco.id === idGroup
    );
    const itemForUp = riscosOcupacionaisCategory[0].riscos.filter(
      (item) => item.id !== idItem
    );

    await Api.deleItemForGroupRisc(idGroup, itemForUp).then(async () => {
      await getAllRiscosOcupacionais();
    });
  };

  const deleteGroupRisc = async (idGroup) => {
    await Api.deleteGroupRisc(idGroup);
    getAllRiscosOcupacionais();
  };

  useEffect(() => {
    if (riscosOcupacionais.length === 0) {
      getAllRiscosOcupacionais();
    } else {
      return;
    }
  }, [riscosOcupacionais]);

  //Exames Context//
  const getAllExames = useCallback(async () => {
    await Api.getAllExames().then((data) => {
      setExames(data);
    });
  }, []);

  const addNewExame = async (cod, nome) => {
    await Api.addNewExame(cod, nome);
  };

  const deleteExame = async (idExame) => {
    await Api.deleteExame(idExame);
  };

  const updateExame = async (idExame, cod, nome) => {
    await Api.updateExame(idExame, cod, nome);
  };

  useEffect(() => {
    if (exames.length === 0) {
      getAllExames();
    } else {
      return;
    }
  }, [exames]);

  return (
    <NormasContext.Provider
      value={{
        riscosOcupacionais,
        getAllRiscosOcupacionais,
        addNewCategoriaRiscoOcupacional,
        addNewItemForGrouRisc,
        deleteItemForGroupRisc,
        deleteGroupRisc,

        exames,
        getAllExames,
        addNewExame,
        deleteExame,
        updateExame,
      }}
    >
      {children}
    </NormasContext.Provider>
  );
}
