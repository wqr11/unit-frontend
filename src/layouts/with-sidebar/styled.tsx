import { styled } from "styled-components";

export const PageWithSidebarLayoutStyled = styled.div`
  grid-area: content;
  display: grid;
  gap: 12px;
  grid-template-areas: "sidebar main";
  grid-template-rows: 100%;
  grid-template-columns: max(240px, 20%) auto;
  padding: 12px;
`;
