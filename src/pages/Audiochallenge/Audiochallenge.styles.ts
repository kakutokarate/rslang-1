import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 7rem;
  color: rgba(37, 99, 235);
  text-transform: uppercase;
  & > div {
    font-weight: 700;
    font-size: 2rem;
  }
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
    color: rgba(255, 255, 255);
    background-color: rgba(37, 99, 235);
    border: 2px solid rgba(37, 99, 235);
    border-radius: 0.5rem;
    padding: 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    &:hover {
      transform: scale(1.1);
      background-color: rgba(59, 130, 246);
      border: 2px solid rgba(59, 130, 246);
    }
  }
`;
