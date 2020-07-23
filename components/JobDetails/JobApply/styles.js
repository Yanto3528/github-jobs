import styled from "styled-components";

export const JobApplyContainer = styled.div`
  font-family: "Poppins", sans-serif;
  width: 230px;
  margin-right: 77px;
  word-wrap: break-word;
  div {
    margin-bottom: 36px;
    display: inline-block;
    cursor: pointer;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.primary};
    span {
      margin-right: 15px;
    }
  }
  h3 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.lightgrey};
    font-size: 1.4rem;
    margin-bottom: 16px;
  }
`;
