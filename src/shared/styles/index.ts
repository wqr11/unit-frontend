import { createGlobalStyle } from "styled-components";

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
