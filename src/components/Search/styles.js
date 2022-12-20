import styled from "styled-components";

export const SearchInput = styled.input`
  border: 0;
  border-radius: 5px;
  width: 300px;
  height: 50px;
  background-color: ${(props) => props.theme["gray-800"]};
  outline: 0;
  padding: 0px 0px 0px 16px;
  color: ${(props) => props.theme["gray-300"]};

  font-size: 15px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
`;

export const AreaInput = styled.div`
  display: flex;
  align-items: center;
`;

export const IconSearch = styled.div`
  margin-left: -50px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
