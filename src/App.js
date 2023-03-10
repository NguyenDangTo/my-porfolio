import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import {BrowserRouter} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
