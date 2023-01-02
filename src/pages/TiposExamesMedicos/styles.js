import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 3rem 6rem 3rem;
  min-height: 100vh;
`;

export const title = styled.h2`
  margin-bottom: 1rem;
`;

export const AreaIdentificacao = styled.div`
  border-radius: 5px;
  background: ${(props) => props.theme["gray-800"]};
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const AreaCategoria = styled.div`
  padding: 1rem 1.5rem;
  border: 1px solid ${(props) => props.theme["gray-600"]};
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const AreaItems = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  align-items: center;

  flex-wrap: wrap;

  input {
    font-size: 0.9rem;
    height: 3rem;
    border: none;
    padding: 0.75rem;

    color: ${(props) => props.theme["gray-300"]};
  }
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  gap: 0.25rem;
`;

export const InputCod = styled.input`
  width: 7rem;
  text-align: center;
  background: ${(props) => props.theme["gray-900"]};
`;

export const InputExame = styled.input`
  width: 100%;
  background: none;

  &:focus {
    background: ${(props) => props.theme["gray-900"]};
  }
`;

export const AreaIcon = styled.div`
  display: flex;
  position: absolute;
  top: 1rem;
  right: 1rem;
  gap: 1.5rem;
`;

export const Icon = styled.div`
  opacity: 0.8;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const ButtonCadastrarItem = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  font-size: 0.9rem;
  color: ${(props) => props.theme["green-500"]};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
