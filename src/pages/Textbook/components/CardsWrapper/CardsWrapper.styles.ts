import styled from 'styled-components';

export const StyledCardsWrapper = styled.div<{ learnedWordCount: number | false }>`
  max-width: calc(1200px - 150px);
  min-height: 50vh;
  padding: 20px;
  display: flex;
  gap: 15px;
  justify-content: space-around;
  flex-wrap: wrap;
  background: ${({ learnedWordCount }) => learnedWordCount === 20 ? '#dff7df' : '#fff'};

  @media (max-width: 660px) {
    padding: 20px 0;
  }
`;