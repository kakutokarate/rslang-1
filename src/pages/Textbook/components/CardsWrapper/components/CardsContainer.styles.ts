import styled from 'styled-components';

export const StyledCardsContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 15px;
  justify-content: space-around;
  flex-wrap: wrap;

  & .empty {
    font-family: 'Roboto-Bold';
    font-size: 36px;
  }

  @media (max-width: 660px) {
    padding: 20px 0;
  }
`;