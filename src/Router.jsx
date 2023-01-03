import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { Funcoes } from "./pages/Funcoes";
import { RiscosOcupacionais } from "./pages/RiscosOcupacionais";
import { Exames } from "./pages/Exames";
import { TiposExamesMedicos } from "./pages/TiposExamesMedicos";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/funcoes" element={<Funcoes />} />
        <Route path="/riscos-ocupacionais" element={<RiscosOcupacionais />} />
        <Route path="/exames" element={<Exames />} />
        <Route path="/exames/:id" element={<Exames />} />
        <Route path="/tipos-exames" element={<TiposExamesMedicos />} />
      </Route>
      <Route>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
