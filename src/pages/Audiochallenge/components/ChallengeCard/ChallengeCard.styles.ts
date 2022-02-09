import styled from 'styled-components';

export const StyledChallengeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & * {
    margin-bottom: 30px;
  }
`;

export const StyledAnswersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  margin: 0 auto;
  cursor: pointer;
`;
