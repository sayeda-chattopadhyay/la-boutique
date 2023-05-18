import "./App.css";
import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";

// layout

import BaseLayOut from "./layouts/BaseLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseLayOut />} />
      </Routes>
    </div>
  );
}

export default App;
