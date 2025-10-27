import { styled } from "styled-components";

export const LabsPageStyled = styled.div`
  grid-area: content;
  display: grid;
  grid-template-areas: "sidebar main";
  grid-template-rows: 1fr;
  grid-template-columns: 20% auto;
`;
