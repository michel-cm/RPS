import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 3rem 6rem 3rem;
`;

export const title = styled.h2`
  margin-bottom: 1rem;
`;

export const AreaIdentificacao = styled.div`
  border-radius: 5px;
  background: ${(props) => props.theme["gray-800"]};
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const AreaCategoria = styled.div`
  padding-bottom: 2rem;
`;

export const AreaItems = styled.div`

  display: flex;
  gap: 1rem 3rem;

  align-items: center;

  flex-wrap: wrap;

  input {
    font-size: 0.9rem;
    flex: 1;
    min-width: 25%;
    max-width: 30%;
    border: none;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
  }
`;

export const InputTitle = styled.input`
  padding: 0.75rem 0rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: ${(props) => props.theme.white};
  margin-bottom: 0.25rem;

  &:focus {
    padding: 0.75rem 0.75rem;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
  }
`;

export const ButtonCadastrarItem = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  color: ${(props) => props.theme["green-500"]};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Icon = styled.div`
  display: flex;
  margin-left: -80px;

  opacity: 0.8;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
