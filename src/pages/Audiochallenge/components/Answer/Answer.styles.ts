import styled from 'styled-components';

interface IProps {
  isCorrectAnswer: boolean;
  isWrongAnswer: boolean;
}

export const StyledAnswer = styled.div`
  border: ${(props: IProps) =>
    props.isCorrectAnswer
      ? '2px solid rgba(0, 230, 0)'
      : props.isWrongAnswer
      ? '2px solid rgba(230, 0, 0)'
      : '2px solid rgba(37, 99, 235)'};
  color: ${(props: IProps) =>
    props.isCorrectAnswer
      ? 'rgba(0, 230, 0)'
      : props.isWrongAnswer
      ? 'rgba(230, 0, 0)'
      : 'rgba(37, 99, 235)'};
  cursor: pointer;
  margin-right: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.25rem;
  border-radius: 0.375rem;
  padding: 0.5rem 2rem;
  &:hover {
    transform: scale(1.1);
  }
  &:last-child {
    margin-right: 0;
  }
`;
