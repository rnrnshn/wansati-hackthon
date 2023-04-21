import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";



"TODO: Add poppins font or OpenSans-Regular"



export default function Navbar() {
    const today = new Date();
    const year = today.getFullYear()

    return (
        <footer className="bg-quaternary">
            <div className="container mx-auto py-5">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-4xl font-sans font-bold">Wansati <span className="text-primary">Hackthon</span></h1>
                    </div>
                    <div className="flex justify-center items-center gap-3 text-2xl">
                        <BsFacebook />
                        <BsInstagram />
                        <BsLinkedin />
                        <BsTwitter />
                        <BsYoutube />
                    </div>
                </div>
                <div className="text-center">
                    <p>Copyright © {year} <a href="https://www.mozdevz.org/">Mozdevz Community</a>. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}