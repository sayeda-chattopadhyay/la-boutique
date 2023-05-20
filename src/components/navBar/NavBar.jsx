import { StyledNavBar } from "../styles/NavBar.Styled";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <StyledNavBar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Cart">
        <AiOutlineShoppingCart size="28" />
      </NavLink>
    </StyledNavBar>
  );
};

export default NavBar;
