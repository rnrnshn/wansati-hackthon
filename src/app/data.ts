import type { StaticImageData } from "next/image";
import { ReactNode } from "react";

// Speakers
// import IgorImg from "../../public/speakers/igor.webp";
import CarlosMondle from "../../public/speakers/carlos.jpeg"
import KatiaAgostinho from "../../public/speakers/katia.jpeg"
export interface Speaker {
	img: StaticImageData,
	alt: string,
	name: string,
  role: string
};

export interface CustomizableCardType {
  title: string,
  description: string,
  children?: ReactNode
}

export interface Agenda extends CustomizableCardType {
  time: string,
  date: string
}

const Speakers: Speaker[] = [
  {
    img: CarlosMondle,
    alt: "Carlos Mondle",
    name: "Carlos Mondle",
    role: "Digital Financial Service Manager @FSDMoç" 
  },
  {
    img: KatiaAgostinho,
    alt: "Kátia Agostinho",
    name: "Kátia Agostinho",
    role: "Investment Analyst @FSDMoç" 
  }
];

const agenda: Agenda[] = [
  {
    title: " Introdução",
    description: "Check-in, introdução Wansati Hackathon, 3 master classes inspiradoras e formação de grupos participantes.",
    date: "2 de Junho || Sexta-feira",
    time: "18:00h - 19:40h"
  },
  {
    title: "Desenvolvimento das Soluções",
    description: "Check-in e registo das equipas, desafios do Wansati Hackathon, sessões de trabalho em grupos, almoço, master classes, sessões de trabalho em grupos, lanche da tarde e término dos trabalhos.",
    date: "3 de Junho || Sábado",
    time: "08:00h - 20:00h"
  },
  {
    title: "Apresentações e Premiação",
    description: "Chegada dos participantes, pitch perfeito, sprint final, sessão em grupo, lanche, apresentação ao júri, anúncio dos vencedores, encerramento e networking.",
    date: "4 de Junho || Domingo",
    time: "08:00h - 14:00h"
  }
]

const challenges: CustomizableCardType[] = [
  {
    title: "Casamentos prematuros",
    description: "Desafiando tradições nocivas: erradicando os casamentos prematuros e promovendo a liberdade de escolha para meninas!"
  },
  {
    title: "Violência baseada no gênero",
    description: "Desvendando e combatendo a violência de gênero!  "
  },
  {
    title: "Economias justas",
    description: "Criando oportunidades equitativas e sustentáveis para todos!"
  },

]

export { Speakers, agenda, challenges };