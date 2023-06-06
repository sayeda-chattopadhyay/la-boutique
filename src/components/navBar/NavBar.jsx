import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
//import CartProduct from "../cart/CartProduct";

function NavbarComponent() {
  
  const cart = useContext(CartContext);
  const productsCount = cart.calculateProductsCount();

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/" className="text-white">
          la-boutique
        </Navbar.Brand>
        <Navbar.Toggle className="bg-white" />
        <Navbar.Collapse
          // id="basic-navbar-nav"
          className="justify-content-between text-white"
        >
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/Contact" className="text-white">
              Contact
            </Nav.Link>
            <Nav.Link href="/Cart" className="text-white">
              <AiOutlineShoppingCart className="cart-icon" />
              {productsCount}
              {/* {cart.calculateProductsCount()} */}
            </Nav.Link>
            {/* <Button variant="info" onClick={handleShow}>
              {productsCount}
              <AiOutlineShoppingCart />
            </Button> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Modal show={show} onHide={handleClose}>
        <div>
          <Modal.Header closeButton className="bg-dark">
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark">
            {productsCount > 0 ? (
              <>
                <p>Items in your cart:</p>
                {cart.items.map((currentProduct, idx) => (
                  <CartProduct
                    key={idx}
                    id={currentProduct.id}
                    title={currentProduct.title} // title doesn't come
                    quantity={currentProduct.quantity}
                    price={currentProduct.price}
                  ></CartProduct>
                ))}

                <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                <Button variant="success">Purchase items!</Button>
              </>
            ) : (
              <h1>There are no items in your cart!</h1>
            )}
          </Modal.Body>
        </div>
      </Modal> */}
    </>
  );
}

export default NavbarComponent;
