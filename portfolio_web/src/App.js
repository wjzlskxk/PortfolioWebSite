import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/main/main";
import About from "./components/About/About";
import Project from "./components/Project/project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/About' element={<About />} />
        <Route path='/Project' element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
