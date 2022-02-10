import styled from 'styled-components';

export const StyledChallengeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  & * {
    margin-bottom: 30px;
  }
`;

export const StyledAnswersWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  margin: 0 auto;
  cursor: pointer;
  text-transform: uppercase;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
