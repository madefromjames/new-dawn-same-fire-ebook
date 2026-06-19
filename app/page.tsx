import Image from "next/image";
import Link from "next/link";
import { RxDownload } from "react-icons/rx";
import { Dancing_Script } from "next/font/google"
import { Fraunces } from "next/font/google"
import { Sora } from "next/font/google"
import { IoIosStar } from "react-icons/io";
import { MdQrCodeScanner } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";
import { GiSelfLove } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { FiSunset } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import QRCode from "react-qr-code";
import { GrAggregate } from "react-icons/gr";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { MdKeyboardVoice } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
const sora = Sora({ subsets: ["latin"], weight: ["400", "700"] });
const fruances = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600"], // include 600 for SemiBold
  style: ["normal", "italic"]
});

export default function Home() {
  const pdfUrl = "ebook.pdf"
  return (
    <>
      <header className={`bg-[#F9F5EE] ${fruances.className} flex items-center justify-between px-4 py-4 md:hidden`}>
        <span className="text-xl font-bold text-[#280506]">New Dawn, Same fire</span>
        <details className="relative">
          <summary className="list-none cursor-pointer rounded-md p-2 text-[#0F172A] [&::-webkit-details-marker]:hidden">
            <FaBars className="text-xl" />
          </summary>
          <div className="absolute right-0 top-full z-20 mt-3 w-56 rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-lg">
            <nav className="flex flex-col gap-3 text-sm text-[#555555]">
              <Link href="#about">About</Link>
              <Link href="#about">What's Inside</Link>
              <Link href="#about">Message</Link>
            </nav>
          </div>
        </details>
      </header>

      <header className={` hidden md:flex bg-[#F9F5EE] ${fruances.className} flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:px-8`}>
        <nav className="flex flex-wrap justify-center gap-4 md:flex-1 md:gap-5">
          <Link href="#about" className="text-[#555555]">About</Link>
          <Link href="#about" className="text-[#555555]">What's Inside</Link>
          <Link href="#about" className="text-[#555555]">Message</Link>
        </nav>
        <button className="bg-[#C0840B] flex w-full items-center justify-center gap-4 rounded px-5 py-3 text-white md:mr-16 md:w-auto md:px-7 md:py-4">
          <span><MdQrCodeScanner /></span><span className="text-[#FFFFFF]">Scan QR for free soft copy</span>
        </button>
      </header>

      <main className="flex flex-col items-center overflow-x-hidden">
        <div className="mt-8 flex h-[36px] w-fit max-w-[92vw] items-center justify-center gap-[2px] whitespace-nowrap rounded-[30px] border border-[#E5E7EB] bg-white px-[18px] py-[6px] md:mt-10 md:w-[232px] md:px-[25px]">
          <span className={`${dancing.className} text-green-600 italic font-dancing`}>
            Exclusive Access
          </span>
          <span className="text-[#C0840B80]"><IoIosStar /></span ><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span>
        </div>
        <div className="px-4 text-center md:px-0">
          <h1 className={`${fruances.className} text-[40px] leading-[44px] text-center md:text-[72px] md:leading-[72px]`}><span className="text-[#0F172A]">NEW DAWN,</span> <span className="text-[#C0840B]"><i>SAME FIRE</i></span></h1>
          <p className={`${sora.className} mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#555555] md:text-base`}>
            Thank you for being part of this special celebration. As a token of appreciation, please enjoy this complimentary copy of New Dawn, Same Fire.
          </p>
        </div>

        <div className={`mt-6 flex w-full flex-col gap-3 px-4 ${fruances.className} md:w-auto md:flex-row md:px-0`}>
          <button className="bg-[#C0840B] flex w-full items-center justify-center gap-4 rounded px-5 py-4 text-white md:w-auto md:px-7">
            <span><MdQrCodeScanner /></span><span className="text-[#FFFFFF]">Scan QR for free soft copy</span>
          </button>
          <button className="bg-[#260406] flex w-full items-center justify-center gap-4 rounded px-5 py-4 text-white md:w-auto md:px-7">
            <span><GiOpenBook /></span> <span>Request A free hard Copy</span>
          </button>
        </div>
        <div className="relative mt-8 h-[52vh] w-full overflow-hidden md:h-[205vh]">
          <Image
            src="/kemiolumuyiwa.png"
            alt="New Dawn, Same Fire"
            className="shadow-lg object-cover object-top"
            fill
            priority
          />
        </div>
        <section className="w-full bg-[#260406] py-4 px-4 md:py-10 text-center md:px-[25%]">
          <div className="grid grid-cols-3 gap-6 md:grid-cols-3">
            <div>
              <h2 className={`${fruances.className} text-2xl font-normal text-[#FFFFFF] md:text-[56px] md:leading-[84px]`}>15K+</h2>
              <p className={`${sora.className} text-[11px] text-[#E6E6E6] md:text-[18px] md:leading-[27px]`}>Downloads</p>
            </div>
            <div>
              <h2 className={`${fruances.className} text-2xl  font-normal text-[#FFFFFF] md:text-[56px] md:leading-[84px]`}>20K+</h2>
              <p className={`${sora.className} text-[11px] text-[#E6E6E6] md:text-[18px] md:leading-[27px]`}>Readers</p>
            </div>
            <div>
              <h2 className={`${fruances.className} text-2xl font-normal text-[#FFFFFF] md:text-[56px] md:leading-[84px]`}>16K+</h2>
              <p className={`${sora.className} text-[11px] text-[#E6E6E6] md:text-[18px] md:leading-[27px]`}>5-star review</p>
            </div>
          </div>
        </section>

        <section className="w-full bg-white px-4 py-12 text-center md:px-[10%] md:py-[10%]">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <h2 className={`${sora.className} text-sm md:text-xl font-normal text-center md:mb-6 text-[#1B5E35]`}>ABOUT THE BOOK</h2>
            <div className="w-full px-0 md:px-[10%]">
              <h3 className={`${fruances.className} text-[18px] leading-[38px] md:mb-4 md:text-[36px] md:leading-[54px]`}>
                <i>What Is <span>New Dawn, Same Fire</span> About?</i>
              </h3>
              <p className={`${sora.className} mx-auto mb-8 max-w-2xl text-sm leading-6 text-[#555555] md:text-base`}>
                This memoir explores the beauty of beginning again  while keeping the fire of purpose alive.
              </p>
            </div>

            <div className={`${fruances.className} w-full md:max-w-full text-[#555555]`}>
              <ul className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 text-[#260406] pb-[15px]">
                <li className="rounded bg-[#F9F5EE] pl-4 pr-4 text-left md:pl-6 md:pr-8">
                  <div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0 my-[15px]">
                    <GiOpenBook className="text-white text-xl" />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center pb-[15px]">
                    <strong className="block text-2xl md:pb-[15px] md:text-3xl">136+ Pages</strong>
                    <span className={`${sora.className} text-[#555555] md:pl-2`}>of inspiration</span>
                  </div>
                </li>
                <li className="rounded bg-[#F9F5EE] pl-4 pr-4 text-left md:pl-6 md:pr-8">
                  <div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0 my-[15px]">
                    <GiSelfLove className="text-white text-xl" />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center pb-[15px]">
                    <strong className="block text-2xl md:pb-[15px] md:text-3xl">Personal Memoir</strong>
                    <span className={`${sora.className} text-[#555555] md:pl-2`}>(a story of grace)</span>
                  </div>
                </li>
                <li className="rounded bg-[#F9F5EE] pl-4 pr-4 text-left md:pl-6 md:pr-8">
                  <div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0 my-[15px]">
                    <BsStars className="text-white text-xl" />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center pb-[15px]">
                    <strong className="text-2xl md:pb-[15px]  md:text-3xl">Personal Stories</strong>
                    <span className={`${sora.className} text-[#555555] md:pl-2`}>(real & raw)</span>
                  </div>
                </li>
                <li className="rounded bg-[#F9F5EE] pl-4 pr-4 text-left md:pl-6 md:pr-8"><div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0 my-[15px]">
                  <FiSunset className="text-white text-xl" />
                </div>
                  <div className="flex flex-col md:flex-row md:items-center pb-[15px]">
                    <strong className="text-2xl md:pb-[15px] md:text-3xl">Lesson On Renewal</strong>
                    <span className={`${sora.className} text-[#555555] md:pl-2`}>(for every season)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#240406] px-4 py-12 text-center md:px-[10%] md:py-[10%]">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <h2 className={`${sora.className} text-sm md:text-xl font-normal text-center md:mb-6 text-[#7CD9A0]`}>YOUR EXCLUSIVE GIFT</h2>
            <div className="w-full px-0 text-center md:px-[10%]">
              <h3 className={`${fruances.className} text-[18px] leading-[38px] md:mb-4 md:text-[36px] text-[#E6E6E6] md:leading-[54px]`}>
                <i>An Exclusive Gift For Our Distinguished Guests.</i>
              </h3>
              <p className={`${sora.className} mx-auto mb-8 max-w-2xl text-sm leading-6 text-[#E6E6E6] md:text-base`}>Choose how you’d like to experience the book.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Complimentary Copy */}
            <div className="bg-[#F9F5EE] shadow-lg rounded-lg p-6 flex flex-col h-full text-left">
              <div className="bg-[#260406] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                <RxDownload className="text-white text-xl" />
              </div>
              <h3 className={`${fruances.className} text-lg my-4 md:text-xl`}>Download Your free Digital Copy</h3>
              <p className={`${sora.className} text-base mb-4 text-[#555555] md:text-lg`}>Scan the QR code to instantly access your digital copy</p>
              <div className="mx-auto flex aspect-[283/270] w-full max-w-[283px] items-center justify-center rounded-[8px] border-[3px] border-[#240406] bg-white px-[18px] py-[14px] md:px-[28px]">
                <QRCode
                  value={pdfUrl}
                  size={220}
                  fgColor="#240406"
                  bgColor="#FFFFFF"
                />
              </div>

            </div>

            {/* Signed Hard Copy */}
            <div className="bg-[#F9F5EE] shadow-lg rounded-lg p-6 flex flex-col h-full text-left">
              <div className="bg-[#260406] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                <GiOpenBook className="text-white text-xl" />
              </div>
              <h3 className={`${fruances.className} text-lg my-4 md:text-xl`}>Request A Free Hard Copy</h3>
              <p className={`${sora.className} mb-4 text-base leading-6 text-[#555555] md:text-lg`}>Request a keepsake edition by <span className="whitespace-nowrap text-[#240406]">Kemi Olumuyiwa.</span></p>
              <ul className="text-gray-600 mb-6">
                <li className="flex items-center gap-x-2 mb-2"><span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Premium Print</span></li>
                <li className="flex items-center gap-x-2 mb-2"><span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Collectible Edition</span></li>
                <li className="flex items-center gap-x-2 mb-2"> <span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Gift Option</span></li>
              </ul>
              <button className="mt-auto flex h-[56px] w-full items-center justify-center gap-[10px] rounded-[4px] bg-[#260406] px-6 py-3 text-white md:h-[64px] md:max-w-[482px] md:px-[99px] md:py-[20px]">
                <span className="text-xl"><GiOpenBook /></span>
                <span>Request A free hard Copy</span>
              </button>
            </div>
          </div>

        </section>
        <section className="w-full bg-white px-15 py-12 text-center md:px-[10%] md:py-[10%]">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            {/* Author Image */}

            {/* Message */}
            <h2 className={`${sora.className} text-sm md:text-xl font-normal text-center md:mb-6 text-[#1B5E35]`}>OTHER BOOKS</h2>
            <div className="w-full px-0 md:px-[10%]">
              <h3 className={`${fruances.className} text-[18px] leading-[38px] md:mb-4 md:text-[36px] md:leading-[54px]`}><i>More from Kemi Olumuyiwa</i> </h3>
              <p className={` ${sora.className} mx-auto max-w-2xl text-sm leading-6 text-[#555555] md:text-base`}>
                A collection of books that continue to inspire growth, purpose and meaningful living.
              </p>
            </div>

            {/* Author Signature */}
            {/* <p className="font-semibold">— Komi Olumuyiwa</p> */}
            {/* <p className="italic text-gray-600">Author, The Many Colors of a Woman’s Story</p> */}

            {/* Stars */}
            {/* <span className="text-[#C0840B80]"><IoIosStar /></span ><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span> */}

          </div>

          <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-2">
            <div className="bg-[#F9F5EE] shadow-lg rounded-lg p-6 items-center flex flex-col h-full">
              <Image
                src="/kemibook.png"
                alt="New Dawn, Same Fire"
                className="mt-8 h-auto w-full max-w-[300px]"
                width={300}
                height={400}
              />
              <div className="px-0 text-center md:px-[10%]">
                <h3 className={`${fruances.className} text-xl leading-[38px] font-bold md:text-[36px] md:leading-[54px]`}>Lifted </h3>
                <p className={` ${sora.className} text-sm leading-6 text-[#555555] md:text-base`}>
                  Faith-filled encouragement to rise above life’s challenges
                </p>
              </div>
            </div>
            <div className="bg-[#F9F5EE] shadow-lg rounded-lg p-6 items-center flex flex-col h-full">
              <Image
                src="/olumuyiwa.png"
                alt="New Dawn, Same Fire"
                className="mt-8 h-auto w-full max-w-[300px]"
                width={300}
                height={400}
              />
              <div className="justify-center px-0 text-center md:px-[10%]">
                <h3 className={`${fruances.className} text-xl leading-[38px] font-bold md:text-[36px] md:leading-[54px]`}>Married to My Role Model</h3>
                <p className={` ${sora.className} text-sm leading-6 text-[#555555] md:text-base`}>
                  Faith-filled encouragement to rise above life’s challenges
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-3 md:gap-10 p-10 bg-[#F9F5EE] rounded-2xl">

          {/* Headings - always first */}
          <div className="w-full text-center md:hidden">
            <h2 className={`${sora.className} text-sm font-normal text-[#1B5E35]`}>ABOUT AUTHOR</h2>
            <h2 className={`${fruances.className} italic text-[18px] leading-[38px] md:text-[36px] font-normal text-[#260406]`}>Meet Kemi Olumuyiwa</h2>
          </div>

          {/* Author Image */}
          <div className="order-1 md:order-2 w-full md:w-1/2 h-[350px] overflow-hidden rounded-xl">
            <Image
              src="/kemib.jpg"
              alt="Kemi Olumuyiwa"
              className="rounded-xl object-cover object-top w-full h-full scale-110"
              width={579} height={418}
            />
          </div>

          {/* Text and Icons - after image on mobile, left side on desktop */}
          <div className="order-2 md:order-1 flex flex-col w-full md:w-1/2 text-center md:text-left">
            {/* Headings - desktop only */}
            <h2 className={`${sora.className} hidden md:block text-xl font-normal text-[#1B5E35] mb-4`}>ABOUT AUTHOR</h2>
            <h2 className={`${fruances.className} hidden md:block italic text-3xl font-normal text-[#260406] mb-4`}>Meet Kemi Olumuyiwa</h2>

            <p className={`${sora.className} text-sm md:text-base leading-relaxed mb-4 text-[#555555]`}>
              Author, mentor, leader, speaker, and advocate for grace, resilience, and personal transformation.
              Through her journey, she has inspired many to embrace change, rediscover purpose, and keep the fire within burning.
            </p>
            <p className={`${sora.className} text-sm md:text-base mb-6 text-[#555555]`}>
              New Dawn, Same Fire is her testimony that no matter the season, grace always makes a way..
            </p>

            {/* Icons Section */}
            <div className="flex items-start justify-between text-sm font-medium text-gray-800">
              <span className="flex flex-col items-center">
                <div className="bg-[#C0840B1A] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <GiOpenBook className="text-[#C0840B] text-xl" />
                </div>
                <p>Author</p>
              </span>
              <span className="flex flex-col items-center">
                <div className="bg-[#C0840B1A] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <MdKeyboardVoice className="text-[#C0840B] text-xl" />
                </div>
                <p>Speaker</p>
              </span>
              <span className="flex flex-col items-center">
                <div className="bg-[#C0840B1A] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <MdGroups2 className="text-[#C0840B] text-xl" />
                </div>
                <p>Mentor</p>
              </span>
              <span className="flex flex-col items-center">
                <div className="bg-[#C0840B1A] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <GrAggregate className="text-[#C0840B] text-xl" />
                </div>
                <p>Leader</p>
              </span>
              <span className="flex flex-col items-center">
                <div className="bg-[#C0840B1A] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <FaHandHoldingWater className="text-[#C0840B] text-xl" />
                </div>
                <p><span className="hidden md:inline">Community </span>Impact</p>
              </span>
            </div>
          </div>

        </section>

      </main>
      <footer className="bg-[#240406] text-white p-15">
  <div className="flex flex-col items-center md:flex-row md:items-start gap-x-60 justify-between">

    {/* Left Section */}
    <div className="max-w-md flex flex-col items-center text-center md:items-start md:text-left">
      <p className={` ${sora.className} text-sm md:text-xl mb-6 `}>
        MOTO Foundation <span className="text-white/70">(Mutajero Oyekan; Teniola Olumuyiwa (MOTO) Foundation)
          is the charity outlet of Mutajero Ventures Ltd, incorporated in April 1993.</span>
      </p>
      <div className="flex gap-x-3 justify-center md:justify-start">
        <p className={`${fruances.className} text-sm mb-2 text-white/60 italic`}>Click any of these links to follow us:</p>
      </div>

      <div className="flex gap-4 text-2xl mb-8 justify-center md:justify-start">
        <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
        <a href="https://x.com" aria-label="X"><FaXTwitter /></a>
      </div>
    </div>

    {/* middles section */}
    <nav className={`${fruances.className} flex flex-col gap-3 flex-1 items-center text-center md:items-start md:text-left justify-center`}>
      <Link href="#about" className="text-[#E6E6E6]/60">About</Link>
      <Link href="#about" className="text-[#E6E6E6]/60">What's Inside</Link>
      <Link href="#about" className="text-[#E6E6E6]/60">Message</Link>
    </nav>

    {/* Right Section */}
    <div className="flex flex-col items-center">
      <p className={`${fruances.className} text-sm mb-3 text-[#F9F5EE]`}>Scan the QR to get your free copy here.</p>
      <div className="mx-auto flex aspect-[283/270] w-full max-w-[170px] items-center justify-center rounded-[8px] border-[3px] border-[#240406] bg-white px-[18px] py-[14px] md:px-[28px]">
        <QRCode
          value={pdfUrl}
          size={220}
          fgColor="#240406"
          bgColor="#FFFFFF"
        />
      </div>
    </div>
  </div>

  {/* Bottom Legal Section */}
  <div className={`${sora.className} mt-8 border-t border-[#D9D9D9]/10 text-white/50 pt-4 flex flex-col items-center text-center gap-4 md:flex-row md:items-center md:text-left md:gap-0 justify-between text-xg`}>
    <p>© 2026 New Dawn, Same fire. All rights reserved.</p>
    <div className="flex gap-4 flex-wrap justify-center">
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms Of Service</a>
      <a href="/cookies">Cookies Policy</a>
    </div>
  </div>
</footer>
    </>
  );
}
