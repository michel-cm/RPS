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
        <NavLink to="assistidos" title="assistidos">
          Assistidos
        </NavLink>
        <NavLink to="inventario" title="inventário">
          Inventário
        </NavLink>
        <NavLink to="profissionais" title="profissionais">
          Profissionais
        </NavLink>
        <NavLink to="documentos" title="documentos">
          Documentos
        </NavLink>       
      </nav>
    </C.Container>
  );
}
