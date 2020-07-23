import { useState, useEffect } from "react";
import axios from "axios";

import JobCard from "../JobCard";

import { JobListContainer } from "./styles";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json"
        );
        setJobs(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) {
    <h1>Loading...</h1>;
  }

  return (
    <JobListContainer>
      {jobs.length && jobs.map((job) => <JobCard key={job.id} job={job} />)}
    </JobListContainer>
  );
};

export default JobList;
