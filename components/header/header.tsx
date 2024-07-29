"use client"


import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"


export const Header = () => {
    const scrolled = useScrollTop();
    return (
        <header className={cn("top-0 h-24 w-full  border-slate-200 px-4 py-4", scrolled && "border-b-2 shadow-sm fixed")}>
            <div className="lg:max-w-screen-2xl mx-auto flex items-center lg:justify-between justify-center h-full">
                <div className="2xl:h-[50px] 2xl:w-[200px] xl:h-10 xl:w-48 lg:h-10 lg:w-48 md:h-10 md:w-48 h-8 w-32 relative">
                    <Image 
                    src="/logo-duolingo.svg" 
                    fill
                    className="absolute"  
                    alt="Logo" />
                </div>
                { scrolled ? (
                    <Link href="/get-started">
                        <Button className="bg-[#58CC02] text-2xl font-bold h-12 px-8 rounded-2xl border-b-4 border-green-600 hover:bg-[#5abe0d]">
                            Get Started
                        </Button>
                    </Link>
                ) : (
                    <div className="hidden lg:flex items-center gap-x-2 justify-center text-neutral-400 text-xl font-bold uppercase">
                        <p> site Language: English</p>
                        <ChevronDown className="size-6 font-bold" />
                    </div>
            ) }
                 
            </div>
        </header>
    )
}