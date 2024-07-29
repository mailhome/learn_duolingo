import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main className="w-full ">
      <div className="flex flex-col items-center 2xl:gap-y-20 xl:gap-y-20 lg:gap-y-10 md:gap-y-8 gap-y-8 2xl:w-5/12 xl:w-6/12 lg:w-8/12 md:w-8/12 w-10/12 mx-auto "> 
        <h1 className="2xl:text-4xl xl:text-3xl lg:text-4xl md:text-3xl text-2xl text-center  text-neutral-600 font-bold">
          The free, fun, and effective way to learn a language!
        </h1>
        <div className="flex flex-col items-center 2xl:gap-y-8 xl:gap-y-8 lg:gap-y-8 md:gap-y-6 gap-y-6 w-full">
        <Link href="/get-started" className="w-full justify-center flex items-center">
          <Button className="bg-[#58CC02] 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl font-bold 2xl:h-16 xl:h-16 lg:h-12 2xl:px-8 xl:px-8 lg:px-6 rounded-2xl 2xl:border-b-6 xl:border-b-4 border-b-4 border-green-600 hover:bg-[#5abe0d] 2xl:w-6/12 xl:w-6/12 lg:w-6/12 md:w-6/12 w-full uppercase">
              Get Started
          </Button>
        </Link>

        <Link href="/get-started" className="w-full justify-center flex items-center">
          <Button variant="ghost" className="bg-white 2xl:text-2xl xl:text-2xl lg:text-xl md:text-base font-bold 2xl:h-16 xl:h-16 lg:h-14 px-8 rounded-2xl 2xl:border-b-6 lg:border-b-4 text-blue-500 xl:border-b-4 border-b-4 border-[1px] border-neutral-300 hover:bg-neutral-400 2xl:w-7/12 xl:w-7/12 lg:w-6/12 w-full uppercase">
              I already have an account 
          </Button>
        </Link>
        </div>
      </div>
    </main>
  );
}
