import { styled } from "styled-components";
import { Button } from "@/shared/components/button";
import { Typography } from "@/shared/components/typography";
import { Modal } from "@/shared/components/modal";

export const CreateLabModalStyled = styled(Modal).attrs({
  style: {
    width: "60vw",
  },
})``;

export const CreateLabButton = styled(Button).attrs(({ children }) => ({
  children: <Typography $variant="p-medium">{children}</Typography>,
}))`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray2};
  outline: 1px solid ${({ theme }) => theme.colors.grayScale.gray3};
`;
