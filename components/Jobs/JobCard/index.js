import { useRouter } from "next/router";
import { IoMdGlobe } from "react-icons/io";
import { BsClock } from "react-icons/bs";
import moment from "moment";
import Link from "next/link";

import {
  JobCardContainer,
  JobCardImage,
  JobCardContent,
  JobCardName,
  JobCardTitle,
  JobCardDetail,
} from "./styles";
import { JobType, JobSubContent } from "../../../styles/shared/Job";

const JobCard = ({ job }) => {
  const router = useRouter();
  return (
    <Link href={`/jobs/[id]`} as={`/jobs/${job.id}`}>
      <JobCardContainer>
        <JobCardImage src={job.company_logo} alt={job.company} />
        <JobCardContent>
          <JobCardName>{job.company}</JobCardName>
          <JobCardTitle>{job.title}</JobCardTitle>
          <JobType>{job.type}</JobType>
        </JobCardContent>
        <JobCardDetail>
          <JobSubContent>
            <IoMdGlobe />
            <span>{job.location}</span>
          </JobSubContent>
          <JobSubContent>
            <BsClock />
            <span>{moment(new Date(job.created_at)).fromNow()}</span>
          </JobSubContent>
        </JobCardDetail>
      </JobCardContainer>
    </Link>
  );
};

export default JobCard;
