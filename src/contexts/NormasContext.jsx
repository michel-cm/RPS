import { useCallback } from "react";
import { createContext, useEffect, useState } from "react";

export const NormasContext = createContext({});

import { Api } from "../services/Api";

export function NormasContextProvider({ children }) {
  const [exames, setExames] = useState([]);
  const [riscosOcupacionais, setRiscosOcupacionais] = useState([]);

  const getAllRiscosOcupacionais = useCallback(async () => {
    await Api.getAllRiscosOcupacionais().then((data) => {
      setRiscosOcupacionais(data);
    });
  }, []);

  const addNewCategoriaRiscoOcupacional = async (nome) => {
    await Api.addNewCategoriaRiscoOcupacional(nome);
  };

  useEffect(() => {
    if (riscosOcupacionais.length === 0) {
      getAllRiscosOcupacionais();
    }
  }, [riscosOcupacionais]);

  return (
    <NormasContext.Provider
      value={{
        riscosOcupacionais,
        getAllRiscosOcupacionais,
        addNewCategoriaRiscoOcupacional,
      }}
    >
      {children}
    </NormasContext.Provider>
  );
}
