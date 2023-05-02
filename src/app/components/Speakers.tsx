/* eslint-disable @next/next/no-img-element */

interface ISpeaker {
    src: string,
    alt: string,
    name: string,
    description: string
}


const Speakers = () => {
    const Speaker = ({ src, alt, name, description }: ISpeaker) => {
        return (
            <section className="justify-center items-center flex flex-col text-center py-5 w-80 h-72 space-y-5">
                <div className="">
                    <img className="rounded-full w-48" src={src} alt={alt} />
                </div>
                <div>
                    <h3 className="font-semibold">{name}</h3>
                    <p className="italic text-zinc-400">{description}</p>
                </div>
            </section>
        )
    }


    return (
        <section className="flex flex-col justify-center items-center space-y-16">
            <div className="text-center w-[497px] space-y-4">
                <h1 className="text-sm text-primary">ORADORES</h1>
                <p className="text-4xl font-bold">Os oradores responsáveis por dirigir esse evento</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <Speaker src={"https://uploaddeimagens.com.br/images/004/451/502/full/Ellipse_1.png?1683062539"} alt={"wansate"} name={"Leire Raongou"} description={"CEO @MozDevz"} />
                <Speaker src={"https://uploaddeimagens.com.br/images/004/451/502/full/Ellipse_1.png?1683062539"} alt={"wansate"} name={"Leire Raongou"} description={"CEO @MozDevz"} />
                <Speaker src={"https://uploaddeimagens.com.br/images/004/451/502/full/Ellipse_1.png?1683062539"} alt={"wansate"} name={"Leire Raongou"} description={"CEO @MozDevz"} />
                <Speaker src={"https://uploaddeimagens.com.br/images/004/451/502/full/Ellipse_1.png?1683062539"} alt={"wansate"} name={"Leire Raongou"} description={"CEO @MozDevz"} />
                <Speaker src={"https://uploaddeimagens.com.br/images/004/451/502/full/Ellipse_1.png?1683062539"} alt={"wansate"} name={"Leire Raongou"} description={"CEO @MozDevz"} />
                <Speaker src={"https://uploaddeimagens.com.br/images/004/451/502/full/Ellipse_1.png?1683062539"} alt={"wansate"} name={"Leire Raongou"} description={"CEO @MozDevz"} />
            </div>
        </section>
    )
}

export default Speakers;