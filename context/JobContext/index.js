import { createContext, useState } from "react";
import axios from "axios";

export const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [jobsPerPage] = useState(5);

  const fetchJobs = async (query = null) => {
    let params = {};
    if (query !== null) {
      params = { ...query };
    }
    try {
      setLoading(true);
      const res = await axios({
        method: "GET",
        url: "/api/jobs",
        params,
      });
      setJobs(res.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        error,
        jobsPerPage,
        fetchJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;
