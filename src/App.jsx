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
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";



//Project Section import
import Creator from "./Explore/Projects/ZohoCreator/Creator";
import Crm from "./Explore/Projects/ZohoCrm/Crm";
import ZohoIntegration from "./Explore/Projects/ZohoIntegration/ZohoIntegration";
import ReactProject from "./Explore/Projects/React/ReactProeject";
import Learning from "./Explore/Projects/Learning/Learnign";
import JavaBackend from "./Explore/Projects/JavaBackend/java";
import Fun from "./Explore/Projects/FunProject/fun";




//Photography Section import
import Creative from "./Explore/Photography/Creative/Creative";
import Nature from "./Explore/Photography/Nature/Nature";
import Portrait from "./Explore/Photography/Portrait/Portrait";
import Street from "./Explore/Photography/Street/Street";
import Travel from "./Explore/Photography/Travel/Travel";
import Wildlife from "./Explore/Photography/Wildlife/Wildlife";








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
            <Contact />
            <Footer />
          </>
        }
      />

      <Route path="/projects" element={<Projects />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/books" element={<Books />} />
      <Route path="/blogs" element={<Blogs />} />



//project Section Routes
      <Route path="/projects/creator" element={<Creator />} />
      <Route path="/projects/crm" element={<Crm />} />

      <Route path="/projects/integrations" element={<ZohoIntegration />} />s

      <Route path="/projects/integrations" element={<ZohoIntegration />} />

      <Route path="/projects/react" element={<ReactProject />} />
      <Route path="/projects/learning" element={<Learning />} />
      <Route path="/projects/java" element={<JavaBackend />} />
      <Route path="/projects/fun" element={<Fun />} />



//Photography Section Routes
      <Route path="/photography/creative" element={<Creative />} />
      <Route path="/photography/nature" element={<Nature />} />
      <Route path="/photography/portrait" element={<Portrait />} />
      <Route path="/photography/street" element={<Street />} />
      <Route path="/photography/travel" element={<Travel />} />
      <Route path="/photography/wildlife" element={<Wildlife />} />


    </Routes>
  );
}

export default App;