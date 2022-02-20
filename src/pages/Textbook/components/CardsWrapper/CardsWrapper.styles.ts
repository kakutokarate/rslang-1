import styled from 'styled-components';

export const StyledCardsWrapper = styled.div<{ learnedWordCount: number | false }>`
  width: calc(1200px - 150px);
  min-height: 50vh;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ learnedWordCount }) => learnedWordCount === 20 ? 'lightblue' : '#fff'}
`;