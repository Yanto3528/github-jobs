import styled from "styled-components";

export const JobDescriptionContainer = styled.div`
  flex: 1;
`;

export const JobDescriptionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  h1 {
    margin-right: 17px;
  }
`;

export const JobDescriptionBody = styled.div`
  margin-top: 35px;
  margin-bottom: 32px;
  display: flex;
  align-items: flex-start;
  img {
    width: 42px;
    height: 42px;
    margin-right: 12px;
    object-fit: contain;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

export const JobMarkdown = styled.div`
  font-size: 1.6rem;
  margin-bottom: 15rem;
  p {
    margin-bottom: 20px;
  }
`;
