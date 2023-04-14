import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

function App() {
  const [activeLink, setActiveLink] = useState('about');
  

  const handleClick = (link) => {
  setActiveLink(link);
  }
   
  return (
    <div>
    <Navbar handleClick={handleClick} />
     {activeLink==='about'&& (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <About />
              </motion.div>
            )}
     {activeLink==='projects'&& (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              transition={{ duration: 1}}
              > <Projects/>
              </motion.div>)}
     {activeLink==='contact'&& 
     (
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              > <Contact/>
              </motion.div>)}
  </div>
   
  );
}

export default App;
