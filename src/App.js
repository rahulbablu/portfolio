import "./App.css";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/skills/Skills";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
