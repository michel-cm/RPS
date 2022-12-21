import * as C from "./styles";
import { Button } from "../../components/Button";

import { BsFillEyeFill } from "react-icons/bs";


const riscosOcupacionais = [
  {
    id: "dsjdasjkdsa",
    categoria: "Físicos",
    variacoes: [
      "Ruídos",
      "Vibrações",
      "Vibrações",
      "Trabalho Máquinas/Equipamentos",
      "Radiações",
      "Frio/Calor",
    ],
  },
  {
    id: "aajdasjkdsa",
    categoria: "Químicos",
    variacoes: ["Poeiras", "Pro. QI", "Gases/Vapores"],
  },
  {
    id: "bbjdasjkdsa",
    categoria: "Biológios",
    variacoes: ["Vírus/Bactérias", "Fungos", "Parasitas"],
  },
];

export function Normas() {
  return (
    <C.Container>
      <C.title>Riscos ocupacionais</C.title>
      <C.AreaIdentificacao>
        {riscosOcupacionais.length > 0 &&
          riscosOcupacionais.map((risco, index) => {
            return (
              <C.AreaCategoria>
                <div key={risco.id}>
                  <C.InputTitle
                    style={{}}
                    type="text"
                    value={risco.categoria}
                  />

                  <C.AreaItems>
                    {risco.variacoes.map((item, index) => {
                      return <input key={index} type={"text"} value={item} />;
                    })}
                  </C.AreaItems>
                </div>
                <div
                  style={{
                    margin: "1.5rem 0 1rem 0",
                  }}
                >
                  <C.ButtonCadastrarItem>
                    Cadastrar novo risco
                  </C.ButtonCadastrarItem>
                </div>
              </C.AreaCategoria>
            );
          })}
        <div
          style={{
            margin: "1.5rem 0 1rem 0",
          }}
        >
          <Button title={"Cadastrar nova categoria"} />
        </div>
      </C.AreaIdentificacao>
    </C.Container>
  );
}
