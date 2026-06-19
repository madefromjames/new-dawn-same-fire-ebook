import Image from "next/image";
import Link from "next/link";
import { RxDownload } from "react-icons/rx";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { Dancing_Script } from "next/font/google"
import { Fraunces } from "next/font/google"
import { Sora } from "next/font/google"
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
  weight: ["300", "400", "600"], // include 600 for SemiBold
});

export default function Home() {
  const pdfUrl = "ebook.pdf"
  return (
    <>
      <header className={` bg-[#F9F5EE] ${fruances.className} flex items-center px-8 py-4`}>
        <nav className="flex gap-5 flex-1 justify-center ">
          <Link href="#about" className="text-[#555555]">About</Link>
          <Link href="#about" className="text-[#555555]">What's Inside</Link>
          <Link href="#about" className="text-[#555555]">Message</Link>
        </nav>
        <button className="bg-[#C0840B] flex items-center gap-4 text-white px-7 py-4 rounded md:mr-16">
          <span><MdQrCodeScanner /></span><span className="text-[#FFFFFF]">Scan QR for free soft copy</span>
        </button>
      </header>

      <main className="flex flex-col items-center ">
        <div className="mt-30 flex h-[36px] w-[232px] items-center justify-center gap-[2px] whitespace-nowrap rounded-[30px] border border-[#E5E7EB] bg-white px-[25px] py-[6px]">
          <span className={`${dancing.className} text-green-600 italic font-dancing`}>
            Exclusive Access
          </span>
          <span className="text-[#C0840B80]"><IoIosStar /></span ><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span>
        </div>
        <div>
          <h1 className={`${fruances.className} text-[72px] leading-[72px] text-center`}><span className="text-[#0F172A]">NEW DAWN,</span> <span className="text-[#C0840B]"><i>SAME FIRE</i></span></h1>
          <p className={`${sora.className} mt-4 text-[#555555]`}>Thank you for being part of this special celebration. As a token of appreciation, please enjoy this complimentary copy of New Dawn, Same Fire.</p>
        </div>

        <div className={`mt-6 flex gap-4 ${fruances.className}`}>
          <button className="bg-[#C0840B] flex items-center gap-4 text-white px-7 py-4 rounded">
            <span><MdQrCodeScanner /></span><span className="text-[#FFFFFF]">Scan QR for free soft copy</span>
          </button>
          <button className="bg-[#260406] flex items-center gap-4 text-white px-7 py-4 rounded">
            <span><GiOpenBook /></span> <span>Request A free hard Copy</span>
          </button>
        </div>
        <div className=" relative w-full h-[205vh]">
          <Image
            src="/kemiolumuyiwa.png"
            alt="New Dawn, Same Fire"
            className="mt-8 shadow-lg object-cover object-top" fill priority
          />
        </div>
        <section className="w-full bg-[#260406] py-10 px-[25%] grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h2 className={`${fruances.className} text-[56px] leading-[84px] font-normal text-[#FFEECC]`}>5K+</h2>
            <p className={`${sora.className} text-[18px] leading-[27px] text-gray-300`}>Quotes Inspired</p>
          </div>
          <div>
            <h2 className={`${fruances.className} text-[56px] leading-[84px] font-normal text-[#FFEECC]`}>10K+</h2>
            <p className={`${sora.className} text-[18px] leading-[27px] text-gray-300`}>Downloads</p>
          </div>
          <div>
            <h2 className={`${fruances.className} text-[56px] leading-[84px] font-normal text-[#FFEECC]`}>5K+</h2>
            <p className={`${sora.className} text-[18px] leading-[27px] text-gray-300`}>Shares</p>
          </div>
        </section>

        <section className="w-full bg-white px-4 py-12 text-center md:px-[10%] md:py-[10%]">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <h2 className={`${sora.className} text-xl font-normal text-center mb-6 text-[#1B5E35]`}>ABOUT THE BOOK</h2>
            <div className="w-full px-4 md:px-[10%]">
              <h3 className={`${fruances.className} text-[36px] leading-[54px] mb-4`}>
                <i>What Is <span className="italic">New Dawn, Same Fire</span> About?</i>
              </h3>
              <p className={`${sora.className} mb-8 max-w-full text-[#555555]`}>
                A heartfelt journey through seasons of change, rediscovery, and unwavering faith. This memoir explores the beauty of beginning again while keeping the fire of purpose alive.
              </p>
            </div>

            <div className={`${fruances.className} text-[#555555] max-w-full`}>
              <ul className="grid w-full grid-cols-1 gap-4 text-[#260406] md:grid-cols-2 pb-[15px]">
                <li className="bg-[#F9F5EE] pl-6 pr-8 rounded text-left">
                  <div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0 my-[15px]">
                    <GiOpenBook className="text-white text-xl" />
                  </div><strong className="text-3xl pb-[15px]">136+ Pages</strong><span className="text-[#555555] px-2">of inspiration</span>
                </li>
                <li className="bg-[#F9F5EE] pl-6 pr-8 rounded text-left"><div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0 my-[15px]">
                  <GiSelfLove className="text-white text-xl" />
                </div><strong className="text-3xl ">Personal Memoir</strong> <span className="text-[#555555] px-2">(a story of grace)</span></li>
                <li className="bg-[#F9F5EE] pl-6 pr-8 rounded text-left"><div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0 my-[15px]">
                  <BsStars className="text-white text-xl" />
                </div><strong className="text-3xl ">Personal Stories</strong> <span className="text-[#555555] px-2">(real & raw)</span></li>
                <li className="bg-[#F9F5EE] pl-6 pr-8 rounded text-left"><div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0 my-[15px]">
                  <FiSunset className="text-white text-xl" />
                </div><strong className="text-3xl ">Lesson On Renewal</strong> <span className="text-[#555555] px-2">(for every season)</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#240406] py-12 px-[10%] ">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <h2 className={`${sora.className} text-xl font-normal text-center mb-6 text-[#A7F7C6]`}>YOUR EXCLUSIVE GIFT</h2>
            <div className="w-full px-4 md:px-[10%] text-center">
              <h3 className={`${fruances.className} text-[36px] leading-[54px] mb-4 text-[#E6E6E6]`}>
                <i>An Exclusive Gift For Our Distinguished Guests.</i>
              </h3>
              <p className={`${sora.className} mb-8 max-w-full text-[#E6E6E6]`}>Choose how you’d like to experience the book.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Complimentary Copy */}
            <div className="bg-[#F9F5EE] shadow-lg rounded-lg p-6 flex flex-col h-full">
              <div className="bg-[#260406] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                <RxDownload className="text-white text-xl" />
              </div>
              <h3 className={`${fruances.className} text-xl mb-4`}>Download Your free Digital Copy</h3>
              <p className={`${sora.className} text-lg mb-4 text-[#555555]`}>Scan the QR code to instantly access your digital copy</p>
              <div className="mx-auto flex h-[270px] w-[283px] items-center justify-center rounded-[8px] border-[3px] border-[#240406] bg-white">
                <QRCode
                  value={pdfUrl}
                  size={220}
                  fgColor="#240406"
                  bgColor="#FFFFFF"
                />
              </div>

            </div>

            {/* Signed Hard Copy */}
            <div className="bg-[#F9F5EE] shadow-lg rounded-lg p-6 flex flex-col h-full">
              <div className="bg-[#260406] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                <GiOpenBook className="text-white text-xl" />
              </div>
              <h3 className={`${fruances.className} text-xl mb-4`}>Request A Free Hard Copy</h3>
                <p className={`${sora.className} text-lg mb-4 whitespace-nowrap text-[#555555]`}>Request a keepsake edition by <span className="text-[#240406]">Kemi Olumuyiwa.</span></p>
              <ul className="text-gray-600 mb-6">
                <li className="flex items-center gap-x-2"><span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Premium Print</span></li>
                <li className="flex items-center gap-x-2"><span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Collectible Edition</span></li>
                <li className="flex items-center gap-x-2"> <span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Gift Option</span></li>
              </ul>
              <button className="mt-auto flex h-[64px] w-full max-w-[482px] items-center justify-center gap-[10px] rounded-[4px] bg-[#260406] px-[99px] py-[20px] text-white">
                <span><GiOpenBook /></span>
                <span>Request A free hard Copy</span>
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
