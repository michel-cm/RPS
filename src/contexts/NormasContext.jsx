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
    }
  }, [riscosOcupacionais]);

  //Exames Context//
  

  return (
    <NormasContext.Provider
      value={{
        riscosOcupacionais,
        getAllRiscosOcupacionais,
        addNewCategoriaRiscoOcupacional,
        addNewItemForGrouRisc,
        deleteItemForGroupRisc,
        deleteGroupRisc,
      }}
    >
      {children}
    </NormasContext.Provider>
  );
}
