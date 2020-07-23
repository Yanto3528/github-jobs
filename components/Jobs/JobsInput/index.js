import { IoMdGlobe } from "react-icons/io";
import {
  JobsInputContainer,
  CheckboxContainer,
  LocationContainer,
} from "./styles";
import Input from "../../../styles/shared/Input";

const JobsInput = () => {
  return (
    <JobsInputContainer>
      <form>
        <CheckboxContainer>
          <input type="checkbox" name="fullTime" id="fullTime" />{" "}
          <span>Full time</span>
        </CheckboxContainer>
        <LocationContainer>
          <p>Location</p>
          <div>
            <IoMdGlobe size="1.6rem" />
            <Input type="text" placeholder="City, state, zip code or country" />
          </div>
        </LocationContainer>
        <CheckboxContainer>
          <input type="checkbox" name="fullTime" id="fullTime" />{" "}
          <span>London</span>
        </CheckboxContainer>
        <CheckboxContainer>
          <input type="checkbox" name="fullTime" id="fullTime" />{" "}
          <span>Amsterdam</span>
        </CheckboxContainer>
        <CheckboxContainer>
          <input type="checkbox" name="fullTime" id="fullTime" />{" "}
          <span>New York</span>
        </CheckboxContainer>
        <CheckboxContainer>
          <input type="checkbox" name="fullTime" id="fullTime" />{" "}
          <span>Berlin</span>
        </CheckboxContainer>
      </form>
    </JobsInputContainer>
  );
};

export default JobsInput;
