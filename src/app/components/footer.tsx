"use client";

import { 
    FacebookLogo, 
    InstagramLogo, 
    LinkedinLogo, 
    TwitchLogo, 
    YoutubeLogo 
} from "phosphor-react";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className="bg-primary p-5">
            <div className="max-w-6xl mx-auto w-full py-16 flex justify-between flex-wrap gap-10 text-white">
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
                    <a href=""><FacebookLogo /></a>
                    <a href=""><InstagramLogo /></a>
                    <a href=""><LinkedinLogo /></a>
                    <a href=""><TwitchLogo /></a>
                    <a href=""><YoutubeLogo /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;