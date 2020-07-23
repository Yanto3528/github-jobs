import axios from "axios";

import Searchbar from "../components/Searchbar";
import Jobs from "../components/Jobs";

const Home = () => {
  return (
    <React.Fragment>
      <Searchbar />
      <Jobs />
    </React.Fragment>
  );
};

export default Home;
