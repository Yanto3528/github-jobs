import styled, { css } from "styled-components";

export const JobType = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 1.2rem;
  border: 1px solid ${({ theme }) => theme.body};
  border-radius: 4px;
  padding: 6px 8px;
`;

export const JobSubContent = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 7.5px;
  }
  color: ${({ type, theme }) => {
    switch (type) {
      case "secondary":
        return theme.lightgrey2;
      default:
        return theme.lightgrey;
    }
  }};
`;

export const JobImageNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => (size ? size : "42px")};
  height: ${({ size }) => (size ? size : "42px")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.8rem")};
  font-weight: 500;
  margin-right: 12px;
  background-color: #f2f2f2;
  color: #bdbdbd;
`;
