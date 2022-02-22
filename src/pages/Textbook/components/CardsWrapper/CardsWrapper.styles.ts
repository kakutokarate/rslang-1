import styled from 'styled-components';

export const StyledCardsWrapper = styled.div<{ learnedWordCount: number | false }>`
  padding-bottom: 10px;
  flex-grow: 1;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ learnedWordCount }) => learnedWordCount === 20 ? '#dff7df' : '#fff'};
`;