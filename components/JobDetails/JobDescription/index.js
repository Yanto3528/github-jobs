import React from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown/with-html";
import { IoMdGlobe } from "react-icons/io";
import { BsClock } from "react-icons/bs";

import {
  JobType,
  JobSubContent,
  JobImageNotFound,
} from "../../../styles/shared/Job";
import {
  JobDescriptionContainer,
  JobDescriptionHeader,
  JobDescriptionBody,
  JobMarkdown,
} from "./styles";

const JobDescription = ({ job }) => {
  return (
    <JobDescriptionContainer>
      <JobDescriptionHeader>
        <h1>{job.title}</h1>
        <JobType>{job.type}</JobType>
      </JobDescriptionHeader>
      <JobSubContent type="secondary">
        <BsClock size="1.6rem" />
        {moment(new Date(job.created_at)).fromNow()}
      </JobSubContent>
      <JobDescriptionBody>
        {job.company_logo ? (
          <img src={job.company_logo} alt={job.company} />
        ) : (
          <JobImageNotFound>Not found</JobImageNotFound>
        )}

        <div>
          <h2>{job.company}</h2>
          <JobSubContent>
            <IoMdGlobe size="1.6rem" />
            {job.location}
          </JobSubContent>
        </div>
      </JobDescriptionBody>
      <JobMarkdown>
        <ReactMarkdown source={job.description} escapeHtml={false} />
      </JobMarkdown>
    </JobDescriptionContainer>
  );
};

export default JobDescription;
