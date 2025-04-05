import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ColorProvider } from "./Main"; // Import the ColorProvider
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <Router>
      <ColorProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ColorProvider>
    </Router>
  );
}
