import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Training from "./component/Training"
import Testimonials from "./component/Testimonials";
import ContactForm from "./component/ContactForm"
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <>
 < Navbar />
 <Hero />
<About  />
<Skills />
<Training />
<Projects />
<Testimonials />
<ContactForm />
<Footer />
<ScrollToTop />
    </>
  )
}

export default App;