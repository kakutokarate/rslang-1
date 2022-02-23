import styled from 'styled-components';

export const StyledCardsWrapper = styled.div<{
  learnedWordCount: { diffCount: number; agg: number } | false;
}>`
  padding-bottom: 10px;
  flex-grow: 1;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ learnedWordCount }) =>
    learnedWordCount &&
    learnedWordCount.agg === 20 &&
    learnedWordCount.diffCount < 20
      ? '#dff7df'
      : '#fff'};
`;