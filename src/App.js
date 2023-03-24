import "./App.css";
import { About } from "./components/About";
import { Card } from "./components/Card";
import { Contacto } from "./components/Contacto";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

import Navbar from "./components/Navbar";
import { Skills } from "./components/Skills";
import { Whatsapp } from "./components/Whatsapp";

function App() {
  return (
    <>
      <Navbar />
      <Card />
      <About />
      <Skills />
      <Experience />
      <Contacto />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
