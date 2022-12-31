import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(77, 77, 77, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  transition: all 0.4s;
  z-index: 10;

  h3 {
    margin: 1rem 0 2rem 0;
  }

  input {
    font-size: 0.9rem;
    border: none;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    width: 100%;
  }
`;

export const AreaInput = styled.div`
  margin-bottom: 2rem;
`;

export const Modal = styled.div`
  background-color: ${(props) => props.theme["gray-800"]};
  padding: 24px 32px;
  border-radius: 10px;
`;

export const ButtonConfirm = styled.button`
  border: 1px solid transparent;
  padding: 16px;
  border-radius: 4px;
  background-color: ${(props) => props.theme["green-700"]};
  color: ${(props) => props.theme["gray-100"]};
  width: 120px;
  font-size: 15px;
  cursor: pointer;
  transition: filter 0.2s;

  margin-right: 32px;

  &:hover {
    filter: brightness(0.75);
  }
  &:disabled {
    background-color: ${(props) => props.theme["gray-800"]};
    border: 1px solid ${(props) => props.theme["gray-600"]};
    cursor: not-allowed;
  }
`;

export const ButtonNot = styled.button`
  padding: 16px;
  border-radius: 4px;
  background-color: ${(props) => props.theme["gray-900"]};
  width: 120px;
  font-size: 15px;
  cursor: pointer;
  transition: filter 0.2s;
  color: ${(props) => props.theme["gray-100"]};
  border: none;

  &:hover {
    filter: brightness(0.75);
  }
`;

export const AreaClose = styled.div`
  text-align: end;
  padding-bottom: 8px;

  svg {
    font-size: 28px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
