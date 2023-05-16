import type { StaticImageData } from "next/image";
import { ReactNode } from "react";

// Speakers
import IgorImg from "../../public/speakers/igor.webp";

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
    img: IgorImg,
    alt: "",
    name: "Igor Sambo",
    role: "Presidente @MozDevz" 
  },
  {
    img: IgorImg,
    alt: "",
    name: "Igor Sambo",
    role: "Presidente @MozDevz" 
  },
  {
    img: IgorImg,
    alt: "",
    name: "Igor Sambo",
    role: "Presidente @MozDevz" 
  },
  {
    img: IgorImg,
    alt: "",
    name: "Igor Sambo",
    role: "Presidente @MozDevz" 
  },
  {
    img: IgorImg,
    alt: "",
    name: "Igor Sambo",
    role: "Presidente @MozDevz" 
  },
  {
    img: IgorImg,
    alt: "",
    name: "Igor Sambo",
    role: "Presidente @MozDevz" 
  }
];

const agenda: Agenda[] = [
  {
    title: "Abertura",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!",
    date: "26/05",
    time: "09:00h"
  },
  {
    title: "Abertura",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!",
    date: "26/05",
    time: "09:00h"
  },
  {
    title: "Abertura",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!",
    date: "26/05",
    time: "09:00h"
  },
  {
    title: "Abertura",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!",
    date: "26/05",
    time: "09:00h"
  },
  {
    title: "Abertura",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!",
    date: "26/05",
    time: "09:00h"
  },
  {
    title: "Abertura",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!",
    date: "26/05",
    time: "09:00h"
  },
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