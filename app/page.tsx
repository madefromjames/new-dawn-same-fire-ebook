import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { Dancing_Script } from "next/font/google"
import {Fraunces} from "next/font/google"
import { IoIosStar } from "react-icons/io";
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
const fruances = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // choose weights you need
});
export default function Home() {

  return (
    <>
    <header className="bg-[#F9F5EE] flex items-center px-8 py-4 justify-between ">
      <nav className="flex gap-5 ml-72 ">
        <Link href="#about" className="text-[#88631A]">About</Link>
        <Link href="#about">What's Inside </Link>
        <Link href="#about">Message</Link>
        
        </nav>  
      <button className= "flex items-center gap-3 bg-[#260406] mr-20  rounded text-white px-4 py-2 hover:bg-[#260406] "> <span><FaDownload /></span> <span >Download Ebook</span></button>
      </header>
      <main className="flex flex-col items-center ">
      <div className="flex items-center gap-3 bg-white px-4 py-2 rounded shadow">
      <span className={`${dancing.className} text-green-600 italic font-dancing`}>
        Exclusive Access
      </span>
      <span className="text-[#C0840B80]"><IoIosStar /></span ><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span>
    </div>
      <h1 className={fruances.className}><span className="text-[#0F172A] text-4xl font-black">NEW DAWN,</span> <span className="text-[#C0840B] text-4xl font-black" >SAME FIRE</span></h1>
      <p className="mt-2 text-lg">A journey of unfiltered grace</p>
      <p className="mt-4">Thank you for being part of this special celebration. As a token of appreciation, please enjoy this complimentary copy of New Dawn, Same Fire.</p>

      <div className="mt-6 flex gap-4">
        <button className="bg-[#260406] flex gap-4 text-white px-7 py-4 rounded">
        <span><FaDownload /></span> <span>Download Complimentary Ebook</span>
        </button>
        <button className="bg-[#E6E6E6] flex gap-4  text-[#260406] px-7 py-4 rounded">
        <span><HiOutlineBookOpen /></span> <span>Request Signed Hard Copy</span>
        </button>
       
      </div>
      <div className=" relative w-full h-[200vh]">
      <Image
        src="/kemiolumuyiwa.png"
        alt="New Dawn, Same Fire"
        className="mt-8 shadow-lg object-cover object-top" fill priority
      />
</div>
      <div className="w-full pt-7 bg-[#260406] p-7 px-[10%] grid grid-cols-3 gap-6 text-center">
        <div>
          <h2 className="text-2xl font-bold text-white">5K+</h2>
          <p className="text-white">Quotes Inspired</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">10K+</h2>
          <p className="text-white">Downloads</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">5K+</h2>
          <p className="text-white">Shares</p>
        </div>
      </div>
    </main>
    </>
  );
}
