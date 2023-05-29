// import { StyledNavBar } from "../styles/NavBar.Styled";
// import { NavLink } from "react-router-dom";
// import { AiOutlineShoppingCart } from "react-icons/ai";

// const NavBar = () => {
//   return (
//     <StyledNavBar>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/Contact">Contact</NavLink>
//       <NavLink to="/Cart">
//         <AiOutlineShoppingCart size="28" />
//       </NavLink>
//     </StyledNavBar>
//   );
// };

// export default NavBar;

import { Container, Navbar, Nav, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState, useContext } from "react";
import { CartContext } from "../../CartContext";
// import CartProduct from "../cart/CartProduct";

function NavbarComponent() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const modalStyle = {
    backgroundColor: "lightblue",
    color: "black",
  };

  return (
    <>
      <Navbar expand="sm bg-light">
        <Container fluid className="justify-content-between">
          <Navbar.Brand href="/">la-boutique</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Button variant="info" onClick={handleShow}>
                {productsCount}
                <AiOutlineShoppingCart />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <div style={modalStyle}>
          <Modal.Header closeButton>
            <Modal.Title style={modalStyle}>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* {productsCount > 0 ? (
              <>
                <p>Items in your cart</p>
                {cart.items.map(
                  (currentProduct, index) => (
                    <CartProduct
                      key={index}
                      id={currentProduct.id}
                      quantity={currentProduct.quantity}
                    ></CartProduct>
                  ) // <h1>{currentProduct.id}</h1>
                )}
                <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              </>
            ) : (
              <h1>There is no products in your cart</h1>
            )} */}
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default NavbarComponent;
