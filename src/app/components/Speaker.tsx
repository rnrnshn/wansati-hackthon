import Image from "next/image";

interface Speaker {
	src: string,
	alt: string,
	name: string,
	role: string
}


const Speaker = ({ src, alt, name, role }: Speaker) => {
	return (
		<div className="justify-center items-center flex flex-col text-center py-5 w-80 h-72 space-y-5">
			<div className="">
				<Image className="rounded-full w-48" src={ src } alt={ alt } />
			</div>
			<div>
				<h3 className="font-semibold">{ name }</h3>
				<p className="italic text-zinc-400">{ role }</p>
			</div>
		</div>
	)
}


export default Speaker;
