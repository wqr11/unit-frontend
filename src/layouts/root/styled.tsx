import { styled } from "styled-components";

export const RootLayoutStyled = styled.main`
  display: grid;
  gap: 20px;
  grid-template-areas: "header" "content";
  grid-template-columns: 1fr;
  grid-template-rows: 120px auto;
`;
