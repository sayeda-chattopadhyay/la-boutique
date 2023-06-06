import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.styled";
import { Routes, Route } from "react-router-dom";
import CartProvider from "./CartContext";
import { ProductListProvider } from "./ProductListContext";

// layout

import BaseLayOut from "./layouts/BaseLayout";

// pages

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";

// cart context
// import CartProvider from "./CartContext.jsx";

// App component

const theme = {
  colors: {
    body: "#2b3452",
    text: "#fff",
    // footer: "#ebfbff",
  },

  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductListProvider>
        <CartProvider>
          <>
            <div className="App">
              <GlobalStyles />
              <Routes>
                <Route path="/" element={<BaseLayOut />}>
                  <Route index element={<Home />} />
                  <Route path="Product/:id" element={<ProductPage />} />
                  <Route path="Cart" element={<Cart />} />
                  <Route path="Checkout" element={<Checkout />} />
                  <Route path="CheckoutSuccess" element={<CheckoutSuccess />} />
                  <Route path="Contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </div>
          </>
        </CartProvider>
      </ProductListProvider>
    </ThemeProvider>
  );
}

export default App;
