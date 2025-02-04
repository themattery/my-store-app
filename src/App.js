import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer"
import "./index.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [freeShipping, setFreeShipping] = useState(false);

  return (
    <Router basename="/my-store-app">
      <Navbar
        setSearch={setSearch}
        setCategory={setCategory}
        setFreeShipping={setFreeShipping}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
