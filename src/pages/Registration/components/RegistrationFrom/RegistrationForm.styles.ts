import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    padding: 5px 10px;
    border: 1px solid black;
    cursor: pointer;
    text-align: center;
  }

  label {
    padding: 5px 10px;
    border: 1px dashed black;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;