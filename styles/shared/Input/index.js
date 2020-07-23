import styled from "styled-components";

export default styled.input`
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 20px;
  padding-left: 45px;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.lightgrey};
  }
`;
