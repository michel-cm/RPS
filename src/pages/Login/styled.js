import styled from "styled-components";

export const Container = styled.div`
  background-color: #f1f4f7;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AreaAccount = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  max-width: 480px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  padding: 64px 32px;
  border-radius: 10px;

  box-shadow: -13px 7px 33px -9px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: -13px 7px 33px -9px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -13px 7px 33px -9px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.img`
  width: 100px;
  align-self: center;
  margin-bottom: 24px;
`;

export const FormArea = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    margin-bottom: 48px;
  }

  input {
    font-size: 15px;
  }
`;

export const Email = styled.input`
  padding: 10px;
  margin: 14px 0;
  width: 90%;
`;

export const Passoword = styled.input`
  padding: 10px;
  width: 90%;
`;

export const ButtonSubmitEmail = styled.button`
  border: none;
  cursor: pointer;
  height: 45px;
  border-radius: 4px;
  font-weight: 500;
  background: green;
  color: #fff;
  transition: filter 0.3s;
  font-size: 14px;
  margin-top: 22px;
  width: 80%;

  &:hover {
    filter: brightness(0.8);
  }
`;
