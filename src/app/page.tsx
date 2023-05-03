import Image from "next/image";

import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Speaker from './components/Speaker'
import { Speakers } from "@/app/data"
import Partners from './components/Partners'
import Footer from './components/Footer';

import aboutImg from "../../public/assets/about.png"

export default function Home() {
  return (
   <>
    <header className="bg-[#DCE9E2] w-full ">
      <Hero/>
      <NavBar/>
    </header>
    <main>
      <section className="p-5 max-w-6xl mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-10 py-16">
        <div className="max-w-lg w-full">
          <div className="w-full mb-4">
            <h2 className="text-lg text-primary mb-3">SOBRE A HACKTHON</h2>
            <h3 className="text-4xl font-bold">O que é Wansati Hackthon</h3>
          </div>

          <div className="flex flex-col gap-4 text-justify">
            <p>O Hackathon Wansati é uma iniciativa que visa desenvolver soluções focadas na mulher, olhando para a justiça de gênero, promovendo assim, a inclusão da mulher em áreas de grande impacto em sua vida, focando nos pontos acima citados com base no uso da tecnologia.</p>

            <p>Este programa convida mulheres entusiastas, desenvolvedoras de software, designers e profissionais de outras áreas ligadas a temática, entre outras, para 48 horas de busca e criação de soluções para a sociedade na forma de protótipos, nos quais serão desenvolvidos os melhores, juntamente com os parceiros em sessões de acompanhamento ao longo de um período a determinar, em um produto final pronto para uso</p>
          </div>
        </div>

        <div className="max-w-xs w-full">
          <Image 
            src={ aboutImg } 
            alt="Uma logo de que tem chavetas que indicam que se trata de programação" 
            className="w-full"
          />
        </div>
      </section>

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
