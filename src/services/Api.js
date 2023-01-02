import "firebase/compat/firestore";
import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  DocumentReference,
} from "firebase/firestore";

import { database, firebase } from "./firebase";

export const Api = {
  getAllRiscosOcupacionais: async () => {
    const list = [];

    let results = await getDocs(collection(database, "riscosOcupacionais"));
    results.forEach((result) => {
      let data = result.data();

      list.push({
        id: result.id,
        categoria: data.categoria,
        riscos: data.riscos,
      });
    });
    return list;
  },

  addNewCategoriaRiscoOcupacional: async (nome) => {
    await database.collection("riscosOcupacionais").doc().set({
      categoria: nome,
      riscos: [],
    });
  },

  addNewRiscoOcupacional: async (idCategoria, item) => {
    const normasRef = doc(database, "riscosOcupacionais", idCategoria);
    await updateDoc(
      normasRef,
      {
        riscos: firebase.firestore.FieldValue.arrayUnion({
          id: item.id,
          risco: item.risco,
        }),
      },
      { merge: true }
    );
  },

  deleItemForGroupRisc: async (idCategoria, newItem) => {
    const riscosOcupacionaisRef = doc(
      database,
      "riscosOcupacionais",
      idCategoria
    );
    await updateDoc(riscosOcupacionaisRef, {
      riscos: newItem,
    });
  },

  deleteGroupRisc: async (idCategoria) => {
    await deleteDoc(doc(database, "riscosOcupacionais", idCategoria));
  },

  // Exames \/
  getAllExames: async () => {
    const list = [];

    let results = await getDocs(collection(database, "exames"));
    results.forEach((result) => {
      let data = result.data();

      list.push({
        id: result.id,
        cod: data.cod,
        nome: data.nome,
      });
    });
    return list;
  },

  addNewExame: async (cod, nome) => {
    await database.collection("exames").doc().set({
      cod,
      nome,
    });
  },

  deleteExame: async (idExame) => {
    await deleteDoc(doc(database, "exames", idExame));
  },

  updateExame: async (id, cod, nome) => {
    const exameRef = doc(database, "exames", id);
    await updateDoc(exameRef, {
      cod: cod,
      nome: nome,
    });
  },

  // Funcoes
  getAllFuncoes: async () => {
    const list = [];

    let results = await getDocs(collection(database, "funcoes"));
    results.forEach((result) => {
      let data = result.data();

      list.push({
        id: result.id,
        funcaoNome: data.funcaoNome,
        exames: data.exames,
        riscosOcupacionais: data.riscosOcupacionais,
      });
    });
    return list;
  },

  addNewFuncao: async (nomeFuncao, exames, riscosOcupacionais) => {
    await database.collection("funcoes").doc().set({
      funcaoNome: nomeFuncao,
      riscosOcupacionais: riscosOcupacionais,
      exames: exames,
    });
  },

  deleteFuncao: async (idFuncao) => {
    await deleteDoc(doc(database, "funcoes", idFuncao));
  },

  // Tipos Exames Medicos
  getAllTiposExamesMedicos: async () => {
    const list = [];

    let results = await getDocs(collection(database, "tiposExamesMedicos"));
    results.forEach((result) => {
      let data = result.data();

      list.push({
        id: result.id,
        nome: data.nome,
      });
    });
    return list;
  },

  addNewTipoExameMedico: async (tipo) => {
    await database.collection("tiposExamesMedicos").doc().set({
      nome: tipo,
    });
  },

  updateTipoExameMedico: async (id, nome) => {
    const exameRef = doc(database, "tiposExamesMedicos", id);
    await updateDoc(exameRef, {
      nome: nome,
    });
  },

  deleteTipoExameMedico: async (idTipo) => {
    await deleteDoc(doc(database, "tiposExamesMedicos", idTipo));
  },

  /*
  updateAssistido: async (question, id) => {
    const questionRef = doc(database, "questions", id);
    await updateDoc(questionRef, {
      title: question.title,
      a: question.a,
      b: question.b,
      c: question.c,
      d: question.d,
      active: question.active,
    });
  },
  */
};
