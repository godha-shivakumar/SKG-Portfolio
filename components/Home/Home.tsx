import Hero from "./Hero/Hero";
import About from "./About/About";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

// Home page composition:
// Combines all portfolio sections into a single page layout.
// Each section is isolated into reusable components for maintainability.
const Home = () => {
  return (
    <>
      <main>
        {/* Hero section:
            Primary introduction and call-to-action area.
        */}
        <Hero />

        {/* About section:
            Developer profile, experience summary, and capabilities.
        */}
        <About />

        {/* Projects section:
            Showcases featured work and technical implementations.
        */}
        <Project />

        {/* Skills section:
            Displays technology stack and development tools.
        */}
        <Skills />

        {/* Contact section:
            Provides communication options and project inquiry form.
        */}
        <Contact />

        {/* Footer section:
            Contains branding, social links, and copyright details.
        */}
        <Footer />
      </main>
    </>
  );
};

export default Home;
