import { ChevronLeft, ChevronRight } from "lucide-react"
import ReactCountryFlag from "react-country-flag"

export const Footer = () => {
    return (
        <footer className="bottom-0 hidden lg:block h-10 w-full border-t-2 border-slate-200 py-4">
            <div className="flex items-center justify-center gap-x-20 w-10/12 mx-auto">
                <ChevronLeft className="2xl:size-10 xl:size-8 lg:size-6 text-neutral-500/80 cursor-pointer" />
                <div className="flex items-center justify-center 2xl:gap-x-10 xl:gap-x-4 cursor-pointer group">
                    <ReactCountryFlag 
                    countryCode="US" 
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "0.5em"
                    }} 
                    svg />
                    <p className="text-lg font-semibold text-neutral-400 group-hover:text-neutral-500 uppercase">
                        English
                    </p>
                </div>

                <div className="flex items-center justify-center 2xl:gap-x-3 xl:gap-x-4 cursor-pointer group">
                    <ReactCountryFlag 
                    countryCode="ES" 
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "0.5em"
                    }} 
                    svg />
                    <p className="text-lg font-semibold text-neutral-400 group-hover:text-neutral-500 uppercase">
                        Spain
                    </p>
                </div>

                <div className="flex items-center justify-center 2xl:gap-x-3 xl:gap-x-4 cursor-pointer group">
                    <ReactCountryFlag 
                    countryCode="fr" 
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "0.5em"
                    }} 
                    svg />
                    <p className="text-lg font-semibold text-neutral-400 group-hover:text-neutral-500 uppercase">
                        France
                    </p>
                </div>

                <div className="flex items-center justify-center 2xl:gap-x-3 xl:gap-x-4 cursor-pointer group">
                    <ReactCountryFlag 
                    countryCode="de" 
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "0.5em"
                    }} 
                    svg />
                    <p className="text-lg font-semibold text-neutral-400 group-hover:text-neutral-500 uppercase">
                        German
                    </p>
                </div>
                <div className="flex items-center justify-center 2xl:gap-x-3 xl:gap-x-4 cursor-pointer group">
                    <ReactCountryFlag 
                    countryCode="it" 
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "0.5em"
                    }} 
                    svg />
                    <p className="text-lg font-semibold text-neutral-400 group-hover:text-neutral-500 uppercase">
                        Italian
                    </p>
                </div>

                <div className="flex items-center justify-center 2xl:gap-x-3 xl:gap-x-4 cursor-pointer group">
                    <ReactCountryFlag 
                    countryCode="bl" 
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "0.5em"
                    }} 
                    svg />
                    <p className="text-lg font-semibold text-neutral-400 group-hover:text-neutral-500 uppercase">
                        Portuguese
                    </p>
                </div>
                <div className="flex items-center justify-center 2xl:gap-x-3 xl:gap-x-4 cursor-pointer group">
                    <ReactCountryFlag 
                    countryCode="nl" 
                    style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "0.5em"
                    }} 
                    svg />
                    <p className="text-lg font-semibold text-neutral-400 group-hover:text-neutral-500 uppercase">
                        dutch
                    </p>
                </div>
                <ChevronRight className="2xl:size-10 xl:size-8 lg:size-6 text-neutral-500/80 cursor-pointer" />
            </div> 
        </footer>
    )
}