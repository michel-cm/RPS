import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;
  background-color: ${(props) => props.theme["gray-800"]};
  color: #fff;
  padding: 2rem 3rem;

  nav {
    display: flex;
    gap: 0.75rem;
    font-size: 0.9rem;

    a {
      color: ${(props) => props.theme["gray-400"]};
      text-decoration: none;

      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;

      &:hover {
        border-bottom: 4px solid ${(props) => props.theme.secondary};
      }

      &.active {
        border-bottom: 4px solid ${(props) => props.theme.secondary};
        color: ${(props) => props.theme["gray-100"]};
      }
    }
  }
`;
