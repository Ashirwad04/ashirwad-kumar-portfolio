import NavBar from "./NavBar/NavBar"
import HomeSection from "./HomeSection /HomeSection"
import useMeta from "../hooks/useMeta"

function Home() {
    useMeta({
        title: "Ashirwad Kumar — Zoho Developer & Software Engineer",
        description: "Portfolio of Ashirwad Kumar — Zoho Developer, Software Engineer, React Developer, and photographer based in India.",
        keywords: "Ashirwad Kumar, Zoho Developer, Software Engineer, React Developer, Portfolio, Photography",
        url: "https://ashirwadkumar.com/",
    });
    return ( 
        
        
        <div>
           {/* <h1>Homeqq</h1> */}
           <NavBar />
           <HomeSection />
       </div>


  )
}


export default Home