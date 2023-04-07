import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Projects />
      {/* <Home /> */}
    </div>
  );
}

export default App;
