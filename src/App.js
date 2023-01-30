import "./App.css";
import { About } from "./components/About";
import { Barra } from "./components/Barra";
import { Card } from "./components/Card";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Barra />
      <Card />
      <About />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
