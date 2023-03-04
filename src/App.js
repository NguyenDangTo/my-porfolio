import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import {BrowserRouter} from "react-router-dom";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
