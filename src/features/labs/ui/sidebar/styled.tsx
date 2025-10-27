import { styled } from "styled-components";

export const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray2};
  background-color: ${({ theme }) => theme.colors.grayScale.bg};
`;
