import React from "react";
import axios from "axios";

import JobDetails from "../../components/JobDetails";

const JobDetailsPage = (props) => {
  if (props.error) {
    return <h1>{props.error}</h1>;
  }
  return <JobDetails job={props.job} />;
};

export const getServerSideProps = async (context) => {
  try {
    const res = await axios.get(
      `https://jobs.github.com/positions/${context.params.id}.json`
    );
    const job = res.data;
    return { props: { job } };
  } catch (error) {
    console.log(error.response.data);
    return { props: { error: "Something went wrong" } };
  }
};

export default JobDetailsPage;
