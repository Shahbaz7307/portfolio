import React from "react";
import Home from "./components/Home";
import Sidebar from "./components/sidebar";
import About from "./components/About";
import Header from "./components/Header";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollTop";

export default function App() {
  const a = 21;
  return (
    <div className="flex">
      <div>
        <Sidebar />
        <Header />
      </div>
      <div className="main w-full">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <ScrollToTop />
      </div>
    </div>
  );
}
