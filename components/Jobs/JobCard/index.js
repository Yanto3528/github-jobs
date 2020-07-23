import { IoMdGlobe } from "react-icons/io";
import { BsClock } from "react-icons/bs";
import moment from "moment";

import {
  JobCardContainer,
  JobCardImage,
  JobCardContent,
  JobCardName,
  JobCardTitle,
  JobCardType,
  JobCardDetail,
} from "./styles";

const JobCard = ({ job }) => {
  return (
    <JobCardContainer>
      <JobCardImage src={job.company_logo} alt={job.company} />
      <JobCardContent>
        <JobCardName>{job.company}</JobCardName>
        <JobCardTitle>{job.title}</JobCardTitle>
        <JobCardType>{job.type}</JobCardType>
      </JobCardContent>
      <JobCardDetail>
        <div>
          <IoMdGlobe />
          <span>{job.location}</span>
        </div>
        <div>
          <BsClock />
          <span>{moment(job.created_at).fromNow()}</span>
        </div>
      </JobCardDetail>
    </JobCardContainer>
  );
};

export default JobCard;
