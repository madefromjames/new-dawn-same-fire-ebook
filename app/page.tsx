"use client";

import { useState, type FormEvent } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import { TbDownload } from "react-icons/tb";
import { Dancing_Script } from "next/font/google"
import { Fraunces } from "next/font/google"
import { Sora } from "next/font/google"
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { PiQuotesFill } from "react-icons/pi";
import { MdQrCodeScanner } from "react-icons/md";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
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
import { RxCross2 } from "react-icons/rx";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
const sora = Sora({ subsets: ["latin"], weight: ["400", "700"] });
const fruances = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600"], // include 600 for SemiBold
  style: ["normal", "italic"]
});
function useCountUp(target: number, duration: number = 1500, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}
export default function Home() {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pdfUrl = "https://new-dawn-same-fire-ebook-tau.vercel.app/new-dawn-same-fire.pdf"

  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const downloads = useCountUp(15020, 1500, hasAnimated);
  const readers = useCountUp(20020, 1500, hasAnimated);
  const reviews = useCountUp(16020, 1500, hasAnimated);
  const [expanded, setExpanded] = useState(false);
  const openRequestModal = () => setIsRequestModalOpen(true);
  const closeRequestModal = () => setIsRequestModalOpen(false);
  const handleRequestSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    closeRequestModal();
  };

  return (
    <>
      <header id="home" className={`bg-[#F9F5EE] ${fruances.className} fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-4 py-4 md:hidden`}>
        <a href="#"><span className={`${dancing.className} text-xl font-bold text-[#280506] italic`}>Kemi Olumuyiwa</span></a>

        {/* Hamburger toggle */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="rounded-md p-2 text-[#0F172A]"
          aria-label="Open menu"
        >
          <FaBars className="text-xl" />
        </button>
        {/* Dropdown menu */}
        {isMenuOpen && (
          <div className="absolute right-0 top-full z-20 mt-3 w-56 rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-lg">
            {/* Close button inside menu */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-[#555555] hover:text-[#C0840B]"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-3 text-sm text-[#555555]">
              <Link href="#about">About</Link>
              <Link href="#review">Review</Link>
              <Link href="#books">Books</Link>
            </nav>
            <a
              href="https://new-dawn-same-fire-ebook-tau.vercel.app/new-dawn-same-fire.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C0840B] flex w-full items-center justify-center rounded py-3 my-6 gap-4 text-white md:w-auto md:px-7"
            >
              <TbDownload />
              <span>Download eBook</span>
            </a>

          </div>
        )}
      </header>

      <header className={` hidden md:flex bg-[#F9F5EE] ${fruances.className} fixed top-0 right-0 left-0 z-50 flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:px-20`}>
        <a href="#"><span className={`${dancing.className} text-xl font-bold text-[#280506] italic`}>Kemi Olumuyiwa</span></a>
        <nav className="flex flex-wrap justify-center gap-4 md:flex-1 md:gap-5">
          <Link href="#about" className="text-[#555555]">About</Link>
          <Link href="#books" className="text-[#555555]">Books</Link>
          <Link href="#review" className="text-[#555555]">Review</Link>
        </nav>
        <a href="https://new-dawn-same-fire-ebook-tau.vercel.app/new-dawn-same-fire.pdf" className="bg-[#280506] flex w-full items-center justify-center gap-4 rounded px-5 py-4 text-white md:w-auto md:px-7">
          <span><TbDownload /></span><span className="text-[#FFFFFF]">Download Free Soft Copy</span>
        </a>
      </header>

      <main className="flex flex-col items-center overflow-x-hidden mt-26 md:mt-40 md:pt-0">
        {/* <div className="mt-8 flex h-[36px] w-fit max-w-[92vw] items-center justify-center gap-[2px] whitespace-nowrap rounded-[30px] border border-[#E5E7EB] bg-white px-[18px] py-[6px] md:mt-10 md:w-[232px] md:px-[25px]">
          <span className={`${dancing.className} text-green-600 italic font-dancing`}>
            Exclusive Access
          </span>
          <span className="text-[#C0840B80]"><IoIosStar /></span ><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span><span className="text-[#C0840B80]"><IoIosStar /></span>
        </div> */}
        <div className="px-4 text-center md:px-0">
          <h1 className={`${fruances.className} text-2xl leading-[44px] font-semibold text-center md:text-[72px] md:leading-[72px]`}><span className="text-[#280506]">NEW DAWN,</span> <span className="text-[#C0840B]"><i>SAME FIRE</i></span></h1>
          <p className={`${sora.className} mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#555555] md:text-base`}>
            Thank you for being part of this special celebration. As a token of appreciation, please enjoy this complimentary copy of New Dawn, Same Fire.
          </p>
        </div>

        <div className={`mt-12 flex w-full flex-col gap-3 px-4 ${fruances.className} md:w-auto md:flex-row md:px-0`}>
          <a href="https://new-dawn-same-fire-ebook-tau.vercel.app/new-dawn-same-fire.pdf" className="bg-[#C0840B] flex w-full items-center justify-center gap-4 rounded px-5 py-4 text-white md:w-auto md:px-7">
            <span><TbDownload /></span><span className="text-[#FFFFFF]">Download Free Soft Copy</span>
          </a>
          <button onClick={openRequestModal} className="bg-[#C0840B1A] flex w-full items-center justify-center cursor-pointer border border-[#C0840B4D] gap-4 rounded px-5 py-4 text-[#280506] md:w-auto md:px-7">
            <span><GiOpenBook /></span> <span>Request A Free Hard Copy</span>
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
              <h2 className={`${fruances.className} text-2xl font-normal text-[#FFEECC] md:text-[56px] md:leading-[84px]`}>{hasAnimated ? `${downloads.toLocaleString()}+` : "200+"}</h2>
              <p className={`${sora.className} text-[11px] text-[#E6E6E6] md:text-[18px] md:leading-[27px]`}>Downloads</p>
            </div>
            <div>
              <h2 className={`${fruances.className} text-2xl  font-normal text-[#FFEECC] md:text-[56px] md:leading-[84px]`}>{hasAnimated ? `${readers.toLocaleString()}+` : "100%"}</h2>
              <p className={`${sora.className} text-[11px] text-[#E6E6E6] md:text-[18px] md:leading-[27px]`}>Authentic Feedack</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1">
                <h2 className={`${fruances.className} text-2xl font-normal text-[#FFEECC] md:text-[56px] md:leading-[84px]`}>{hasAnimated ? `${reviews.toLocaleString()}+` : "4.8"}</h2>
                <span className="text-[#FFEECC] text-sm md:text-2xl"><FaStar /></span>
              </div>
              <p className={`${sora.className} text-[11px] text-[#E6E6E6] md:text-[18px] md:leading-[27px]`}>Average Rating</p>
            </div>
          </div>
        </section>

        <section id="about" className="w-full bg-white px-4 py-12 text-center md:px-[10%] md:py-[10%]">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <h2 className={`${sora.className} text-sm md:text-xl font-normal text-center md:mb-6 text-[#1B5E35]`}>ABOUT THE BOOK</h2>
            <div className="w-full px-0 md:px-[10%]">
              <h3 className={`${fruances.className} text-[18px] leading-[38px] md:mb-4 md:text-[36px] md:leading-[54px]`}>
                <i>What Is <span>New Dawn, Same Fire</span> About?</i>
              </h3>
              <p className={`${sora.className} mx-auto mb-8 max-w-2xl text-sm leading-6 text-[#555555] md:text-base`}>
                New Dawn, Same Fire is more than a memoir; it is a roadmap for anyone standing at the threshold of a new chapter.
              </p>
            </div>

            <div className={`${fruances.className} w-full md:max-w-full text-[#555555]`}>
              <ul className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 text-[#260406] pb-[15px]">
                <li className="rounded bg-[#F9F5EE] pl-4 pr-4 text-left md:pl-6 md:pr-8">
                  <div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0 my-[15px]">
                    <GiOpenBook className="text-white text-xl" />
                  </div>
                  <div className="flex flex-col md:items-start pb-[15px]">
                    <strong className="block text-2xl md:pb-[15px] md:text-3xl">136+ Pages</strong>
                    <span className={`${sora.className} text-[#555555]`}>Transformative insights and hard-earned wisdom from an inspirational woman.</span>
                  </div>
                </li>
                <li className="rounded bg-[#F9F5EE] pl-4 pr-4 text-left md:pl-6 md:pr-8">
                  <div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0 my-[15px]">
                    <GiSelfLove className="text-white text-xl" />
                  </div>
                  <div className="flex flex-col md:items-start pb-[15px]">
                    <strong className="block text-2xl md:pb-[15px] md:text-3xl">Personal Memoir</strong>
                    <span className={`${sora.className} text-[#555555]`}>An intimate journey- an account of discovering grace in the most unexpected places</span>
                  </div>
                </li>
                <li className="rounded bg-[#F9F5EE] pl-4 pr-4 text-left md:pl-6 md:pr-8">
                  <div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0 my-[15px]">
                    <BsStars className="text-white text-xl" />
                  </div>
                  <div className="flex flex-col md:items-start pb-[15px]">
                    <strong className="text-2xl md:pb-[15px] md:text-3xl">Unfiltered Moments</strong>
                    <span className={`${sora.className} text-[#555555]`}>Raw, lived and unfiltered experiences that fully mirror your own.</span>
                  </div>
                </li>
                <li className="rounded bg-[#F9F5EE] pl-4 pr-4 text-left md:pl-6 md:pr-8"><div className="bg-[#C0840B] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0 my-[15px]">
                  <FiSunset className="text-white text-xl" />
                </div>
                  <div className="flex flex-col md:items-start pb-[15px]">
                    <strong className="text-2xl md:pb-[15px] md:text-3xl">Embracing New Seasons</strong>
                    <span className={`${sora.className} text-[#555555]`}>Actionable steps on finding fresh purpose and peace while walking through life’s transitions.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#240406] mb-10 px-4 py-12 text-center md:px-[10%] md:py-[10%]">
          <div id="qr-section" className="mx-auto flex max-w-5xl flex-col items-center">
            <h2 className={`${sora.className} text-sm md:text-xl font-normal text-center md:mb-6 text-[#7CD9A0]`}>GET STARTED</h2>
            <div className="w-full px-0 text-center md:px-[10%]">
              <h3 className={`${fruances.className} text-[18px] leading-[38px] md:mb-4 md:text-[36px] text-[#E6E6E6] md:leading-[54px]`}>
                <i>Choose Your Copy</i>
              </h3>
              <p className={`${sora.className} mx-auto mb-8 max-w-2xl text-sm leading-6 text-white/70 md:text-base`}>Whether you prefer reading digitally or holding a printed copy, choose the format that works best for you.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Complimentary Copy */}
            <div className="bg-[#F9F5EE] shadow-lg rounded-lg p-6 flex flex-col h-full text-left">
              <div className="bg-[#260406] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                <TbDownload className="text-white text-xl" />
              </div>
              <h3 className={`${fruances.className} text-lg my-4 md:text-xl`}>Download Your free Digital Copy</h3>
              <p className={`${sora.className} text-base mb-4 text-[#555555] md:text-lg`}>As a guest of this celebration, you have exclusive access to the digital edition.</p>
              {/* <div className=" hidden md:flex mx-auto aspect-[283/270] w-full max-w-[283px] items-center justify-center rounded-[8px] border-[3px] border-[#240406] bg-white px-[18px] py-[14px] md:px-[28px]">
                <QRCode
                  value={pdfUrl}
                  size={220}
                  fgColor="#240406"
                  bgColor="#FFFFFF"
                />
              </div> */}
              <div>
                <ul className={`${sora.className} text-gray-600 mb-6`}>
                  <li className="flex items-center gap-x-2 mb-2"><span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Instant Access</span></li>
                  <li className="flex items-center gap-x-2 mb-2"><span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>PDF Format</span></li>
                  <li className="flex items-center gap-x-2 mb-2"><span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Mobile Friendly</span></li>
                  <li className="flex items-center gap-x-2 mb-2"> <span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Read Anywhere</span></li>
                </ul>
                <a href="https://new-dawn-same-fire-ebook-tau.vercel.app/new-dawn-same-fire.pdf" className={`${fruances.className} bg-[#240406] flex w-full items-center justify-center gap-4 rounded px-5 py-4 text-white md:w-auto md:px-7`}>
                  <span><TbDownload /></span><span className="text-[#FFFFFF]">Download Free Soft Copy</span>
                </a>
              </div>

            </div>

            {/* Signed Hard Copy */}
            <div className="bg-[#F9F5EE] shadow-lg rounded-lg p-6 flex flex-col h-full text-left">
              <div className="bg-[#260406] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                <GiOpenBook className="text-white text-xl" />
              </div>
              <h3 className={`${fruances.className} text-lg my-4 md:text-xl`}>Request A Free Hard Copy</h3>
              <p className={`${sora.className} mb-4 text-base leading-6 text-[#555555] md:text-lg`}>You can request for a free hard copy, and we will contact you regarding delivery.</p>
              <ul className={`${sora.className} text-gray-600 mb-6`}>
                <li className="flex items-center gap-x-2 mb-2"><span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Premium Print</span></li>
                <li className="flex items-center gap-x-2 mb-2"><span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Collectible Edition</span></li>
                <li className="flex items-center gap-x-2 mb-2"> <span className=" text-[#1B5E35]"><IoIosCheckmarkCircle /></span><span>Gift Option</span></li>
              </ul>
              <button onClick={openRequestModal} className={`${fruances.className} mt-auto flex w-full items-center justify-center gap-4 cursor-pointer rounded bg-[#C0840B1A] border border-[#C0840B4D] px-5 py-4 text-[#280506] md:h-[64px] md:w-auto md:px-7`}>
                <span className="text-xl"><GiOpenBook /></span>
                <span>Request A Free Hard Copy</span>
              </button>
            </div>
          </div>

        </section>

        <section id="books" className="w-full mb-10 bg-white px-4 py-12 text-center md:px-[10%] md:py-[10%]">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            {/* Author Image */}

            {/* Message */}
            <h2 className={`${sora.className} text-sm md:text-xl font-normal text-center md:mb-6 text-[#1B5E35]`}>OTHER BOOKS</h2>
            <div className="w-full px-0 md:px-[10%]">
              <h3 className={`${fruances.className} italic text-[18px] text-[#260406] leading-[38px] md:mb-4 md:text-[36px] md:leading-[54px]`}>More from Kemi Olumuyiwa</h3>
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
                src="/kemi_married_to_my_role_model.png"
                alt="New Dawn, Same Fire"
                className="mt-8 h-auto w-full max-w-[300px]"
                width={300}
                height={400}
              />
              <div className="px-0 text-center md:px-[10%]">
                <h3 className={`${fruances.className} text-xl leading-[38px] font-bold md:text-3xl md:leading-[54px]`}>Married to My Role Model </h3>
                <p className={` ${sora.className} text-sm leading-6 text-[#555555] text-justify md:text-base`}>
                  Married to My Role Model is a faith-filled and inspiring book that encourages readers to rise above life's challenges through unwavering trust in God. With a foreword by Pastor Mrs. Folu Adebayo of RCCG, the book celebrates God's faithfulness, the beauty of a strong marriage, spiritual partnership, and the importance of family. Through personal experiences and practical life lessons, Kemi Olumuyiwa inspires readers to build resilient relationships and live purposefully with God at the center.
                </p>
              </div>
            </div>
            <div className="bg-[#F9F5EE] shadow-lg rounded-lg p-6 items-center flex flex-col h-full">
              <Image
                src="/kemi_lifted.png"
                alt="New Dawn, Same Fire"
                className="mt-8 h-auto w-full max-w-[300px]"
                width={300}
                height={400}
              />
              <div className="justify-center px-0 text-center md:px-[10%]">
                <h3 className={`${fruances.className} text-xl leading-[38px] font-bold md:text-3xl md:leading-[54px]`}>Lifted</h3>
                <p className={` ${sora.className} text-sm leading-6 text-[#555555] text-justify md:text-base`}>
                  Lifted is a heartfelt celebration of Kemi Olumuyiwa's life, love, and journey of grace up to her 50th birthday. In this inspiring book, she reflects on the challenges she has overcome, the victories she has experienced, and the lessons God has taught her along the way. Her story encourages readers to embrace faith, persevere through life's difficulties, and recognize that with God by their side, no obstacle is insurmountable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="review" className="w-full mb-10 bg-[#F9F5EE] px-4 py-12 text-center md:px-[10%] md:py-[10%]">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            {/* Author Image */}

            {/* Message */}
            <h2 className={`${sora.className} text-sm md:text-xl font-normal text-center md:mb-6 text-[#1B5E35]`}>REVIEWS</h2>
            <div className="w-full px-0 md:px-[10%]">
              <h3 className={`${fruances.className} italic text-[18px] text-[#260406] leading-[38px] md:mb-4 md:text-[36px] md:leading-[54px]`}>What Readers Are Saying</h3>
              <p className={` ${sora.className} mx-auto max-w-xs text-sm leading-6 text-[#555555] md:text-base`}>
                Real feedback from readers whose lives have beeninspired by New Dawn, Same Fire.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] md:items-stretch gap-4 pt-10">
            <div className="md:order-3 items-stretch flex justify-center h-full max-w-full self-stretch w-full">
              <Image
                src="/kemi_new_dawn.png"
                alt="New Dawn, Same Fire"
                className="h-[379px] max-w-full rounded-xl object-cover object-center"
                width={495}
                height={379}
              />
            </div>
            <div id="story" className="bg-[#FFFFFF] rounded-2xl p-3 flex flex-col justify-between items-center md:order-1" style={{ padding: "18px 13px 25px 20px", gap: "10px" }}>
              <div className="bg-[#FFFFFF] rounded-xl flex items-center justify-between w-full py-3">
                <div className="flex gap-1 items-start">
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#555555CC]"><FaRegStar /></span>
                </div>
                < PiQuotesFill className="text-[#C0840B26] text-3xl"/>
              </div>
                <p className={` ${sora.className} text-sm leading-relaxed text-[#555555CC] text-start md:text-base`}>
                  In my opinion, this is a transformative exercise we should all engage in from time to time. This book consistently reflects the outcomes of a life lived with purpose. It serves as a powerful reminder of the benefits that come from giving generously to both people and God. As the narrative unfolds, it emphasizes that retirement should not be viewed as an end but rather as a new beginning. A great book that I would strongly recommend.
                </p>
              <div className="flex items-center w-full gap-2 py-4">
                <div className="w-13 h-13 rounded-full bg-[#FF6A6A] flex items-center justify-center flex-shrink-0">
                  <span className={`${sora.className} text-white text-xl font-semibold`}>FB</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className={`${sora.className} text-[#280506CC] text-lg md:text-xl font-semibold`}>Felix Babalola</span>
                  <span className={`${sora.className} text-[#555555CC] text-sm`}>Verified reader</span>
                </div>
              </div>
            </div>
            <div id="story" className="bg-[#FFFFFF] rounded-2xl p-3 flex flex-col justify-between items-center md:order-3" style={{ padding: "18px 13px 25px 20px", gap: "10px" }}>
              <div className="bg-[#FFFFFF] rounded-xl flex items-center justify-between w-full py-3">
                <div className="flex gap-1 items-start">
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#555555CC]"><FaRegStar /></span>
                </div>
                < PiQuotesFill className="text-[#C0840B26] text-3xl"/>
              </div>
                <p className={` ${sora.className} text-sm leading-relaxed text-[#555555CC] text-start md:text-base`}>
                In my opinion, this is a transformative exercise we should all engage in from time to time. This book consistently reflects the outcomes of a life lived with purpose. It serves as a powerful reminder of the benefits that come from giving generously to both people and God. As the narrative unfolds, it emphasizes that retirement should not be viewed as an end but rather as a new beginning. A great book that I would strongly recommend.
              </p>
              <div className="flex items-center w-full gap-2 py-4">
                <div className="w-13 h-13 rounded-full bg-[#20C760] flex items-center justify-center flex-shrink-0">
                  <span className={`${sora.className} text-white text-xl font-semibold`}>SP</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className={`${sora.className} text-[#280506CC] text-lg md:text-xl font-semibold`}>Sarah Pollen</span>
                  <span className={`${sora.className} text-[#555555CC] text-sm`}>Verified reader</span>
                </div>
              </div>
            </div>
            <div id="story" className="bg-[#FFFFFF] rounded-2xl p-3 flex flex-col justify-between items-center md:order-3" style={{ padding: "18px 13px 25px 20px", gap: "10px" }}>
              <div className="bg-[#FFFFFF] rounded-xl flex items-center justify-between w-full py-3">
                <div className="flex gap-1 items-start">
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#EFB94C]"><FaStar /></span>
                </div>
                < PiQuotesFill className="text-[#C0840B26] text-3xl"/>
              </div>
                <p className={` ${sora.className} text-sm leading-relaxed text-[#555555CC] text-start md:text-base`}>
                  This book serves as a roadmap for anyone who believes their best chapters are still ahead of them and that a true legacy is built through consistent, family-centred actions. Welcome to Kemi's world of faith, family, and industry.
                </p>
              <div className="flex items-center w-full gap-2 py-4">
                <div className="w-13 h-13 rounded-full bg-[#C0840B] flex items-center justify-center flex-shrink-0">
                  <span className={`${sora.className} text-white text-xl font-semibold`}>CO</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className={`${sora.className} text-[#280506CC] text-lg md:text-xl font-semibold`}>Cherry Oladele</span>
                  <span className={`${sora.className} text-[#555555CC] text-sm`}>Verified reader</span>
                </div>
              </div>
            </div>
            <div id="story" className="bg-[#FFFFFF] rounded-2xl p-3 flex flex-col justify-between md:col-span-2 items-center md:w-full md:order-3" style={{ padding: "18px 13px 25px 20px", gap: "10px" }}>
              <div className="bg-[#FFFFFF] rounded-xl flex items-center justify-between w-full py-3">
                <div className="flex gap-1 items-start">
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#EFB94C]"><FaStar /></span>
                  <span className="text-[#555555CC]"><FaRegStar /></span>
                </div>
                < PiQuotesFill className="text-[#C0840B26] text-3xl"/>
              </div>
                <p className={` ${sora.className} text-sm leading-relaxed text-[#555555CC] text-start md:text-base`}>
                  New Dawn, Same Fire: A Journey of Unfiltered Grace takes you through the world of corporate boardrooms and the quiet, heavy moments of a home held together by faith and resolve. On its pages you feel the weight of every pillar that stood firm and the courage behind every support that changed it all. At the very heart of this journey is a celebration of the woman who started it all: the author's mother. This book beautifully honours the woman who... didn't just raise a daughter, but mentored a visionary, passing down the sharp business instincts and the moral gauge that define her today. Look forward to the special section on experiential boardroom lessons for the younger generation of career women.
                </p>
              <div className="flex items-center w-full gap-2 py-4">
                <div className="w-13 h-13 rounded-full bg-[#418AF2] flex items-center justify-center flex-shrink-0">
                  <span className={`${sora.className} text-white text-xl font-semibold`}>SS</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className={`${sora.className} text-[#280506CC] text-lg md:text-xl font-semibold`}>Sola Sanni</span>
                  <span className={`${sora.className} text-[#555555CC] text-sm`}>Verified reader</span>
                </div>
              </div>
            </div>
            
          </div>

          <div className="w-full px-0 md:px-[10%] mt-[10%]">
            <h3 className={`${fruances.className} italic text-[18px] text-[#260406] leading-[38px] md:mb-4 md:text-[36px] md:leading-[54px]`}>Inspired by what readers are saying?</h3>
            <p className={` ${sora.className} mx-auto max-w-xs text-sm leading-6 text-[#555555] md:text-base`}>
              Download your free copy and discover why readers are recommending <span className="text-[#C0840B] text-semibold">New Dawn, Same Fire.</span>
            </p>
          </div>
        </section>

        <section className="flex flex-col my-10 px-4 md:flex-row items-center justify-between md:px-25 gap-4 p-10 bg-[#F9F5EE] md:px-[123px] md:py-[32px]">
          <div id="story" className="bg-[#FFFFFF] shadow-lg rounded-2xl p-3 flex flex-col justify-between items-center flex flex-col md:h-[712px] w-full md:w-1/2 text-center md:text-left" style={{ padding: "28px 22px" }}>
            <div className="bg-[#FFFFFF] rounded-xl flex flex-col text-start justify-between w-full py-3">
              <h2 className={`${sora.className} text-sm md:text-xl font-normal text-[#1B5E35] mb-4`}>ABOUT AUTHOR</h2>
              <h2 className={`${fruances.className} italic text-[18px] text-[#260406] leading-[38px] md:text-[36px] md:leading-[54px`}>Meet Kemi Olumuyiwa</h2>
            </div>
            <p className={` ${sora.className} text-sm leading-relaxed text-[#555555CC] text-start md:text-base`}>
              Kemi Olumuyiwa is an inspiring author, philanthropist, and speaker, passionately advocating for grace, resilience, and personal transformation. Guided by her strong values and a deep passion for change, she has devoted her life and career to helping others navigate transitions, rediscover their purpose, and ignite their inner fire.
            </p>
            <p className={` ${sora.className} text-sm leading-relaxed text-[#555555CC] text-start md:text-base mt-5 md:mt-0`}>
              Her latest work, <b>New Dawn, Same Fire,</b> stands as a powerful testament that—regardless of the season—grace always paves the way. Beyond her professional pursuits, Kemi is a dedicated philanthropist serving on the board of the Moto Foundation, where she tirelessly creates lasting, positive impact for children and families across Nigeria. Through her remarkable journey, she continues to inspire others to embrace the beauty of starting anew.
            </p>
            {/* Icons Section */}
            <div className={`${sora.className} grid grid-cols-5 items-start text-center justify-center gap-4 mt-4 md:mt-0 text-sm font-medium text-gray-800 md:justify-between`}>
              <span className="flex flex-col items-center gap-2">
                <div className="bg-[#C0840B1A] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <GiOpenBook className="text-[#C0840B] text-xl" />
                </div>
                <p className="text-[#555555] text-xs md:text-sm">Author</p>
              </span>
              <span className="flex flex-col items-center gap-2">
                <div className="bg-[#C0840B1A] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <MdKeyboardVoice className="text-[#C0840B] text-xl" />
                </div>
                <p className="text-[#555555] text-xs md:text-sm">Speaker</p>
              </span>
              <span className="flex flex-col items-center gap-2">
                <div className="bg-[#C0840B1A] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <MdGroups2 className="text-[#C0840B] text-xl" />
                </div>
                <p className="text-[#555555] text-xs md:text-sm">Mentor</p>
              </span>
              <span className="flex flex-col items-center gap-2">
                <div className="bg-[#C0840B1A] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <GrAggregate className="text-[#C0840B] text-xl" />
                </div>
                <p className="text-[#555555] text-xs md:text-sm">Leader</p>
              </span>
              <span className="flex flex-col items-center gap-2">
                <div className="bg-[#C0840B1A] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <FaHandHoldingWater className="text-[#C0840B] text-xl" />
                </div>
                <p className="text-[#555555] text-xs md:text-sm">Philantropist</p>
              </span>
            </div>
          </div>

          {/* Author Image */}
          <div className="w-full h-[500px] md:h-[712px] md:w-1/2 overflow-hidden rounded-xl">
            <Image
              src="/kemib.jpg"
              alt="Kemi Olumuyiwa"
              className="rounded-xl object-cover object-top w-full h-full scale-110"
              width={503} height={712}
            />
          </div>

          {/* Text and Icons - after image on mobile, left side on desktop */}
          {/* <div className="order-2 md:order-1 flex flex-col w-full md:w-1/2 text-center md:text-left"> */}
            {/* Headings - desktop only */}
            {/* <h2 className={`${sora.className} hidden md:block text-xl font-normal text-[#1B5E35] mb-4`}>ABOUT AUTHOR</h2>
            <h2 className={`${fruances.className} hidden md:block italic text-3xl font-normal text-[#260406] mb-4`}>Meet Kemi Olumuyiwa</h2>

            <p className={`${sora.className} text-sm w-full md:text-base leading-relaxed mb-4 text-[#555555] `}>
              Author, mentor, leader, speaker, and advocate for grace, resilience, and personal transformation.
              Through her journey, she has inspired many to embrace change, rediscover purpose, and keep the fire within burning.
            </p>
            <p className={`${sora.className} text-sm md:text-base mb-6 text-[#555555]`}>
              New Dawn, Same Fire is her testimony that no matter the season, grace always makes a way..
            </p>            
          </div> */}

        </section>

      </main>
      <footer className="bg-[#240406] text-white p-8 md:p-15">
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
            <Link href="#home" className="text-[#E6E6E6]/60">Home</Link>
            <Link href="#about" className="text-[#E6E6E6]/60">About</Link>
            <Link href="#review" className="text-[#E6E6E6]/60">Review</Link>
            <Link href="#books" className="text-[#E6E6E6]/60">Books</Link>
          </nav>

          {/* Right Section */}
          {/* <div className="flex flex-col items-center">
            <p className={`${fruances.className} text-sm mb-3 text-[#F9F5EE]`}>Scan the QR to get your free copy here.</p>
            <div className="mx-auto flex aspect-[283/270] w-full max-w-[170px] items-center justify-center rounded-[8px] border-[3px] border-[#240406] bg-white px-[18px] py-[14px] md:px-[28px]">
              <QRCode
                value={pdfUrl}
                size={220}
                fgColor="#240406"
                bgColor="#FFFFFF"
              />
            </div>
          </div> */}
        </div>

        {/* Bottom Legal Section */}
        <div className={`${sora.className} w-full mt-8 flex flex-col items-center justify-between gap-4 md:border-t border-[#D9D9D9]/10 pt-4 text-center text-sm text-white/50 md:flex-row md:items-center md:text-left md:gap-0`}>
          <p>© 2026 New Dawn, Same fire. All rights reserved.</p>
          <div className="flex gap-4 flex-wrap justify-center border-t border-[#D9D9D9]/10 pt-4 md:border-t-0 md:pt-0">
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
                <h2 className={`${fruances.className} text-2xl text-[#260406] md:text-3xl`}>Request Free Hard Copy</h2>
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
                <input required name="fullName" className="rounded-lg border border-[#E5E7EB] px-4 py-3 outline-none focus:border-[#C0840B]" type="text" placeholder="e.g Adeola Bankole" />
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
