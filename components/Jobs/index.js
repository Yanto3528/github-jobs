import { JobsContainer } from "./styles";
import JobsInput from "./JobsInput";
import JobList from "./JobList";

const Jobs = () => {
  return (
    <JobsContainer>
      <JobsInput />
      <JobList />
    </JobsContainer>
  );
};

export default Jobs;
