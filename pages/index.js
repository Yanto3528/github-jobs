import { useEffect, useContext } from "react";

import { JobContext } from "../context/JobContext";

import Searchbar from "../components/Searchbar";
import Jobs from "../components/Jobs";

const Home = () => {
  const { fetchJobs } = useContext(JobContext);

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <React.Fragment>
      <Searchbar />
      <Jobs />
    </React.Fragment>
  );
};

export default Home;
