import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { IoMdGlobe } from "react-icons/io";
import { JobContext } from "../../../context/JobContext";
import {
  JobsInputContainer,
  CheckboxContainer,
  LocationContainer,
} from "./styles";
import Input from "../../../styles/shared/Input";

const JobsInput = () => {
  const { register, handleSubmit, reset } = useForm();
  const { fetchJobs } = useContext(JobContext);
  const [params, setParams] = useState({
    full_time: false,
    location: "",
  });

  useEffect(() => {
    fetchJobs(params);
  }, [params]);

  const onChecked = (e) => {
    if (e.target.name === "full_time") {
      setParams({ ...params, full_time: e.target.checked });
    } else {
      setParams({ ...params, location: e.target.name });
    }
  };

  const onSubmit = (data) => {
    fetchJobs(data);
    reset();
  };

  return (
    <JobsInputContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckboxContainer>
          <label htmlFor="full_time">
            <input
              type="checkbox"
              name="full_time"
              id="full_time"
              onChange={onChecked}
            />{" "}
            <span>Full time</span>
          </label>
        </CheckboxContainer>
        <LocationContainer>
          <p>Location</p>
          <div>
            <IoMdGlobe size="1.6rem" />
            <label htmlFor="location">
              <Input
                type="text"
                placeholder="City, state, zip code or country"
                name="location"
                id="location"
                ref={register}
              />
            </label>
          </div>
        </LocationContainer>
        <CheckboxContainer>
          <label htmlFor="london">
            <input
              type="checkbox"
              name="london"
              id="london"
              onChange={onChecked}
              checked={params.location === "london"}
            />{" "}
            <span>London</span>
          </label>
        </CheckboxContainer>
        <CheckboxContainer>
          <label htmlFor="amsterdam">
            <input
              type="checkbox"
              name="amsterdam"
              id="amsterdam"
              onChange={onChecked}
              checked={params.location === "amsterdam"}
            />{" "}
            <span>Amsterdam</span>
          </label>
        </CheckboxContainer>
        <CheckboxContainer>
          <label htmlFor="new+york">
            <input
              type="checkbox"
              name="new+york"
              id="new+york"
              onChange={onChecked}
              checked={params.location === "new+york"}
            />{" "}
            <span>New York</span>
          </label>
        </CheckboxContainer>
        <CheckboxContainer>
          <label htmlFor="berlin">
            <input
              type="checkbox"
              name="berlin"
              id="berlin"
              onChange={onChecked}
              checked={params.location === "berlin"}
            />{" "}
            <span>Berlin</span>
          </label>
        </CheckboxContainer>
      </form>
    </JobsInputContainer>
  );
};

export default JobsInput;
