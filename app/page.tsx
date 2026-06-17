import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { Dancing_Script } from "next/font/google"
import {Fraunces} from "next/font/google"
import {Sora} from "next/font/google"
import { IoIosStar } from "react-icons/io";
import { MdQrCodeScanner } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";
import { GiSelfLove } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { FiSunset } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import QRCode from "react-qr-code";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
const sora = Sora({ subsets: ["latin"], weight: ["400", "700"] });
const fruances = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // choose weights you need
});

export default function Home() {
  const pdfUrl = "ebook.pdf"
  return (
    <>
    <header className={` bg-[#F9F5EE] ${fruances.className} flex items-center px-8 py-4 justify-between `}>
      <nav className="flex gap-5 ml-72 ">
        <Link href="#about" className="text-[#88631A]">About</Link>
        <Link href="#about">What's Inside </Link>
        <Link href="#about">Message</Link>
        
        </nav>  
      <button className= "flex items-center gap-3 bg-[#260406] mr-20  rounded text-white px-4 py-2 hover:bg-[#260406] "> <span><FaDownload /></span> <span >Download Ebook</span></button>
      </header>
      <main className="flex flex-col items-center ">
      <div className=" mt-30 flex items-center gap-3 bg-white px-4 py-2 rounded shadow">
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
        <span><FaDownload /></span> <span>Request A free hard Copy</span>
        </button>
        <button className="bg-[#E6E6E6] flex gap-4  text-[#260406] px-7 py-4 rounded">
        <span><MdQrCodeScanner /></span> <span>Scan QR for free soft copy</span>
        </button>
       
      </div>
      <div className=" relative w-full h-[200vh]">
      <Image
        src="/kemiolumuyiwa.png"
        alt="New Dawn, Same Fire"
        className="mt-8 shadow-lg object-cover object-top" fill priority
      />
</div>
<section className="w-full bg-[#260406] py-10 px-[10%] grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
  <div>
    <h2 className="text-2xl font-bold text-white">20K+</h2>
    <p className="text-gray-300">Quotes Inspired</p>
  </div>
  <div>
    <h2 className="text-2xl font-bold text-white">20K+</h2>
    <p className="text-gray-300">Downloads</p>
  </div>
  <div>
    <h2 className="text-2xl font-bold text-white">25K+</h2>
    <p className="text-gray-300">Shares</p>
  </div>
</section>

      <section className="w-full text-center bg-white py-12 px-[10%]">
  <h2 className={`${sora.className} text-3xl font-bold mb-6 text-[#1B5E35]`}>ABOUT THE BOOK</h2>
  <h3 className={`${fruances.className} text-xl font-semibold mb-4`}>
    What Is <span className="italic">New Dawn, Same Fire</span> About?
  </h3>
  <p className={` ${sora.className} text-[#555555]-700 mb-6 mx-auto w-[700px]`}>
  A heartfelt journey through seasons of change, rediscovery, and  unwavering faith. This memoir explores the beauty of beginning again  while keeping the fire of purpose alive..
  </p>

  <ul className="grid grid-cols-2 gap-4 text-gray-800">
    <li className="bg-[#F9F5EE] pl-2 pr-8 py-7 rounded text-left"><div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
  <GiOpenBook className="text-white text-xl" />
</div><strong className="text-3xl ">136+ Pages</strong> of inspiration</li>
    <li className="bg-[#F9F5EE] pl-2 pr-8 py-7 rounded text-left"><div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
    <GiSelfLove className="text-white text-xl"/>
</div><strong className="text-3xl ">Personal Memoir</strong> (a story of grace)</li>
    <li className="bg-[#F9F5EE] pl-2 pr-8 py-7 rounded text-left"><div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
    <BsStars className="text-white text-xl"/>
</div><strong className="text-3xl ">Personal Stories</strong> (real & raw)</li>
    <li className="bg-[#F9F5EE] pl-2 pr-8 py-7 rounded text-left"><div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
  <FiSunset className="text-white text-xl" />
</div><strong className="text-3xl ">Lesson On Renewal</strong> (for every season)</li>
  </ul>
</section>
<section className="w-full bg-[#f9f9f9] py-12 px-[10%] ">
  <h2 className={`${sora.className} text-xl text-[#1B5E35] font-bold mb-6 text-center`}>YOUR EXCLUSIVE GIFT</h2>
  <p className={`${fruances.className}text-[#260406] font-bold italic text-center`}>
    An Exclusive Gift For Our Distinguished Guests.
  </p><p className={`${fruances.className}text-[#555555] text-center`}> Choose how you’d like to experience the book.</p>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Complimentary Copy */}
    <div className="bg-[#F9F5EE] shadow-lg rounded-lg p-6">
    <div className="bg-[#260406] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
  <FiSunset className="text-white text-xl" />
</div>
      <h3 className="text-xl font-semibold mb-4">Download Your free Digital Copy</h3>
      <p className="text-lg  mb-4">Scan the QR code to instantly access your digital copy</p>
      <QRCode
        value={pdfUrl}
        size={180}
      />
      
    </div>

    {/* Signed Hard Copy */}
    <div className="bg-[#F9F5EE] shadow-lg rounded-lg p-6">
    <div className="bg-[#260406] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
  <FiSunset className="text-white text-xl" />
</div>
      <h3 className="text-xl font-semibold mb-4">Request A Free Hard Copy</h3>
      <p className="text-lg mb-4">Request a keepsake edition  by Kemi Olumuyiwa.</p>
      <ul className="text-gray-600 mb-6">
        <li className="flex items-center gap-x-2"><span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Premium Print</span></li>
        <li className="flex items-center gap-x-2"><span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Collectible Edition</span></li>
        <li className="flex items-center gap-x-2"> <span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Gift Option</span></li>
      </ul>
      <button className="bg-[#260406] flex gap-4 items-center  text-white px-7 py-4 rounded">
        <span><HiOutlineBookOpen /></span> <span>Request A free hard Copy</span>
        </button>
    </div>
  </div>
</section>
<section className="w-full bg-white py-12 px-[10%] text-center">
  {/* Author Image */}
  

  {/* Message */}
  <h2 className="text-3xl text-[#1B5E35] font-bold mb-4">OTHER BOOKS</h2>
  <h3 className={`${fruances.className} font-bold`}>More from kemi olumuyiwa</h3>
  <p className={` ${sora.className}text-[#555555] mb-6 max-w-2xl mx-auto`}>
  A collection of books that continue to inspire growth, purpose and meaningful living.
  </p>

  {/* Author Signature */}
  <p className="font-semibold">— Komi Olumuyiwa</p>
  <p className="italic text-gray-600">Author, The Many Colors of a Woman’s Story</p>

  {/* Stars */}
  <span className="text-[#C0840B80]"><IoIosStar /></span ><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span>
</section>

<section>
<div>
<Image
        src="/kemibook.png"
        alt="New Dawn, Same Fire"
        className="mt-8 shadow-lg " width={300} height={400}
      />
</div>
<div>
<Image
        src="/olumuyiwa.png"
        alt="New Dawn, Same Fire"
        className="mt-8 shadow-lg " width={300} height={400}
      />
</div>
</section>
<section className="flex flex-col md:flex-row items-center gap-10 p-10 bg-pink-50 rounded-lg shadow-md">
        {/* Author Text */}
<div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Author</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Kemi Olumuyiwa is an author, mentor, leader, speaker, and advocate for
          grace, resilience, and personal transformation. Through her journey,
          she has inspired many to embrace change, rediscover purpose, and keep
          the fire within burning.
        </p>
        <p className="text-gray-600 italic mb-6">
          “New dawn, same fire” is her testimony that no matter the season,
          grace always makes a way.
        </p>

        {/* Icons Section */}
        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-800">
          <span className="px-3 py-1 bg-white rounded shadow">Author</span>
          <span className="px-3 py-1 bg-white rounded shadow">Speaker</span>
          <span className="px-3 py-1 bg-white rounded shadow">Mentor</span>
          <span className="px-3 py-1 bg-white rounded shadow">Leader</span>
          <span className="px-3 py-1 bg-white rounded shadow">Community Impact</span>
        </div>
      </div>
      {/* Author Image */}
      <div className="">
        <Image
          src="/kemib.jpg" // place your image in public/images
          alt="Kemi Olumuyiwa"
          className="rounded-lg object-cover"
          width={500} height={300}
        />
      </div>

      {/* Author Text */}
     
    </section>

    </main>
    <footer className="bg-red-900 text-white p-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Section */}
        <div className="max-w-md">
          <h3 className="text-lg font-bold mb-2">Moto Foundation</h3>
          <p className="text-sm mb-4">
            Moto Foundation (Mutajero Oyekan; Teniola Olumuyiwa (Moto) Foundation) 
            is the charity outlet of Mutajero Ventures Ltd, incorporated in April 1993.
          </p>
          <p className="text-sm mb-2">Click any of these links to follow us:</p>
          <div className="flex gap-4 text-2xl">
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://x.com" aria-label="X"><FaXTwitter /></a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center">
          {/* <Image
            src="/images/qr-code.png"
            alt="QR Code"
            width={120}
            height={120}
            className="mb-2"
          /> */}
          <p className="text-sm">Scan the QR to get your free copy here.</p>
        </div>
      </div>

      {/* About Links */}
      <div className="mt-8 flex gap-6 text-sm">
        <a href="/about/inside">What's inside</a>
        <a href="/about/message">Message</a>
      </div>

      {/* Bottom Legal Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-xs">
        <p>© 2026 New Dawn, Same fire. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms Of Service</a>
          <a href="/cookies">Cookies Policy</a>
        </div>
      </div>
    </footer>
    </>
  );
}
