import "./App.css";
import { Routes, Route } from "react-router-dom";



// layout

import BaseLayOut from "./layouts/BaseLayout";

// pages

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";


// Api

// import FetchSingleProduct from "./components/FetchSingleProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseLayOut />}>
          <Route index element={<Home />}/>

          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
