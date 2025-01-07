import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main/main";
function App() {
  const [current, setCurrent] = useState("home");
  console.log("current : ", current);
  return (
    <>
      <Header onPageChange={setCurrent} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main currentPage={current} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
