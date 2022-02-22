import styled from 'styled-components';

interface IProps {
  isCorrectAnswer: boolean;
  isWrongAnswer: boolean;
}

export const StyledAnswer = styled.div`
  background-color: ${(props: IProps) =>
    props.isCorrectAnswer
      ? '#95D03A'
      : props.isWrongAnswer
      ? '#CB2027'
      : 'transparent'};
  color: ${(props: IProps) =>
    props.isCorrectAnswer || props.isWrongAnswer ? '#fff' : '#111827'};
  cursor: pointer;
  margin: 10px;
  border: 2px solid transparent;
  padding: 15px;
  font-size: 22px;
  line-height: 1;
  text-align: center;
  border-radius: 20px;
  text-transform: none;
  transition: all 0.2s ease-in;
  &:hover {
    color: #fff;
    background-color: #111827;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 980px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
