import * as C from "./styles";

export function Home() {
  return (
    <C.Container>
      <C.AreaIdentificacao>
        <h2>ASO - Atestado de saúde ocupacional</h2>
        <C.AreaInputsDisplayFlex>
          <C.InputColumn
            style={{
              width: "350px",
            }}
          >
            <label>Nome do funcionário</label>
            <C.Input type={"text"} />
          </C.InputColumn>

          <C.InputColumn
            style={{
              width: "150px",
            }}
          >
            <label>CPF</label>
            <C.Input type={"text"} required maxLength={11} />
          </C.InputColumn>

          <C.InputColumn
            style={{
              width: "180px",
            }}
          >
            <label>Idade</label>
            <C.Input type={"number"} />
          </C.InputColumn>
        </C.AreaInputsDisplayFlex>
        <C.InputColumn
          style={{
            width: "350px",
          }}
        >
          <label>Nome da empresa</label>
          <C.Input type={"text"} required />
        </C.InputColumn>

        <C.AreaInputsDisplayFlex
          style={{
            gap: "1rem",
          }}
        >
          <C.InputColumn
            style={{
              width: "250px",
            }}
          >
            <label>Função</label>
            <C.Select>
              <option value="branco"></option>
              <option value="solteiro">Tratorista</option>
              <option value="casado">Mecanico</option>
              <option value="viuvo">Panhador de café agrícola</option>
            </C.Select>
          </C.InputColumn>

          <C.InputColumn
            style={{
              width: "200px",
            }}
          >
            <label>Setor</label>
            <C.Input type={"text"} />
          </C.InputColumn>
        </C.AreaInputsDisplayFlex>

        <C.AreaInputsDisplayFlex
          style={{
            gap: "1rem",
          }}
        ></C.AreaInputsDisplayFlex>
      </C.AreaIdentificacao>
    </C.Container>
  );
}
