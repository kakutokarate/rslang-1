import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  color: rgba(37, 99, 235);
  text-transform: uppercase;
  & > div {
    font-weight: 700;
    font-size: 2rem;
  }
  @media (max-width: 980px) {
    padding-top: 0;
  }
`;
