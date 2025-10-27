import { styled, css } from "styled-components";
import { TypographySize, TypographyVariant, TypographyWeight } from "./types";

export interface TypographyProps {
  $variant?: TypographyVariant;
}

export const Typography = styled.span<TypographyProps>`
  ${({ $variant }) => {
    let fontSize;
    let fontWeight;

    const [size, weight] = $variant?.split("-") as [
      TypographySize,
      TypographyWeight
    ];

    switch (size) {
      case "h1":
        fontSize = "3.05em";
        break;
      case "h2":
        fontSize = "2.44em";
        break;
      case "h3":
        fontSize = "1.95em";
        break;
      case "p":
        fontSize = "1em";
        break;
      case "small":
        fontSize = "0.8em";
        break;
    }

    switch (weight) {
      case "light":
        fontWeight = 300;
        break;
      case "normal":
        fontWeight = 400;
        break;
      case "medium":
        fontWeight = 500;
        break;
      case "semibold":
        fontWeight = 600;
        break;
      case "bold":
        fontWeight = 700;
        break;
    }

    return css`
      font-size: ${fontSize};
      font-weight: ${fontWeight};
    `;
  }}
  overflow-wrap: break-word;
  word-break: normal;
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.base.black};
`;
