import Link from "next/link";
import Image from 'next/legacy/image'
import  heroImg from '../public/heroImg.png'


export default function Hero () {
    return (
        <div className="mx-auto max-w-7xl px-4 mt-10 md:mt-20 text-center flex flex-col space-y-6 md:flex-row">
            <div className="flex flex-col justify-center items-start text-center">
               <h1 className="font-semibold text-gray-900 md:mb-10 md:px-2 text-lg md:text-2xl md:text-left">Look inside and be free to be who you are</h1>
               <p className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-black via-rose-500 text-4xl md:text-6xl lg:text-8xl sm:text-center md:text-left">Essential Health Care</p>
             </div>
             <div>
                <Image className="rounded-3xl" src={heroImg} />
             </div>
            
        </div>
    );
}
