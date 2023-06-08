import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import {
  StyledLink,
  StyledCartLink,
  StyledBrand,
} from "../styles/NavBar.Styled";

function NavbarComponent() {
  const cart = useContext(CartContext);
  const productsCount = cart.calculateProductsCount();

  return (
    <>
      <Navbar expand="sm">
        <Link to="/" className="brand-link">
          <StyledBrand><span>la</span>Boutique</StyledBrand>
        </Link>
        <Navbar.Toggle className="bg-white" />
        <Navbar.Collapse className="justify-content-between text-white">
          <Nav className="ms-auto">
            <StyledLink to="/" className="text-white">
              Home
            </StyledLink>
            <StyledLink to="/Contact" className="text-white link-nav">
              Contact
            </StyledLink>
            <StyledCartLink to="/Cart" className="text-white link-nav">
              <AiOutlineShoppingCart className="cart-icon" />
              {productsCount}
            </StyledCartLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
