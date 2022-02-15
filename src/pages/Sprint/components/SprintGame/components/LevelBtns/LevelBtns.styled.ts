import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const LevelBtn = styled.button<{ active: boolean }>`
  cursor: pointer;
  background-color: ${({ active }) => active ? 'orange' : 'whitesmoke'};
`;