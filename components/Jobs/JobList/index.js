import { useContext, useState } from "react";
import Skeleton from "react-loading-skeleton";

import { JobContext } from "../../../context/JobContext";
import JobCard from "../JobCard";
import Pagination from "../../Pagination";

import { JobListContainer, JobCardLoadingWrapper } from "./styles";

const JobList = () => {
  const { jobs, loading, error, jobsPerPage } = useContext(JobContext);
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevState) => prevState + 1);
  const prevPage = () => setCurrentPage((prevState) => prevState - 1);

  const indexOfLastJobs = currentPage * jobsPerPage;
  const indexOfFirstJobs = indexOfLastJobs - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJobs, indexOfLastJobs);

  if (currentJobs.length === 0 && !loading) {
    return <h1 style={{ margin: "0 auto" }}>No Jobs Found.</h1>;
  }

  if (error) {
    return <h1 style={{ margin: "0 auto" }}>{error}</h1>;
  }

  return (
    <JobListContainer>
      {loading && (
        <React.Fragment>
          <Skeleton count={5} height={114} wrapper={JobCardLoadingWrapper} />
        </React.Fragment>
      )}
      {currentJobs.length > 0 &&
        !loading &&
        currentJobs.map((job) => <JobCard key={job.id} job={job} />)}
      <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={jobs.length}
        currentPage={currentPage}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </JobListContainer>
  );
};

export default JobList;
