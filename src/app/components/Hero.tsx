import Image from "next/image";
import HeroImage from "../../../public/assets/hero-image.svg";

export default function Hero() {
  return (
    <section className="mt-12 pb-24 flex justify-between items-center container mx-auto max-md:mt-14  max-md:flex-col max-md:px-10">
      <div className="max-w-[600px]">
        <h1 className="text-6xl text-gray-headline font-bold pb-6 max-md:text-3xl max-md:text-center max-md:mb-6 max-md:mt-10">
          Wansati Hackathon
        </h1>
        <p className="text-gray-paragraph text-xl pb-6 max-md:text-center max-md:mb-5">
          Junte-se a nós com mais de 300 “hackers” de todo o país para 48 horas
          de criação, inovação e diversão.
        </p>
        <p className="text-gray-paragraph text-2xl pb-8 max-md:text-center max-md:mb-5">26-27 de Maio de 2023</p>

        <div className="flex max-md:justify-center max-md:mb-20">
          <button className="font-bold text-sm uppercase text-white bg-primary px-8 py-4 rounded-full hover:bg-primary-hover max-md:px-16 max-md:py-4">
            Registar-se
          </button>
        </div>
      </div>

      <div className="w-full max-w-md">
        <Image src={HeroImage} alt="wansati" />
      </div>
    </section>
  );
}
