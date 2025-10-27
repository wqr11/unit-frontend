export type TypographyWeight =
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold";
export type TypographySize = "h1" | "h2" | "h3" | "p" | "small";

export type TypographyVariant = `${TypographySize}-${TypographyWeight}`;
