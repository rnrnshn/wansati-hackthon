"use client"

import Image from "next/image";

import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Speaker from './components/Speaker'
import { Speakers, agenda, challenges } from "@/app/data"
import Partners from './components/Partners'
import Footer from './components/Footer';

import CustomizableCardType from "@/app/components/CustomizableCard";

import aboutImg from "../../public/assets/WansatiIcon.png"
import mozDevzImg from "../../public/assets/MozdevzLogo.png"

import { CalendarCheck, CheckCircle } from "phosphor-react";
import { MoreInfo } from "./components/MoreInfo";

export default function Home() {
  return (
   <>
    <header id="header" className="bg-hero bg-cover bg-center bg-fixed w-full relative">
      <div className="relative z-20">
        <NavBar/>
        <Hero/>
      </div>
      <div className="absolute z-10 bg-black/70 w-full h-full top-0 left-0"></div>
    </header>
    <main>
      <section id="about" className="p-5 max-w-6xl mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-10 py-16 scroll-mt-10">
        <div className="max-w-lg w-full">
          <div className="w-full mb-4">
            <h2 className="text-lg text-secondary mb-3 font-medium">SOBRE A HACKTHON</h2>
            <h3 className="text-4xl font-bold">O que é Wansati Hackthon</h3>
          </div>

          <div className="flex flex-col gap-4 text-justify">
            <p>O Hackathon Wansati é uma maratona de programação focada em desenvolver soluções tecnológicas para problemas relacionados à justiça de gênero e inclusão das mulheres em áreas de impacto. O evento convida mulheres entusiastas, desenvolvedoras de software, designers e profissionais de outras áreas a participarem de 48 horas de busca e criação de protótipos de soluções. Os melhores protótipos serão desenvolvidos em colaboração com parceiros, resultando em um produto final pronto para uso. A iniciativa é liderada por jovens moçambicanos que reconhecem o potencial da tecnologia para resolver problemas de forma simples e inclusiva, e desejam promover uma vida mais conectada e inclusiva para as mulheres, além de desafiar estereótipos sociais.</p>

            <div className="mt-4">
              <MoreInfo href="https://docs.google.com/document/d/1PPG3u8a_ViDs4ycP8osqE7KbBwmXGR4L/edit#"/>
            </div>

            {/* <p>Este programa convida mulheres entusiastas, desenvolvedoras de software, designers e profissionais de outras áreas ligadas a temática, entre outras, para 48 horas de busca e criação de soluções para a sociedade na forma de protótipos, nos quais serão desenvolvidos os melhores, juntamente com os parceiros em sessões de acompanhamento ao longo de um período a determinar, em um produto final pronto para uso</p> */}
          </div>
        </div>

        <div className="max-w-xs w-full">
          <Image 
            src={ aboutImg } 
            alt="Logo que representa o Wansati Hackthon" 
            className="w-full"
          />
        </div>
      </section>

      <section className="p-5 max-w-6xl mx-auto py-16 scroll-mt-10">
        <div className="text-center max-w-md w-full mx-auto">
          <h2 className="text-lg text-secondary mb-3 font-medium">DESAFIOS</h2>
          <h3 className="text-4xl font-bold">Desafios relacionados a justiça de gênero</h3>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 justify-center md:justify-between">
          { challenges.map((item, index) => {
            return (
              <CustomizableCardType key={index} title={item.title} description={item.description}>
                <CheckCircle className="text-secondary" size={36} weight="fill" />
              </CustomizableCardType>
            )
          }) }
        </div>
      </section>

      <section className="p-5 max-w-6xl mx-auto py-16 scroll-mt-10">
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
        <div className="flex justify-center mt-8 text-center">
          <a className="font-bold uppercase text-sm px-6 py-3 rounded-full transition-all duration-700 text-white bg-secondary hover:brightness-75" href="https://docs.google.com/document/d/1xbvXOPBA_TPvrO86MhzKidGD44GOkDlWbDctvycTPW0/edit" target="_blank" rel="noreferrer">Veja mais</a>
        </div>
      </section>

      <section id="speakers" className="max-w-6xl mx-auto w-full flex flex-col justify-center items-center space-y-16 scroll-mt-20">
        <div className="text-center max-w-md w-full space-y-4">
          <h1 className="text-lg text-secondary mb-3 font-medium">ORADORES</h1>
          <p className="text-4xl font-bold">Os oradores responsáveis por dirigir esse evento</p>
        </div>
        <div className="flex justify-center gap-10 flex-wrap">
          { Speakers.map((SpeakerData, index) => {
            return (
              <Speaker key={index} {...SpeakerData} />
            )
          }) }
        </div>
      </section>

      <section id="organizers" className="p-5 max-w-6xl mx-auto py-16 scroll-mt-10">
        <div className="text-center max-w-md w-full mx-auto">
          <h2 className="text-4xl font-bold">Organizadores</h2>
        </div>

        <div className="max-w-sm w-full mx-auto mt-16 flex flex-col justify-center items-center">
          <Image src={ mozDevzImg } alt="Logo da MozDevz" className="aspect-video object-contain w-60" />
        </div>
      </section>
      
      <Partners/>
    </main>
    <Footer/>
   </>
  )
}
