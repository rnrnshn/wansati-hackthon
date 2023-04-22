/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

export const Partners = () => {
    return (
        <section>
            <div className="container mx-auto flex flex-col space-y-10 my-10">
                <h1 className="text-4xl font-sans font-bold text-center">Parceiros</h1>
                <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-y-20 lg:gap-10 items-center justify-evenly">
                    <div className="">
                        <img src="./partners/oxfam.png" alt="Oxfam" />
                    </div>
                    <div>
                        <img className="max-w-xs lg:w-28" src="./partners/UNDP.png" alt="UNDP" />
                    </div>
                    <div>
                        <img className="w-60" src="./partners/forum.png" alt="forum-mulher" />
                    </div>
                    <div>
                        <img className="max-w-xs" src="./partners/Kabum_logo.png" alt="Kabum" />
                    </div>
                    <div>
                        <img className="max-w-xs lg:w-52" src="./partners/mf.png" alt="Maputo Frontenders" />
                    </div>
                </div>
            </div>
        </section>
    )
} 