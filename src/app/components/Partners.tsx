import Image from "next/image";

import forumMulherLogo from "../../../public/partners/forum.png";
import oXFamLogo from "../../../public/partners/oxfam.png";
import undpLogo from "../../../public/partners/UNDP.png";
import kabumDigitalLogo from "../../../public/partners/kabum.png";
import maputoFrontendersLogo from "../../../public/partners/mf.png";

const partnersImages = [
	forumMulherLogo,
	oXFamLogo,
	undpLogo,
	kabumDigitalLogo,
	maputoFrontendersLogo
]

const Partners = () => {
	return (
		<section>
			<div className="max-w-6xl mx-auto flex flex-col space-y-10 mb-16 p-5 container">
				<h2 className="text-4xl font-sans font-bold text-center">Parceiros</h2>
				<div className="flex flex-col lg:flex-row lg:flex-nowrap gap-y-20 lg:gap-10 items-center justify-evenly">
						{ partnersImages.map((partner, index) => {
							return (
								<div className="max-w-xs w-full" key={index}>
									<Image className="aspect-video object-contain" src={partner} alt={`partner ${index + 1}`} />
								</div>
							)
						}) }
				</div>
			</div>
		</section>
	)
} 

export default Partners;