import { NavLink } from "react-router-dom";
import * as C from "./styles";

export function Header() {
  return (
    <C.Container>
      <div>Logo</div>
      <nav>
        <NavLink to="/" title="início">
          Home
        </NavLink>
        <NavLink to="funcoes" title="funções">
          Funcoes
        </NavLink>
        <NavLink to="normas" title="normas">
          Normas
        </NavLink>
        <NavLink to="atestados" title="atestados">
          Atestados
        </NavLink>
      </nav>
    </C.Container>
  );
}
