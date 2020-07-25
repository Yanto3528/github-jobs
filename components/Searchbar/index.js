import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsBag } from "react-icons/bs";
import Button from "../Button";
import { JobContext } from "../../context/JobContext";

import { SearchbarContainer } from "./styles";
import Input from "../../styles/shared/Input";

const Searchbar = () => {
  const { register, handleSubmit, reset } = useForm();
  const { fetchJobs } = useContext(JobContext);
  const onSubmit = (data) => {
    fetchJobs(data);
    reset();
  };

  return (
    <SearchbarContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BsBag size="1.6rem" />
        <label htmlFor="search">
          <Input
            type="text"
            name="search"
            id="search"
            placeholder="Title, companies, expertise or benefits"
            ref={register}
          />
        </label>
        <Button>Search</Button>
      </form>
    </SearchbarContainer>
  );
};

export default Searchbar;
