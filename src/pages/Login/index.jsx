import * as C from "./styled";
import sprLogo from "../../assets/iconPdfSpr.jpg";

import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loginWithEmail, handleUpdatePassowrd } = useAuth();
  const navigate = useNavigate();

  const handleLoginEmail = async (e) => {
    e.preventDefault();
    await loginWithEmail(email, password).then(() => navigate("/"));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  console.log("Login");
  return (
    <C.Container>
      <C.AreaAccount>
        <C.Logo src={sprLogo} alt="Giro Agro Logo"></C.Logo>
        <C.FormArea>
          <C.Email
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
            placeholder="Email"
          ></C.Email>
          <C.Passoword
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            placeholder="Senha"
          ></C.Passoword>
          <C.ButtonSubmitEmail onClick={handleLoginEmail} type="submit">
            ENTRAR
          </C.ButtonSubmitEmail>
          <span
            onClick={handleUpdatePassowrd}
            style={{ cursor: "pointer", color: "#000", marginTop: "1rem" }}
          >
            Esqueci minha senha
          </span>
        </C.FormArea>
      </C.AreaAccount>
    </C.Container>
  );
};
