import { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
        color: ${({ theme }) => theme.colors.base.white};
    };
    body {
        overflow: hidden;
    }
`;

export const buttonClickAnimation = keyframes`
  50% {
    transform: translateY(1px);
    filter: brightness(0.8);
  }
  100% {
    transform: translateY(0);
    filter: brightness(1);
  }
`;
