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
  @media only screen and (max-width: 575px) {
    align-items: flex-start;
  }
`;

export const JobCardImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 4px;
  margin-right: 16px;
  object-fit: contain;
`;

export const JobCardDescription = styled.div`
  flex: 1;
  display: flex;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
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
  word-wrap: break-word;
  font-size: 1.8rem;
  margin-top: 8px;
  margin-bottom: 12px;
`;

export const JobCardDetail = styled.div`
  height: 100%;
  align-self: flex-end;
  display: flex;
  align-items: center;
  div:first-child {
    margin-right: 27.5px;
  }
  @media only screen and (max-width: 575px) {
    align-self: flex-start;
    margin-top: 26px;
  }
`;
