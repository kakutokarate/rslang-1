import styled from "styled-components";

export const StyledAnswer = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  &.wrong-answer {
    color: red;
  }
  &.correct-answer {
    color: green;
  }
  &.disabled-answer {
    cursor: default;
  }
`;
