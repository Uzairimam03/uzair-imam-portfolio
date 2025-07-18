import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { useEffect, useState } from "react"
import "./App.css"
import emailjs from "@emailjs/browser"

function App() {
  const [isLoaded, setIsLoaded] = useState(0)

  
  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded? "loaded" : ""}`}>
    <Navbar/>
    <Hero/>
    <Projects/>
    <Contact/>

    <>
    <p>
  &copy; Developed Portfolio By:{' '}
  <span style={{ color: ' #16f2b3', fontWeight: 'bold' }}>Muhammad Uzair Imam</span>
</p>

      
          </>

    </div>
 )
}

export default App
