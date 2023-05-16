import type { StaticImageData } from "next/image";
import { ReactNode } from "react";

// Speakers
// import IgorImg from "../../public/speakers/igor.webp";
import ShelbyHennek from "../../public/speakers/25.jpg"
import CharleyPetrovski from "../../public/speakers/46.jpg"
import SophiaPelo from "../../public/speakers/66.jpg"
import RobertScibona from "../../public/speakers/11.jpg"
import BrandeStraubinger from "../../public/speakers/42.jpg"
import LouannCamelio from "../../public/speakers/51.jpg"
// const ShelbyHennek = "https://xsgames.co/randomusers/assets/avatars/female/25.jpg";
// const CharleyPetrovski = "https://xsgames.co/randomusers/assets/avatars/male/46.jpg";
// const SophiaPelo = "https://xsgames.co/randomusers/assets/avatars/female/66.jpg";
// const RobertScibona = "https://xsgames.co/randomusers/assets/avatars/male/11.jpg";
// const BrandeStraubinger = "https://xsgames.co/randomusers/assets/avatars/female/42.jpg";
// const LouannCamelio = "https://xsgames.co/randomusers/assets/avatars/female/51.jpg";

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
    img: ShelbyHennek,
    alt: "",
    name: "Shelby Hennek",
    role: "Software Developer" 
  },
  {
    img: CharleyPetrovski,
    alt: "",
    name: "Charley Petrovski",
    role: "Data Engineer" 
  },
  {
    img: SophiaPelo,
    alt: "",
    name: "Sophia Pelo",
    role: "Information Security Analyst" 
  },
  {
    img: RobertScibona,
    alt: "",
    name: "Robert Scibona",
    role: "Artificial Intelligence Specialist" 
  },
  {
    img: BrandeStraubinger,
    alt: "",
    name: "Brande Straubinger",
    role: "Data Ccientist" 
  },
  {
    img: LouannCamelio,
    alt: "",
    name: "Louann Camelio",
    role: "Cybersecurity Specialist" 
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
    title: "Educação",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!"
  },
  {
    title: "Educação",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!"
  },
  {
    title: "Educação",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!"
  },
  {
    title: "Educação",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!"
  },
  {
    title: "Educação",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!"
  },
  {
    title: "Educação",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae velit nobis at blanditiis hic reiciendis!"
  }
]

export { Speakers, agenda, challenges };