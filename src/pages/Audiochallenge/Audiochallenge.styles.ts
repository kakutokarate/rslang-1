import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 7rem;
  background-color: #5d6970;
  color: #fff;
  text-transform: uppercase;
`;

export const StyledButtonsRow = styled.div`
  margin-top: 2rem;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & div {
    cursor: pointer;
    text-transform: uppercase;
    border: 1px solid #fff;
    border-radius: 0.5rem;
    padding: 0.5rem;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
