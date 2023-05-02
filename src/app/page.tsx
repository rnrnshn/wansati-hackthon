import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from './components/Partners'
import Footer from './components/Footer';

export default function Home() {
  return (
   <>
    <header className="bg-[#DCE9E2] w-full ">
      <Hero/>
      <NavBar/>
    </header>
    <main>
      <Partners/>
    </main>
    <Footer/>
   </>
  )
}
