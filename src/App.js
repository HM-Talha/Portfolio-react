import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Exprince from "./Components/Experience/Exprince";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services"
import Testimonals from "./Components/Testimonals/Testimonals";


function App() {
  // https://www.youtube.com/watch?v=G-Cr00UYokU&t=1517s
  return(
    <div>
      <Header />
      <Nav />
      <About />
      <Exprince />
      <Services />
      <Portfolio />
      <Testimonals />
      <Contact />
      <Footer />
    
    </div>

  )

  
}

export default App;
