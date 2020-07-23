import styled, { css } from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 80px;
`;

export const PaginationLink = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.lightgrey};
  color: ${({ theme }) => theme.lightgrey};
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
  &:not(last-child) {
    margin-right: 12px;
  }
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.primary};
      border: none;
      color: white;
      &:hover {
        opacity: 0.9;
        color: white;
      }
    `}
`;
