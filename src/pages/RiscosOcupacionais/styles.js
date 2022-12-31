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
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const AreaCategoria = styled.div`
  padding: 1rem 1.5rem;
  border: 1px solid ${(props) => props.theme["gray-600"]};
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const HeaderHroupRiscos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  span {
    font-size: 0.75rem;
    color: orange;
    opacity: 0.8;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const InputTitle = styled.input`
  padding: 0.75rem 0rem;
  font-size: 1.2rem;
  background: none;
  border: none;
  color: ${(props) => props.theme.white};
  margin: 0 0.5rem 0.25rem 0;

  &:focus {
    padding: 0.75rem 0.75rem;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
  }
`;

export const AreaItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  align-items: center;

  flex-wrap: wrap;

  input {
    font-size: 0.9rem;
    width: 100%;
    height: 3rem;
    border: none;
    padding: 0.75rem 2.5rem 0.75rem 0.75rem;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
  }
`;

export const Item = styled.div`
  position: relative;
  width: 100%;
`;

export const Icon = styled.div`
  display: flex;
  position: absolute;
  top: 1rem;
  right: 1rem;

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
