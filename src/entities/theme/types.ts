export type ThemeVariant = "light" | "dark";

export type Theme = {
  mode: "light" | "dark";
  colors: {
    base: {
      white: string;
      black: string;
    };
    grayScale: {
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      bg: string;
    };
  };
  size: {
    maxTablet: number;
    maxMobile: number;
  };
  zIndex: {
    backdrop: number;
    modal: number;
    notifications: number;
  };
};
