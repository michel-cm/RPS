import styled from "styled-components";

export const Container = styled.div`
    padding: 3rem;

 h2 {
    margin-bottom: 2.5rem;
 }
`;

export const AreaIdentificacao = styled.div`
  border-radius: 5px;
  background: ${(props) => props.theme["gray-800"]};
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const AreaInputsDisplayFlex = styled.div`
  display: flex;
  gap: 2rem;
`;

export const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  background: ${(props) => props.theme["gray-900"]};
  border: none;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme["gray-300"]};
  font-size: 0.9rem;

  &[type="date"] {
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }
`;

export const Select = styled.select`
  background: ${(props) => props.theme["gray-900"]};
  border: none;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme["gray-300"]};
  font-size: 0.9rem;
`;

export const ButtonAdd = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1.25rem;

  display: flex;
  gap: 1rem;
`;