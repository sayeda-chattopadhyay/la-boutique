import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "./components/GlobalStyles";
import { Routes, Route } from "react-router-dom";

// layout

import BaseLayOut from "./layouts/BaseLayout";

// pages

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

// Api call- Fetch data

import Product from "./api/Product";

// App component

const theme = {
  colors: {
    // header: "#ebfbff",
    body: "#2b3452",
    footer: "#003333",
  },

  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="App">
          <Routes>
            <Route path="/" element={<BaseLayOut />}>
              <Route index element={<Home />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="Cart" element={<Cart />} />
              <Route path="Product/:id" element={<Product />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
