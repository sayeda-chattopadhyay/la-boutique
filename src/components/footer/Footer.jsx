import { SocialIcons } from "../socialIcon/SocialIcons";
import { StyledFooter } from "../../components/styles/Footer.styled";
import { StyledContainer } from "../../components/styles/Container.styled";
import { Flex } from "../../components/styles/Flex.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <img src="" alt="logo" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+47-5412-4567</li>
            <li>example@laboutique.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2023 la boutique. All rights reserved</p>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
