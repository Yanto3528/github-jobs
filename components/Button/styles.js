import styled from "styled-components";

export default styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.primary};
  padding: 14px 48px;
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  backface-visibility: hidden;
  transition: all 0.4s;
  &:hover {
    opacity: 0.9;
  }
  @media only screen and (max-width: 400px) {
    padding: 14px 28px;
  }
`;
