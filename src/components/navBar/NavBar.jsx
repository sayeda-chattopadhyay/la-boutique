import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const cart = useContext(CartContext);
  const productsCount = cart.calculateProductsCount();

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/" className="text-white">
          la-boutique
        </Navbar.Brand>
        <Navbar.Toggle className="bg-white" />
        <Navbar.Collapse className="justify-content-between text-white">
          <Nav className="ms-auto">
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/Contact" className="text-white">
              Contact
            </Link>
            <Link to="/Cart" className="text-white">
              <AiOutlineShoppingCart className="cart-icon" />
              {productsCount}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
