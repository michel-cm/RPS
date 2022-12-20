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

  p {
    margin-bottom: 32px;
  }
`;

export const Modal = styled.div`
  background-color: ${(props) => props.theme["gray-800"]};
  padding: 24px 32px;
  border-radius: 10px;
`;

export const ButtonConfirm = styled.button`
  border: none;
  padding: 16px;
  border-radius: 10%;
  background-color: #5a9bfc;
  border: 1px solid #5a9bfc;

  width: 80px;
  font-size: 15px;
  cursor: pointer;
  transition: filter 0.2s;

  margin-right: 32px;

  &:hover {
    filter: brightness(0.9);
  }
`;
export const ButtonNot = styled.button`
  border: 1px solid #5a9bfc;
  padding: 16px;
  border-radius: 10%;

  width: 80px;
  font-size: 15px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
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
