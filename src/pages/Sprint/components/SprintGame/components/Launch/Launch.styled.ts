import styled from "styled-components";

export const Wrapper = styled.div`

`;

export const Start = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => active ? 'lightpink' : 'whitesmoke'};
  cursor: pointer;
`;