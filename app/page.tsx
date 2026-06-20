"use client";

import { useState, type FormEvent } from "react";
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
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const pdfUrl = "https://new-dawn-same-fire-ebook-tau.vercel.app/new-dawn-same-fire.pdf"

  const openRequestModal = () => setIsRequestModalOpen(true);
  const closeRequestModal = () => setIsRequestModalOpen(false);
  const handleRequestSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    closeRequestModal();
  };

  return (
    <>
      <header className={`bg-[#F9F5EE] ${fruances.className} flex items-center justify-between px-4 py-4 md:hidden`}>
        <span className={`${dancing.className} text-xl font-bold text-[#280506] italic`}>Kemi Olumuyiwa</span>
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
            <button className="bg-[#C0840B] flex w-full items-center justify-center rounded py-3 my-6 gap-4 text-white md:w-auto md:px-7">
              <span><RxDownload /></span><span className="text-[#FFFFFF]">Download eBook</span>
            </button>
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

        <div className={`mt-12 flex w-full flex-col gap-3 px-4 ${fruances.className} md:w-auto md:flex-row md:px-0`}>
          <button className="bg-[#C0840B] flex w-full items-center justify-center gap-4 rounded px-5 py-4 text-white md:w-auto md:px-7">
            <span><MdQrCodeScanner /></span><span className="text-[#FFFFFF]">Scan QR for free soft copy</span>
          </button>
          <button type="button" onClick={openRequestModal} className="bg-[#260406] flex w-full items-center justify-center gap-4 rounded px-5 py-4 text-white md:w-auto md:px-7">
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
        <section className="w-full bg-[#260406] py-4 px-4 text-center md:py-10 md:px-[25%]">
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-3">
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

        <section className="w-full bg-[#F9F5EE] px-4 py-12 text-center md:px-[10%] md:py-[10%]">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            {/* Author Image */}

            {/* Message */}
            <h2 className={`${sora.className} text-sm md:text-xl font-normal text-center md:mb-6 text-[#1B5E35]`}>A REVIEWER’S TAKE</h2>
            <div className="w-full px-0 md:px-[10%]">
              <h3 className={`${fruances.className} italic text-[18px] leading-[38px] md:mb-4 md:text-[36px] md:leading-[54px]`}>In The Words Of  A Reader</h3>
              <p className={` ${sora.className} mx-auto max-w-2xl text-sm leading-6 text-[#555555] md:text-base`}>
                An honest, first-person look at the story behind New Dawn, Same Fire.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-2">
            <div className="flex justify-center items-center">
              <Image
                src="/kemi_new_dawn.png"
                alt="New Dawn, Same Fire"
                className="w-full h-auto max-w-md rounded-xl object-cover object-center"
                width={400}
                height={600}
              />
            </div>
            <div className="bg-[#FFFFFF] shadow-lg rounded-lg p-6 gap-4 items-center flex flex-col h-full">
              <div className="bg-[#F5F5F5] justify-center rounded-xl px-0 text-center md:px-[10%]">
                <h3 className={`${fruances.className} text-sm leading-[38px] font-bold md:text-[36px] md:leading-[54px]`}>"A conversation with a soul that refused to stay down."</h3>
              </div>
              <div className="bg-[#F5F5F5] rounded-xl">
                <p className={` ${sora.className} text-sm leading-6 text-[#555555] md:text-base`}>
                  New Dawn, Same Fire: A Journey of Unfiltered Grace takes you through the world of corporate boardrooms and the quiet, heavy moments of a home held together by faith and resolve.
                  On its pages you feel the weight of every pillar that stood firm and the courage behind every support that changed it all. At the very heart of this journey is a celebration of the woman who started it all: the author's mother. This book beautifully honors the woman who... didn't just raise a daughter, but mentored a visionary, passing down the sharp business instincts and the moral gauge that define her today. It captures that selfless season when, while the author served on official duty in Abuja, her mother stayed behind as a steady support.
                  That strength is mirrored in her husband, the Chairman of First Tricon Limited, a consulting, investment and development organisation with roots and reach across Africa. She celebrates him, not only with a story that makes the book un-put-down-able, but also describes him as her Faith in Action Partner — the unwavering support system that allowed her to reach for the stars.
                  Look forward to the special section on experiential boardroom lessons for the younger generation of career women. Stay a while on the page where the 60-year-old author pens a letter to her teenage self. Mind-shifting — in my opinion, it's an exercise we all should do from time to time.
                  In this book, you see consistency in the fruit of a life lived with purpose. It is a powerful reminder of the leverage that comes with giving generously to man and God. As it starts to make a landing, the pages showcase why retirement shouldn't be an ending but rather a new beginning — her new role as Executive Vice Chairman at First Tricon Limited, her fledgling textile manufacturing venture, and a chance to further take her love for women and youth empowerment to the next level.
                  This book is a roadmap of many sorts for anyone who believes that their best chapters are still being written, and that a true legacy is built one faithful, family-centered step at a time. Welcome to Kemi's world of Faith, Family and Factory.
                </p>
              </div>
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
              <button type="button" onClick={openRequestModal} className="mt-auto flex h-[56px] w-full items-center justify-center gap-[10px] rounded-[4px] bg-[#260406] px-6 py-3 text-white md:h-[64px] md:max-w-[482px] md:px-[99px] md:py-[20px]">
                <span className="text-xl"><GiOpenBook /></span>
                <span>Request A free hard Copy</span>
              </button>
            </div>
          </div>

        </section>
        <section className="w-full bg-white px-4 py-12 text-center md:px-[10%] md:py-[10%]">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            {/* Author Image */}

            {/* Message */}
            <h2 className={`${sora.className} text-sm md:text-xl font-normal text-center md:mb-6 text-[#1B5E35]`}>MORE BOOKS</h2>
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
            <div className="flex flex-wrap items-start justify-center gap-4 text-sm font-medium text-gray-800 md:justify-between">
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
  <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start md:gap-x-12 xl:gap-x-60">

    {/* Left Section */}
    <div className="max-w-md flex flex-col items-center text-center md:items-start md:text-left">
      <p className={` ${sora.className} mb-6 text-sm md:text-xl `}>
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
  <div className={`${sora.className} mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#D9D9D9]/10 pt-4 text-center text-sm text-white/50 md:flex-row md:items-center md:text-left md:gap-0`}>
    <p>© 2026 New Dawn, Same fire. All rights reserved.</p>
    <div className="flex gap-4 flex-wrap justify-center">
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms Of Service</a>
      <a href="/cookies">Cookies Policy</a>
    </div>
  </div>
</footer>

      {isRequestModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
          onClick={closeRequestModal}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className={`${fruances.className} text-2xl text-[#260406] md:text-3xl`}>Request Free hard copy</h2>
                <p className={`${sora.className} mt-2 text-sm leading-6 text-[#555555]`}>
                  Free for our guests- while supplies last. we’ll confirm delivery detail shortly.
                </p>
              </div>
              <button type="button" onClick={closeRequestModal} className="rounded-full p-2 text-[#555555] hover:bg-[#F3F4F6]" aria-label="Close request form">
                ✕
              </button>
            </div>

            <form onSubmit={handleRequestSubmit} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-[#555555] md:col-span-1">
                FULL NAME
                <input required name="fullName" className="rounded-lg border border-[#E5E7EB] px-4 py-3 outline-none focus:border-[#C0840B]" type="text" placeholder="e.g adeola bankole" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#555555] md:col-span-1">
                PHONE NUMBER
                <input required name="phone" className="rounded-lg border border-[#E5E7EB] px-4 py-3 outline-none focus:border-[#C0840B]" type="tel" placeholder="08090930909" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#555555] md:col-span-2">
                DELIVERY ADDRESS
                <textarea required name="address" rows={4} className="rounded-lg border border-[#E5E7EB] px-4 py-3 outline-none focus:border-[#C0840B]" placeholder="Street, city, state, zip code" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#555555] md:col-span-2">
                ADDITIONAL NOTE
                <textarea name="note" rows={3} className="rounded-lg border border-[#E5E7EB] px-4 py-3 outline-none focus:border-[#C0840B]" placeholder="Optional details about your request" />
              </label>
              <div className="flex flex-col gap-3 pt-2 md:col-span-2 md:flex-row md:justify-end">
                <button type="submit" className={`${fruances.className}rounded-md bg-[#C0840B] px-5 py-3 text-white`}>
                  Submit request
                </button>
                {/* <button type="button" onClick={closeRequestModal} className="rounded-md border border-[#D1D5DB] px-5 py-3 text-[#555555]">
                  Cancel
                </button> */}
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
