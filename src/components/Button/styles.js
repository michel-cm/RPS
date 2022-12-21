import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  height: 50px;
  padding: 0 1.5rem;
  border: 1px solid
    ${(props) =>
      props.type === "cancel" ? `${props.theme["gray-600"]}` : "transparent"};

  background-color: ${(props) =>
    props.type === "cancel"
      ? `${props.theme["gray-900"]}`
      : `${props.theme["green-500"]}`};
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
`;
