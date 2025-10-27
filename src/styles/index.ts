import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
    };
    body {
        overflow: hidden;
    }
    ${({ theme }) => theme.colors.base.white};
`;
