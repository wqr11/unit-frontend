import { styled } from "styled-components";

export const RootLayoutStyled = styled.main`
  margin: 0;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  display: grid;
  grid-template-areas: "header" "content";
  grid-template-columns: 1fr;
  grid-template-rows: 64px calc(100% - 64px);
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
`;
