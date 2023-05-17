import Image from "next/image";

import forumMulherLogo from "../../../public/partners/ForumMulher.svg";
import oXFamLogo from "../../../public/partners/oxfam.png";
import FSDLogo from "../../../public/partners/FSDMOC.svg";
import kabumDigitalLogo from "../../../public/partners/Kambum.png";
//import standardBankLogo from "../../../public/partners/Standard.png";
import maputoFrontendersLogo from "../../../public/partners/mf.png";
import orangeCornersLogo from "../../../public/partners/orangeCorners.png";

const partnersImages = [
	forumMulherLogo,
	FSDLogo
]

const helpersImages = [
	oXFamLogo,
	maputoFrontendersLogo,
	kabumDigitalLogo,
	orangeCornersLogo
]

const Partners = () => {
	return (
		<section id="partners" className="scroll-mt-20">
			<div className="max-w-6xl mx-auto flex flex-col space-y-10 mb-16 p-5 container">
				<h2 className="text-4xl font-sans font-bold text-center">Parceiros</h2>
				<div className="max-w-sm mx-auto flex flex-col lg:flex-row lg:flex-nowrap gap-y-20 lg:gap-10 items-center justify-evenly">
						{ partnersImages.map((partner, index) => {
							return (
								<div className="max-w-[200px] w-full" key={index}>
									<Image className="aspect-video object-contain w-full" src={partner} alt={`partner ${index + 1}`} />
								</div>
							)
						}) }
				</div>
			</div>

			<div className="max-w-6xl mx-auto flex flex-col space-y-10 mb-16 p-5 container">
				<h2 className="text-4xl font-sans font-bold text-center">Apoio</h2>
				<div className="flex flex-col lg:flex-row lg:flex-nowrap gap-y-20 lg:gap-10 items-center justify-evenly">
						{ helpersImages.map((helper, index) => {
							return (
								<div className="max-w-[200px] w-full" key={index}>
									<Image className="aspect-video object-contain w-full" src={helper} alt={`helper ${index + 1}`} />
								</div>
							)
						}) }
				</div>
			</div>
		</section>
	)
} 

export default Partners;