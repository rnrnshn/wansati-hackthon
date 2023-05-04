"use client"

import Image from "next/image";

import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Speaker from './components/Speaker'
import { Speakers, agenda, challenges } from "@/app/data"
import Partners from './components/Partners'
import Footer from './components/Footer';

import CustomizableCardType from "@/app/components/CustomizableCard";

import aboutImg from "../../public/assets/about.png"
import mozDevzImg from "../../public/assets/MozDevzLogo.png"

import { CalendarCheck, CheckCircle } from "phosphor-react";

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

      <section className="p-5 max-w-6xl mx-auto py-16">
        <div className="text-center max-w-md w-full mx-auto">
          <h2 className="text-lg text-primary mb-3">DESAFIOS</h2>
          <h3 className="text-4xl font-bold">Desafios relacionados a várias áreas</h3>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 justify-center md:justify-between">
          { challenges.map((item, index) => {
            return (
              <CustomizableCardType key={index} title={item.title} description={item.description}>
                <CheckCircle className="text-tertiary" size={36} weight="fill" />
              </CustomizableCardType>
            )
          }) }
        </div>
      </section>

      <section className="p-5 max-w-6xl mx-auto py-16">
        <div className="text-center max-w-md w-full mx-auto">
          <h2 className="text-4xl font-bold">Agenda</h2>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 justify-center md:justify-between">
          { agenda.map((item, index) => {
            return (
              <CustomizableCardType key={index} title={item.title} description={item.description}>
                <CalendarCheck className="text-secondary" size={48} weight="bold" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold">{ item.date }</span>
                  <span>{ item.time }</span>
                </div>
              </CustomizableCardType>
            )
          }) }
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

      <section className="p-5 max-w-6xl mx-auto py-16">
        <div className="text-center max-w-md w-full mx-auto">
          <h2 className="text-4xl font-bold">Organizadores</h2>
        </div>

        <div className="max-w-sm w-full mx-auto mt-16">
          <Image src={ mozDevzImg } alt="Logo da MozDevz" className="aspect-video object-contain" />
        </div>
      </section>
      
      <Partners/>
    </main>
    <Footer/>
   </>
  )
}
