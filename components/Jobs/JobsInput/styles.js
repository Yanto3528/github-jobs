import styled from "styled-components";

export const JobsInputContainer = styled.div`
  flex-basis: 35%;
  margin-right: 32px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  span {
    font-size: 1.4rem;
    font-weight: 500;
    margin-left: 12px;
    font-family: "Poppins", sans-serif;
  }
`;

export const LocationContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 25px;
  p {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.lightgrey};
    margin-bottom: 14px;
  }
  div {
    position: relative;
    svg {
      position: absolute;
      top: 50%;
      left: 17.5px;
      transform: translateY(-50%);
      color: ${({ theme }) => theme.lightgrey};
    }
  }
`;
