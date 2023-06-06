import { StyledHeader } from "../styles/Header.styled";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavbarComponent from "../navBar/NavBar";

// import { StyledContainer } from "../styles/Container.styled";
// import { Flex } from "../styles/Flex.styled";

// import NavBar from "../navBar/NavBar";

const Header = () => {
  return (
    <StyledHeader>
      {/* <Logo src="../images/logo.jpg" alt="logo" /> */}
      {/* <NavBar /> */}
      <Container>
        <NavbarComponent />
      </Container>
    </StyledHeader>
  );
};

export default Header;
