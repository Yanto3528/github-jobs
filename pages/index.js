import { useEffect, useContext } from "react";
import Head from "next/head";
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
      <Head>
        <title>Github Jobs | Find your next career</title>
        <meta
          name="description"
          content="Github Jobs lets you search jobs based on title, company, benefits, and location."
        />
      </Head>
      <Searchbar />
      <Jobs />
    </React.Fragment>
  );
};

export default Home;
