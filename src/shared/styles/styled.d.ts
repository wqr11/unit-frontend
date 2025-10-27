import "styled-components";

import type { Theme } from "@/entities/theme/types";

declare module "styled-components" {
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}
