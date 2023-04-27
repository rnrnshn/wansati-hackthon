import Hero from "./components/Hero";
import NavBar from "./components/Navbar";

export default function Home() {
  return (
   <>
     <header className="bg-[#DCE9E2] w-full ">
        <NavBar/>
        <Hero/>
     </header>
     <main>
      <h1>Wansati Hackthon</h1>
    </main>
   </>
  )
}
