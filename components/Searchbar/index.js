import { BsBag } from "react-icons/bs";
import Button from "../Button";

import { SearchbarContainer } from "./styles";
import Input from "../../styles/shared/Input";

const Searchbar = () => {
  return (
    <SearchbarContainer>
      <form>
        <BsBag size="1.6rem" />
        <Input
          type="text"
          placeholder="Title, companies, expertise or benefits"
        />
        <Button>Search</Button>
      </form>
    </SearchbarContainer>
  );
};

export default Searchbar;
