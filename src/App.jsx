import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <About />
      {/* <Projects /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
