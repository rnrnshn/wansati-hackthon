import Image from "next/image";
import HeroImage from "../../../public/assets/hero-image.svg";

const Hero = () => {
  return (
    <section className="p-5 py-24 flex justify-between items-center max-w-6xl mx-auto gap-10 max-md:mt-14  max-md:flex-col max-md:px-10">
      <div className="max-w-lg order-2 md:order-1">
        <h1 className="text-6xl text-gray-headline font-bold pb-6 max-md:text-3xl max-md:text-center max-md:mb-6 max-md:mt-10">
          Wansati Hackathon
        </h1>
        <p className="text-gray-paragraph text-xl pb-6 max-md:text-center max-md:mb-5">
          Junte-se a nós com mais de 300 “hackers” de todo o país para 48 horas
          de criação, inovação e diversão.
        </p>
        <p className="text-gray-paragraph text-2xl pb-8 max-md:text-center max-md:mb-5">26 - 27 de Maio de 2023</p>

        <div className="flex max-md:justify-center max-md:mb-20">
          <button className="font-bold text-sm uppercase text-white bg-primary px-8 py-4 rounded-full hover:brightness-75 max-md:px-16 max-md:py-4 transition-all">
            Registar-se
          </button>
        </div>
      </div>

      <div className="w-full max-w-md order-1 md:order-2">
        <Image src={HeroImage} alt="wansati" />
      </div>
    </section>
  );
}

export default Hero;