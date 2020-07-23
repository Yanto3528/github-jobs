import Header from "../Header";
import Container from "../../styles/shared/Container";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default Layout;
