import { useMemo } from "react";

import { ThemeProvider as ThemeProviderStyled } from "styled-components";

import { useUnit } from "effector-react";
import { themeModel } from "@/entities/theme";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeMode = useUnit(themeModel.$theme);

  const theme: themeModel.Theme = useMemo(() => {
    switch (themeMode) {
      case "light":
        return {
          mode: "light",
          colors: {
            base: {
              white: "#fff",
              black: "#121212",
            },
            grayScale: {
              gray1: "#e2ddd9",
              gray2: "#d8c8b8",
              gray3: "#a8a39d",
              gray4: "#8d7966",
              bg: "#f8f1e9",
            },
          },
          size: {
            maxTablet: 860,
            maxMobile: 640,
          },
          zIndex: {
            backdrop: 3,
            modal: 6,
            notifications: 8,
          },
        };
      case "dark":
        return {
          mode: "dark",
          colors: {
            base: {
              white: "#181818",
              black: "#fff",
            },
            grayScale: {
              gray1: "#434343",
              gray2: "#434343",
              gray3: "#a8a39d",
              gray4: "#8d7966",
              bg: "#f8f1e9",
            },
          },
          size: {
            maxTablet: 860,
            maxMobile: 640,
          },
          zIndex: {
            backdrop: 3,
            modal: 6,
            notifications: 8,
          },
        };
    }
  }, [themeMode]);

  return <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>;
};
