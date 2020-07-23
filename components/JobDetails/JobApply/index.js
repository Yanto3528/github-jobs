import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown/with-html";

import { JobApplyContainer } from "./styles";

const JobApply = ({ howToApply }) => {
  return (
    <JobApplyContainer>
      <div onClick={() => Router.back()}>
        <span>&larr;</span> Back to search
      </div>
      <h3>How to Apply</h3>
      <ReactMarkdown source={howToApply} escapeHtml={false} />
    </JobApplyContainer>
  );
};

export default JobApply;
