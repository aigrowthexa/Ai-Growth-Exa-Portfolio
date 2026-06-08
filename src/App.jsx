import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Companies from "./components/sections/Companies";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import WhyChoose from "./components/sections/WhyChoose";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Companies />
        <Services />
        <Process />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
