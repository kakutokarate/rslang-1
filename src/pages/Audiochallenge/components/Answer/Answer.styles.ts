import styled from 'styled-components';

interface IProps {
  isCorrectAnswer: boolean;
  isWrongAnswer: boolean;
}

export const StyledAnswer = styled.div`
  background-color: ${(props: IProps) =>
    props.isCorrectAnswer
      ? '#44944a'
      : props.isWrongAnswer
      ? '#cc8899'
      : 'transparent'};
  cursor: pointer;
  text-transform: uppercase;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  padding: 0.5rem;
  &:hover {
    transform: scale(1.1);
  }
`;
