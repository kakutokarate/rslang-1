import styled from 'styled-components';

export const StyledWordControl = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    /* padding: 5px 10px; */
    /* border-radius: 5px; */
    /* background-color: #b8b8b8; */

    &:hover {
      cursor: pointer;
    }

    &[disabled] {
      cursor: default;
    }
  }
`;