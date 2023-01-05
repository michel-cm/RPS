import { useCallback } from "react";
import { createContext, useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";

export const NormasContext = createContext({});

import { Api } from "../services/Api";

export function NormasContextProvider({ children }) {
  const [exames, setExames] = useState([]);
  const [riscosOcupacionais, setRiscosOcupacionais] = useState([]);
  const [funcoes, setFuncoes] = useState([]);
  const [tiposExamesMedicos, setTiposExamesMedicos] = useState([]);

  //Riscos Ocupacionais Context//
  const getAllRiscosOcupacionais = async () => {
    console.log("normas - executei 08");
    await Api.getAllRiscosOcupacionais().then((data) => {
      setRiscosOcupacionais(data);
    });
  };

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

    await Api.deleItemForGroupRisc(idGroup, itemForUp).then(() => {
      getAllRiscosOcupacionais();
    });
  };

  const deleteGroupRisc = async (idGroup) => {
    await Api.deleteGroupRisc(idGroup);
    getAllRiscosOcupacionais();
  };

  useEffect(() => {
    console.log("normas - executei 07");
    if (riscosOcupacionais.length === 0) {
      getAllRiscosOcupacionais();
    } else {
      return;
    }
  }, []);

  //Exames Context//
  const getAllExames = async () => {
    console.log("normas - executei 06");
    await Api.getAllExames().then((data) => {
      setExames(data);
    });
  };

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
    console.log("normas - executei 05");
    if (exames.length === 0) {
      getAllExames();
    } else {
      return;
    }
  }, []);

  //Funções
  const getAllFuncoes = () => {
    console.log("normas - executei 04");
    Api.getAllFuncoes().then((data) => {
      setFuncoes(data);
    });
  };

  const addNewFuncao = async (nomeFuncao, exames, riscosOcupacionais) => {
    await Api.addNewFuncao(nomeFuncao, exames, riscosOcupacionais);
  };

  const deletFuncao = async (idFuncao) => {
    await Api.deleteFuncao(idFuncao);
  };

  useEffect(() => {
    console.log("normas - executei 03");
    if (funcoes.length === 0) {
      getAllFuncoes();
    } else {
      return;
    }
  }, []);

  // Tipos Exames Medicos
  const getAllTiposExames = async () => {
    console.log("normas - executei 02");
    await Api.getAllTiposExamesMedicos().then((data) => {
      setTiposExamesMedicos(data);
    });
  };

  const deleteTipoExameMedico = async (idTipo) => {
    await Api.deleteTipoExameMedico(idTipo);
  };

  const addNewTipoExame = async (tipo) => {
    await Api.addNewTipoExameMedico(tipo);
  };

  const updateTipoExame = async (id, nome) => {
    await Api.updateTipoExameMedico(id, nome);
  };

  useEffect(() => {
    console.log("normas - executei 01");
    if (tiposExamesMedicos.length === 0) {
      getAllTiposExames();
    } else {
      return;
    }
  }, []);

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

        funcoes,
        getAllFuncoes,
        addNewFuncao,
        deletFuncao,

        tiposExamesMedicos,
        getAllTiposExames,
        addNewTipoExame,
        updateTipoExame,
        deleteTipoExameMedico,
      }}
    >
      {children}
    </NormasContext.Provider>
  );
}
