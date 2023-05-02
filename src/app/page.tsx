import Hero from "./components/Hero";

import NavBar from "./components/Navbar";
import Footer from './components/Footer';

export default function Home() {
  return (
   <>
    <header className="bg-[#DCE9E2] w-full ">
      <Hero/>
      <NavBar/>
    </header>
    <main>
      <h1>Wansati Hackthon</h1>
      <Footer/>
    </main>
   </>
  )
}
