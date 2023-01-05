import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";
import * as C from "./styles";

export function DefaultLayout() {
  const { user } = useAuth();
  const navigate = useNavigate();

 
  return (
    <C.LayoutContainer>
      <Header />
      <Outlet />
    </C.LayoutContainer>
  );
}
