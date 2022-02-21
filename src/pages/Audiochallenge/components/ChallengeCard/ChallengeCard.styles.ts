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
  width: 100%;
  margin: 20px 0 70px;
  padding: 10px;
  list-style-position: inside;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  margin: 0 auto;
  cursor: pointer;
  color: rgba(255, 255, 255);
  text-transform: uppercase;
  font-size: 1.25rem;
  text-align: center;
  border: 1px solid rgba(37, 99, 235);
  background-color: rgba(37, 99, 235);
  border-radius: 0.375rem;
  padding: 0.5rem 2rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  &:hover {
    background-color: rgba(59, 130, 246);
    border: 2px solid rgba(59, 130, 246);
  }
`;

export const StyledRightAnswer = styled.div`
  color: #111827;
  text-transform: none;
`;

export const StyledQuestionWrapper = styled.div`
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
