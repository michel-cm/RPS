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
