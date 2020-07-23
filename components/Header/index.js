import Container from "../../styles/shared/Container";
import { HeaderContainer, Logo } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo>
          Github <span>Jobs</span>
        </Logo>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
