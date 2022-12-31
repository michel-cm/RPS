import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { Funcoes } from "./pages/Funcoes";
import { RiscosOcupacionais } from "./pages/RiscosOcupacionais";
import { Exames } from "./pages/Exames";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/funcoes" element={<Funcoes />} />
        <Route path="/riscos-ocupacionais" element={<RiscosOcupacionais />} />
        <Route path="/exames" element={<Exames />} />
      </Route>
    </Routes>
  );
}
