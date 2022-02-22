import styled from 'styled-components';

export const StyledResultsTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 1.5rem;
  color: #111827;
  & h2 {
    font-size: 1.25rem;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
  }
  & p {
    text-transform: none;
    font-size: 1.1rem;
  }
`;

export const StyledWrongAnswers = styled.div`
  & span {
    color: #fff;
    display: inline-block;
    padding: 3px 5px;
    background-color: #cb2027;
    border-radius: 25%;
  }
`;

export const StyledRightAnswers = styled.div`
  & span {
    color: #fff;
    display: inline-block;
    padding: 3px 5px;
    background-color: #95d03a;
    border-radius: 25%;
  }
`;
