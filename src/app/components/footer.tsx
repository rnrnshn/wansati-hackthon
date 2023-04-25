import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";



"TODO: Add poppins font or OpenSans-Regular"



export default function Navbar() {
    const today = new Date();
    const year = today.getFullYear()

    return (
        <footer className="bg-primary">
            <div className="container mx-auto py-16 flex justify-between text-white">
                <div className="space-y-5">
                    <div>
                        <h1 className="text-4xl font-sans font-bold ">Wansati Hackthon</h1>
                    </div>
                    <div className="space-y-2">
                        <p>©{year} Wansati Hackthon.</p>
                        <p>Todos os direitos reservados.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3 text-2xl">
                    <a href=""><BsFacebook /></a>
                    <a href=""><BsInstagram /></a>
                    <a href=""><BsLinkedin /></a>
                    <a href=""><BsTwitter /></a>
                    <a href=""><BsYoutube /></a>
                </div>
            </div>
        </footer>
    )
}