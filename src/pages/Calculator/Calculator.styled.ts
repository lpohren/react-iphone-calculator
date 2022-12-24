import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  width: 20rem;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;
  margin: 0.8rem;
`;
