import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 3rem 6rem 3rem;
`;

export const title = styled.h2`
  margin-bottom: 1rem;
`;

export const AreaInternal = styled.div`
  border-radius: 5px;
  background: ${(props) => props.theme["gray-800"]};
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const AreaFuncao = styled.div`
  padding: 1rem 1.5rem;
  border: 1px solid ${(props) => props.theme["gray-600"]};
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 0.75rem;

  h2 {
    color: yellow;
    margin-bottom: 0.75rem;
  }

  ul {
    font-size: 0.9rem;
  }
`;

export const AreaRiscos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const RiscosItens = styled.ul`
  li {
    list-style: none;
  }

  span {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
`;

export const AreaExames = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ExamesItens = styled.ul`
  li {
    margin: 0 0 0.25rem 1.25rem;
  }
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