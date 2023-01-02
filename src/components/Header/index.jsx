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
        <NavLink to="riscos-ocupacionais" title="riscos ocupacionais">
          Riscos ocupacionais
        </NavLink>
        <NavLink to="exames" title="exames médicos">
          Exames
        </NavLink>
        <NavLink to="tipos-exames" title="exames médicos">
          Tipos Exames
        </NavLink>
      </nav>
    </C.Container>
  );
}
