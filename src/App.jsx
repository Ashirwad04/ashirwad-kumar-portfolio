import { Routes, Route } from "react-router-dom";


import Projects from "./Explore/Projects/Projects";
import Home from "./Home/home";
import About from "./About/About";
import Skill from "./Skills/Skill";
import Explore from "./Explore/Explore";
import Photography from "./Explore/Photography/Photography";
import Books from "./Explore/Books/Books";
import Blogs from "./Explore/Blogs/Blogs";
import Education from "./Education/Education";





function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <>
            <Home />
            <About />
            <Skill />
            <Explore />
            <Education />
          </>
        }
      />

      <Route path="/projects" element={<Projects />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/books" element={<Books />} />
      <Route path="/blogs" element={<Blogs />} />

    </Routes>
  );
}

export default App;