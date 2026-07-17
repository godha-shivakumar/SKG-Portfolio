import React from "react";

import Navbar from "./Navbar/Nav";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Project />
        <Skills />
        <Footer />
        {/* <Contact /> */}
      </main>
    </>
  );
};

export default Home;
