import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/main/main";
import About from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
