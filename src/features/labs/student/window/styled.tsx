import { styled } from "styled-components";

export const StudentLabWindowFields = styled.div`
  display: grid;
  gap: 20px;
  grid-template-areas: "answer log";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
`;
