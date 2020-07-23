import styled from "styled-components";

export const JobCardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 32px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const JobCardImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 4px;
  margin-right: 16px;
  object-fit: contain;
`;

export const JobCardContent = styled.div`
  flex: 1;
`;

export const JobCardName = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

export const JobCardTitle = styled.h2`
  font-weight: normal;
  font-size: 1.8rem;
  margin-top: 8px;
  margin-bottom: 12px;
`;

export const JobCardType = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 1.2rem;
  border: 1px solid ${({ theme }) => theme.body};
  border-radius: 4px;
  padding: 6px 8px;
`;

export const JobCardDetail = styled.div`
  height: 100%;
  align-self: flex-end;
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    svg {
      margin-right: 7.5px;
    }
  }
  div:first-child {
    margin-right: 28.5px;
    color: ${({ theme }) => theme.lightgrey};
  }
  div:last-child {
    color: ${({ theme }) => theme.lightgrey2};
  }
`;
