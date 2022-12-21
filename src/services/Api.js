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
    console.log(list);
    return list;
  },

  addNewCategoriaRiscoOcupacional: async (nome) => {
    await database.collection("riscosOcupacionais").doc().set(
      {
        categoria: nome,
        riscos: [],
      },
      { merge: true }
    );
  },

  addNewRiscoOcupacional: async (idCategoria, item) => {
    const normasRef = doc(database, "riscosOcupacionais", idCategoria);
    console.log(normasRef);
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
