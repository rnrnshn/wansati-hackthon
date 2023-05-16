import Image from "next/image";
import HeroImage from "../../../public/assets/hero-image.svg";

const Hero = () => {
  return (
    <section className="p-5 py-24 flex justify-between items-center max-w-6xl mx-auto gap-10 max-md:mt-14  max-md:flex-col">
      <div className="max-w-lg order-2 md:order-1">
        <h1 className="text-6xl text-white font-bold pb-6 max-md:text-3xl max-md:text-center max-md:mb-6 max-md:mt-10">
          Wansati Hackathon
        </h1>
        <p className="text-white text-xl pb-6 max-md:text-center max-md:mb-5">
          Junte-se a nós com mais de 300 “hackers” de todo o país para 48 horas
          de criação, inovação e diversão.
        </p>
        <p className="text-white text-2xl pb-8 max-md:text-center max-md:mb-5">02 - 04 de Junho de 2023</p>

        <div className="flex max-md:justify-center max-md:mb-20">
          <a
            href="#"
            className={`font-bold uppercase text-sm px-6 py-3 rounded-full transition-all duration-700 text-white bg-secondary hover:brightness-75 `}
          >
            REGISTAR-SE
          </a>
        </div>
      </div>

      <div className="w-full max-w-md order-1 md:order-2">
        <Image src={HeroImage} alt="wansati" />
      </div>
    </section>
  );
}

export default Hero;