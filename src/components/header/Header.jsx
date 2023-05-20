import { StyledHeader,Logo } from "../styles/Header.styled";

// import { StyledContainer } from "../styles/Container.styled";
// import { Flex } from "../styles/Flex.styled";

import NavBar from "../navBar/NavBar";

const Header = () => {
  return (
    <StyledHeader>
      <Logo src="./images/logo.jpg"alt ="logo" />
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
