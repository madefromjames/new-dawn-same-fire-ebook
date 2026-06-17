import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { Dancing_Script } from "next/font/google"
import {Fraunces} from "next/font/google"
import {Sora} from "next/font/google"
import { IoIosStar } from "react-icons/io";
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
const sora = Sora({ subsets: ["latin"], weight: ["400", "700"] });
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
  <p className="text-gray-700 mb-6">
    Traci Merrill explores the beauty of beginning again while exploring the fire of purpose anew.
  </p>

  <ul className="grid grid-cols-2 gap-4 text-gray-800">
    <li><strong>136+ Pages</strong> of inspiration</li>
    <li><strong>Personal Memoir</strong> (a story of grace)</li>
    <li><strong>Personal Stories</strong> (real & raw)</li>
    <li><strong>Lesson On Renewal</strong> (for every season)</li>
  </ul>
</section>
<section className="w-full bg-[#f9f9f9] py-12 px-[10%] ">
  <h2 className="text-3xl font-bold mb-6 text-center">YOUR EXCLUSIVE GIFT</h2>
  <p className="text-gray-700 mb-8 text-center">
    An Exclusive Gift For Our Distinguished Guests. Choose how you’d like to experience the book.
  </p>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Complimentary Copy */}
    <div className="bg-[#F9F5EE] shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Download Your Complimentary Copy</h3>
      <ul className="text-gray-600 mb-6">
        <li>Read Anywhere</li>
        <li>Instant Access</li>
        <li>Complimentary Download</li>
      </ul>
      <button className="bg-[#260406] flex gap-4 text-white px-7 py-4 rounded">
        <span><FaDownload /></span> <span>Download Complimentary Ebook</span>
        </button>
    </div>

    {/* Signed Hard Copy */}
    <div className="bg-[#F9F5EE] shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Request a Signed Hard Copy</h3>
      <ul className="text-gray-600 mb-6">
        <li>Signed by Author</li>
        <li>Hardcover Edition</li>
        <li>Complimentary Copy</li>
      </ul>
      <button className="bg-[#E6E6E6] flex gap-4  text-[#260406] px-7 py-4 rounded">
        <span><HiOutlineBookOpen /></span> <span>Request Signed Hard Copy</span>
        </button>
    </div>
  </div>
</section>
<section className="w-full bg-white py-12 px-[10%] text-center">
  {/* Author Image */}
  <div className="flex justify-center mb-6">
    <img
      src="/thankyou.png"
      alt="Author and Guests"
      className="rounded-lg shadow-lg w-full max-w-3xl"
    />
  </div>

  {/* Message */}
  <h2 className="text-3xl font-bold mb-4">A Personal Thank You</h2>
  <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
    Your presence means more than words can express. This book is a reflection of grace, resilience, and the journey that has shaped my story. I hope these pages encourage and inspire you in your own journey.
  </p>

  {/* Author Signature */}
  <p className="font-semibold">— Komi Olumuyiwa</p>
  <p className="italic text-gray-600">Author, The Many Colors of a Woman’s Story</p>

  {/* Stars */}
  <span className="text-[#C0840B80]"><IoIosStar /></span ><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span>
</section>
<section className="w-full bg-[#1a1a1a] py-12 px-[10%] text-center text-white">
  <h2 className="text-3xl font-bold mb-4">SHARE YOUR HEART</h2>
  <p className="text-gray-300 mb-8">
    Leave A Message For Kemi. Your words of encouragement and well wishes mean a lot.
  </p>

  <form className="max-w-lg mx-auto space-y-6">
    {/* Name Input */}
    <div>
      <label htmlFor="name" className="block text-left mb-2">Your Name</label>
      <input
        id="name"
        type="text"
        placeholder="Enter your name..."
        className="w-full px-4 py-2 rounded border border-gray-600 bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Message Input */}
    <div>
      <label htmlFor="message" className="block text-left mb-2">Your Message</label>
      <textarea
        id="message"
        placeholder="Share your encouragement, well wishes or special memory..."
        rows={4}
        className="w-full px-4 py-2 rounded border border-gray-600 bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
    >
      Start Editing
    </button>
  </form>
</section>


    </main>
    </>
  );
}
