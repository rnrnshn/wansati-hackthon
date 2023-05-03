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


export { Speakers };