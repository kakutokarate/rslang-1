import styled from 'styled-components';

export const StyledResultsTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 1.5rem;
  & h2 {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
