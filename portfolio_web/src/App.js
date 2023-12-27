import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/main/main";
import About from "./components/About/About";
import Project from "./components/Project/project";
import ToyOne from "./components/Project/toy1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Project/toy/1" element={<Toy1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
