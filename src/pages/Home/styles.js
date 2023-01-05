import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 3rem 6rem 3rem;

  h3,
  h2 {
    margin-bottom: 2rem;
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
  right: 1rem;

  display: flex;
  gap: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    height: 50px;
    width: 10rem;

    background-color: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.white};
    cursor: pointer;
    border-radius: 5px;
    border: none;
    letter-spacing: 1px;
    font-weight: 400;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }
`;

// PDF
export const ContainerPDF = styled.div`
  background-color: #fff;
  color: #000;
  padding: 0.25rem;
  display: none;
  @media print {
    & {
      display: block;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px dotted #000;
  img {
    max-width: 100%;
    width: 6rem;
    margin-bottom: 0.5rem;
  }

  span {
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: underline;
    margin-bottom: 0.2rem;
  }
  p {
    font-size: 0.85rem;
    margin-bottom: 0.2rem;
  }
`;

export const AreaEmpresa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1rem;

  span {
    font-weight: bold;
    font-size: 1.1rem;
    text-decoration: underline;
    margin-bottom: 0.2rem;
  }
  p {
    font-size: 0.85rem;
    margin-bottom: 0.2rem;
  }
`;

export const AreaItems = styled.div`
  padding: 1rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  p {
    margin-bottom: 0.3rem;
  }
`;
