import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { Funcoes } from "./pages/Funcoes";
import { Normas } from "./pages/Normas";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/funcoes" element={<Funcoes />} />
        <Route path="/normas" element={<Normas />} />
      </Route>
    </Routes>
  );
}
