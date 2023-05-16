"use client";

import { 
	FacebookLogo, 
	InstagramLogo, 
	LinkedinLogo, 
	TelegramLogo, 
	TwitchLogo, 
	TwitterLogo, 
	YoutubeLogo 
} from "phosphor-react";


const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

	return (
		<footer className="bg-primary p-5">
			<div className="max-w-6xl mx-auto w-full py-10 flex justify-between flex-wrap gap-10 text-white">
				<div className="space-y-5">
					<div>
						<h1 className="text-4xl font-sans font-bold ">Wansati Hackthon</h1>
					</div>
					<div className="space-y-2">
						<p>©{ year } Wansati Hackthon.</p>
						<p>Todos os direitos reservados.</p>
					</div>
				</div>
				<div className="flex justify-center items-center gap-3 text-2xl">
					<a href="https://www.facebook.com/mozdevz" target="_blank" rel="noreferrer"><FacebookLogo /></a>
					<a href="https://instagram.com/mozdevz" target="_blank" rel="noreferrer"><InstagramLogo /></a>
					<a href="https://www.linkedin.com/company/mozdevz/" target="_blank" rel="noreferrer"><LinkedinLogo /></a>
					<a href="https://twitter.com/mozdevz" target="_blank" rel="noreferrer"><TwitterLogo /></a>
					<a href="https://t.me/MozDevz" target="_blank" rel="noreferrer"><TelegramLogo /></a>
					<a href="https://youtube.com/@mozdevz6592" target="_blank" rel="noreferrer"><YoutubeLogo /></a>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
