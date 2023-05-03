import type { StaticImageData } from "next/image";

// Speakers
import IgorImg from "../../public/speakers/igor.webp";

export interface Speaker {
	img: StaticImageData,
	alt: string,
	name: string,
	role: string
};

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