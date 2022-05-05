import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Collection from "./Pages/Collection";
import Detail from "./Pages/Detail";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/detailproduk" element={<Detail />} />
      </Routes>
    </Router>
  );
}
