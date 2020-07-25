import styled from "styled-components";

export const SearchbarContainer = styled.section`
  height: 138px;
  background-image: url("/backgroundImg.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    width: 790px;
    max-width: 95%;
    position: relative;
    input {
      padding-left: 45px;
    }
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 17.5px;
      color: ${({ theme }) => theme.lightgrey};
    }
  }
  button {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
  }
`;
