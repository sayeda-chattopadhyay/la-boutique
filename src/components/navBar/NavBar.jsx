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

import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function NavbarComponent() {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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
              <Button variant="info">10
                <AiOutlineShoppingCart />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        </Modal.Body>
      </Modal> */}
    </>
  );
}

export default NavbarComponent;
