import { styled } from "styled-components";

export const LabsPageStyled = styled.div`
  grid-area: content;
  display: grid;
  gap: 34px;
  grid-template-areas: "sidebar main";
  grid-template-rows: 1fr;
  grid-template-columns: minmax(200px, 20%) auto;
  padding: 12px;
`;
