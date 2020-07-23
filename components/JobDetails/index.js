import React from "react";

import JobApply from "./JobApply";
import JobDescription from "./JobDescription";

import { JobDetailsContainer } from "./styles";

const JobDetails = ({ job }) => {
  return (
    <JobDetailsContainer>
      <JobApply howToApply={job.how_to_apply} />
      <JobDescription job={job} />
    </JobDetailsContainer>
  );
};

export default JobDetails;
