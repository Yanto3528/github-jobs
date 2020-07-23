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
