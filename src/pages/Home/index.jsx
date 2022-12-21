import * as C from "./styles";
import { Button } from '../../components/Button';

export function Home() {
  return (
    <C.Container>
      <h2>Atestado médico de saúde ocupacional</h2>
      <C.AreaIdentificacao>
        <h3>Empresa</h3>
        <C.AreaInputsDisplayFlex>
          <C.InputColumn
            style={{
              width: "350px",
            }}
          >
            <label>Razão Social</label>
            <C.Input type={"text"} />
          </C.InputColumn>

          <C.InputColumn
            style={{
              width: "150px",
            }}
          >
            <label>CNPJ/CEI</label>
            <C.Input type={"text"} />
          </C.InputColumn>
        </C.AreaInputsDisplayFlex>

        <C.AreaInputsDisplayFlex
          style={{
            gap: "1rem",
          }}
        >
          <C.InputColumn
            style={{
              width: "350px",
            }}
          >
            <label>Rua</label>
            <C.Input type={"text"} />
          </C.InputColumn>
          <C.InputColumn
            style={{
              width: "100px",
            }}
          >
            <label>N°</label>
            <C.Input type={"number"} />
          </C.InputColumn>
          <C.InputColumn
            style={{
              width: "150px",
            }}
          >
            <label>Bairro</label>
            <C.Input type={"number"} />
          </C.InputColumn>
          <C.InputColumn
            style={{
              width: "150px",
            }}
          >
            <label>Cidade</label>
            <C.Input type={"text"} />
          </C.InputColumn>
        </C.AreaInputsDisplayFlex>

        <C.AreaInputsDisplayFlex
          style={{
            gap: "1rem",
          }}
        ></C.AreaInputsDisplayFlex>
      </C.AreaIdentificacao>
      <C.AreaIdentificacao>
        <h3>Funcionário</h3>
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
            <label>CTPS</label>
            <C.Input type={"text"} required maxLength={11} />
          </C.InputColumn>

          <C.InputColumn
            style={{
              width: "150px",
            }}
          >
            <label>Data nascimento</label>
            <C.Input type={"date"} />
          </C.InputColumn>
        </C.AreaInputsDisplayFlex>

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
              <option value="tratorista">Tratorista</option>
              <option value="mecanico">Mecanico</option>
              <option value="panhador">Panhador de café agrícola</option>
            </C.Select>
          </C.InputColumn>
        </C.AreaInputsDisplayFlex>

        <C.AreaInputsDisplayFlex
          style={{
            gap: "1rem",
          }}
        ></C.AreaInputsDisplayFlex>
      </C.AreaIdentificacao>
      <C.ButtonAdd>
        <Button title="Cancelar" type={"cancel"}/>
        <Button title="Gerar atestado"/>
      </C.ButtonAdd>
    </C.Container>
  );
}
