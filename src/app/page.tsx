import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Speaker from './components/Speaker'
import { Speakers } from "@/app/data"
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
      <section className="max-w-6xl mx-auto w-full flex flex-col justify-center items-center space-y-16">
        <div className="text-center max-w-md w-full space-y-4">
          <h1 className="text-lg text-primary">ORADORES</h1>
          <p className="text-4xl font-bold">Os oradores responsáveis por dirigir esse evento</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          { Speakers.map((SpeakerData, index) => {
            return (
              <Speaker key={index} {...SpeakerData} />
            )
          }) }
        </div>
      </section>
      
      <Partners/>
    </main>
    <Footer/>
   </>
  )
}
