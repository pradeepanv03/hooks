import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pages from "./Pages";
import Pages2 from "./Pages2";

export default function Linkks() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/about" element={<Pages2 />} />
        </Routes>
    </Router>
  );
}
