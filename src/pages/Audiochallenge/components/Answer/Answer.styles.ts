import styled from 'styled-components';

export const StyledAnswer = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  padding: 0.5rem;
  &:hover {
    transform: scale(1.1);
  }
  &.wrong-answer {
    background-color: #cc8899;
  }
  &.correct-answer {
    background-color: #44944a;
  }
  &.disabled-answer {
    cursor: default;
    color: #d7d7d7;
    border: 1px solid #d7d7d7;
    &:hover {
      transform: none;
    }
  }
`;
