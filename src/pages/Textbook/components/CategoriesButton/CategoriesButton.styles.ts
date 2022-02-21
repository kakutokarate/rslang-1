import styled from 'styled-components';

export const StyledCategoriesButton = styled.div<{backgroundColor: string}>`
  height: 50px;
  padding: 0 10px;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  button {
    all: unset;
    width: 100%;
    height: 100%;
    text-align: center;

    &:hover {
      cursor: pointer;
    }
  }
`;