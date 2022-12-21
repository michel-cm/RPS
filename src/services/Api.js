import "firebase/compat/firestore";
import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { database, firebase } from "./firebase";

export const Api = {
  getAllNormas: async () => {
    const list = [];

    let results = await getDocs(collection(database, "normas"));
    results.forEach((result) => {
      let data = result.data();
      list.push({
        exames:data.exames,
        riscosOcupacionais : data.riscosOcupacionais
      });
    });
    return list;
  },

  /*identificacao,
  endereco,
  condicoesSaude,
  condicoesHabitacionais,
  composicaoFamiliar,
  acessoProgramasSociais,*/
  addNewAssistido: async (assistido) => {
    await database.collection("assistidos").doc().set(
      assistido
      /* {
        identificacao: {
          identificacao,
        },
        endereco: {
          endereco,
        },
        condicoesSaude: {
          condicoesSaude,
        },
        condicoesHabitacionais: {
          condicoesHabitacionais,
        },
        composicaoFamiliar: {
          composicaoFamiliar,
        },
        acessoProgramasSociais: {
          acessoProgramasSociais,
        },
      },*/
    );
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
