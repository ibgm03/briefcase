import "./App.css";
import { About } from "./components/About";
import { Barra } from "./components/Barra";
import { Card } from "./components/Card";
import { Contacto } from "./components/Contacto";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Barra />
      <Card />
      <About />
      <Skills/>
      <Experience />
      <Contacto/>
      <Footer />
    </>
  );
}

export default App;
