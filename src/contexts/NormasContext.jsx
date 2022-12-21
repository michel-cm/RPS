import { useCallback } from "react";
import { createContext, useEffect, useState } from "react";

export const NormasContext = createContext({});

import { Api } from "../services/Api";

export function NormasContextProvider({ children }) {
  const [normas, setNormas] = useState([]);
  const [exames, setExames] = useState([]);
  const [riscosOcupacionais, setRiscosOcupacionais] = useState([]);

  const getAllNormas = useCallback(async () => {
    await Api.getAllNormas().then((data) => {
      setNormas(data);
    });
  }, []);

  useEffect(() => {
    if (normas.length === 0) {
      getAllNormas();
    }
  }, [normas]);

  useEffect(() => {
    if (normas.length > 0) {
      setExames(normas[0].exames);
      setRiscosOcupacionais(normas[0].riscosOcupacionais);
    }
  }, [normas, exames, riscosOcupacionais]);

  return (
    <NormasContext.Provider value={{ normas, exames, riscosOcupacionais }}>
      {children}
    </NormasContext.Provider>
  );
}
