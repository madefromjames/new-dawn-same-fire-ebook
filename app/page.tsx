"use client";

import { useState, type FormEvent } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CanvasText } from "@/components/ui/canvas-text";
import dynamic from "next/dynamic";
import { TbDownload } from "react-icons/tb";
import { Dancing_Script } from "next/font/google"
import { Fraunces } from "next/font/google"
import { Sora } from "next/font/google"
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { PiQuotesFill } from "react-icons/pi";
import { MdQrCodeScanner } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";
import { GiSelfLove } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { FiSunset } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { RiBankLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
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

function useInView(threshold: number = 0.25, rootMargin: string = "0px 0px -10% 0px") {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
export default function Home() {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isLegacyModalOpen, setIsLegacyModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const EncryptedText = dynamic(
    () => import("@/components/ui/encrypted-text").then(mod => mod.EncryptedText),
    { ssr: false }
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const pdfUrl = "https://new-dawn-same-fire-ebook-tau.vercel.app/new-dawn-same-fire.pdf"

  const { ref: heroRef, isVisible: isHeroVisible } = useInView(0.2);
  const { ref: statsRef, isVisible: hasAnimated } = useInView(0.35);
  const { ref: foundationRef, isVisible: isFoundationVisible } = useInView(0.2);

  const downloads = useCountUp(200, 900, hasAnimated);
  const readers = useCountUp(100, 1100, hasAnimated);
  const reviews = useCountUp(48, 1100, hasAnimated);
  const openRequestModal = () => setIsRequestModalOpen(true);
  const closeRequestModal = () => setIsRequestModalOpen(false);
  const openLegacyModal = () => setIsLegacyModalOpen(true);
  const closeLegacyModal = () => setIsLegacyModalOpen(false);
  const handleRequestSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    closeRequestModal();
  };

  return (
    <>
      <header id="home" className={`bg-white ${fruances.className} fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-4 py-4 md:hidden`}>
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
            <nav className="flex flex-col gap-3 text-sm text-[#555555] hover:text-[#C0840B]">
              <Link href="#about">About</Link>
              <Link href="#review">Review</Link>
              <Link href="#books">Books</Link>
              <Link href="#foundation">Foundation</Link>
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

      <header className={` hidden md:flex bg-white ${fruances.className} fixed top-0 right-0 left-0 z-50 flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:px-20`}>
        <a href="#"><span className={`${dancing.className} text-xl font-bold text-[#280506] italic`}>Kemi Olumuyiwa</span></a>
        <nav className="flex flex-wrap justify-center gap-4 md:flex-1 md:gap-5">
          <Link href="#about" className="text-[#555555] hover:text-[#C0840B]">About</Link>
          <Link href="#books" className="text-[#555555] hover:text-[#C0840B]">Books</Link>
          <Link href="#review" className="text-[#555555] hover:text-[#C0840B]">Review</Link>
          <Link href="#foundation" className="text-[#555555] hover:text-[#C0840B]">Foundation</Link>
        </nav>
        <a href="https://new-dawn-same-fire-ebook-tau.vercel.app/new-dawn-same-fire.pdf" className="bg-[#280506] hover:bg-[#280509]/80 flex w-full items-center justify-center gap-4 rounded px-5 py-4 text-white md:w-auto md:px-7">
          <span><TbDownload /></span><span className="text-[#FFFFFF]">Download Free Soft Copy</span>
        </a>
      </header>

      <main className="flex flex-col items-center overflow-x-hidden mt-26 md:mt-40 md:pt-0">
        <div ref={heroRef} className="px-4 text-center md:px-0">
          <h1 className={`${fruances.className} text-2xl leading-[44px] font-semibold text-center transition-all duration-700 ease-out md:text-[72px] md:leading-[72px] ${isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}><span className="text-[#280506]">NEW DAWN,</span> <span className="text-[#C0840B]"><i>SAME FIRE</i></span></h1>
          <p className={`${sora.className} mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#555555] transition-all delay-150 duration-700 ease-out md:text-base ${isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            The words you need today might be waiting on the very next page
            <EncryptedText text="—claim your free copy and start reading today." />
          </p>
        </div>

        <div className={`mt-12 flex w-full flex-col gap-3 px-4 ${fruances.className} transition-all delay-300 duration-700 ease-out md:w-auto md:flex-row md:px-0 ${isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <a href="https://new-dawn-same-fire-ebook-tau.vercel.app/new-dawn-same-fire.pdf" className="bg-[#C0840B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C0840B]/70 flex w-full items-center justify-center gap-4 rounded px-5 py-4 text-white md:w-auto md:px-7">
            <span><TbDownload /></span><span className="text-[#FFFFFF]">Download Free Soft Copy</span>
          </a>
          <button onClick={openRequestModal} className="bg-[#C0840B1A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C0840B1A]/30 flex w-full items-center justify-center cursor-pointer border border-[#C0840B4D] gap-4 rounded px-5 py-4 text-[#280506] md:w-auto md:px-7">
            <span><GiOpenBook /></span> <span>Request A Free Hard Copy</span>
          </button>
        </div>
        <div className={`relative mt-8 h-[52vh] w-full overflow-hidden transition-all duration-700 ease-out md:h-[205vh] ${isHeroVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-[0.98]"}`}>
          <Image
            src="/kemiolumuyiwa.png"
            alt="New Dawn, Same Fire"
            className="object-cover object-top"
            fill
            priority
          />
        </div>
        <section ref={statsRef} className={`w-full bg-[#260406] py-4 px-4 text-center transition-all duration-700 ease-out md:py-10 md:px-[25%] ${hasAnimated ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-3">
            <div>
              <h2 className={`${fruances.className} text-2xl font-normal text-[#FFEECC] transition-all duration-500 md:text-[56px] md:leading-[84px] ${hasAnimated ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>{hasAnimated ? `${downloads.toLocaleString()}+` : "0+"}</h2>
              <p className={`${sora.className} text-[11px] text-[#E6E6E6] md:text-[18px] md:leading-[27px]`}>Downloads</p>
            </div>
            <div>
              <h2 className={`${fruances.className} text-2xl  font-normal text-[#FFEECC] transition-all delay-100 duration-500 md:text-[56px] md:leading-[84px] ${hasAnimated ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>{hasAnimated ? `${readers.toLocaleString()}%` : "0%"}</h2>
              <p className={`${sora.className} text-[11px] text-[#E6E6E6] md:text-[18px] md:leading-[27px]`}>Authentic Feedback</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1">
                <h2 className={`${fruances.className} text-2xl font-normal text-[#FFEECC] transition-all delay-200 duration-500 md:text-[56px] md:leading-[84px] ${hasAnimated ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>{hasAnimated ? `${(reviews / 10).toFixed(1)}` : "4.8"}</h2>
                <span className="text-[#FFEECC] text-sm md:text-2xl"><FaStar /></span>
              </div>
              <p className={`${sora.className} text-[11px] text-[#E6E6E6] md:text-[18px] md:leading-[27px]`}>Average Rating</p>
            </div>
          </div>
        </section>

        <section id="about" className="w-full bg-white px-4 py-12 text-center md:px-[10%] md:py-[10%]">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <h2 className={`${sora.className} text-sm md:text-xl font-normal text-center md:mb-3 text-[#1B5E35]`}>ABOUT THE BOOK</h2>
            <div className="w-full px-0 md:px-[10%]">
              <h3 className={`${fruances.className} text-[18px] leading-[38px] md:mb-4 md:text-[36px] md:leading-[54px]`}>
                <i>What Is <span>New Dawn, Same Fire</span> About?</i>
              </h3>
              <p className={`${sora.className} mx-auto mb-8 max-w-sm text-sm leading-6 text-[#555555] md:text-base`}>
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
            <h2 className={`${sora.className} text-sm md:text-xl font-normal text-center md:mb-3 text-[#7CD9A0]`}>GET STARTED</h2>
            <div className="w-full px-0 text-center md:px-[10%]">
              <h3 className={`${fruances.className} text-[18px] leading-[38px] md:mb-4 md:text-[36px] text-[#E6E6E6] md:leading-[54px]`}>
                <i>Choose Your Copy</i>
              </h3>
              <p className={`${sora.className} mx-auto mb-8 max-w-2xl text-sm leading-6 text-white/70 md:text-base`}>Whether you prefer reading digitally or holding a printed copy, choose the format that works best for you.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Complimentary Copy */}
            <div className="bg-[#F9F5EE] rounded-lg p-6 flex flex-col h-full text-left">
              <div className="bg-[#260406] rounded-2xl w-10 h-10 flex items-center justify-center flex-shrink-0">
                <TbDownload className="text-white text-xl" />
              </div>
              <h3 className={`${fruances.className} text-lg my-4 md:text-xl`}>Download Your free Digital Copy</h3>
              <p className={`${sora.className} text-base mb-4 text-[#555555] md:text-lg`}>This book is our gift to you — a story of grace, resilience, and new beginnings, yours to keep.</p>
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
                <a href="https://new-dawn-same-fire-ebook-tau.vercel.app/new-dawn-same-fire.pdf" className={`${fruances.className} bg-[#240406] hover:bg-[#240406]/70 flex w-full items-center justify-center gap-4 rounded px-5 py-4 text-white md:w-auto md:px-7`}>
                  <span><TbDownload /></span><span className="text-[#FFFFFF]">Download Free Soft Copy</span>
                </a>
              </div>

            </div>

            {/* Signed Hard Copy */}
            <div className="bg-[#F9F5EE] rounded-lg p-6 flex flex-col h-full text-left">
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
              <button onClick={openRequestModal} className={`${fruances.className} mt-auto flex w-full items-center justify-center gap-4 cursor-pointer rounded bg-[#C0840B1A] hover:bg-[#C0840B1A]/30 border border-[#C0840B4D] px-5 py-4 text-[#280506] md:w-auto md:px-7`}>
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
            <h2 className={`${sora.className} text-sm md:text-xl font-normal text-center md:mb-3 text-[#1B5E35]`}>OTHER BOOKS</h2>
            <div className="w-full px-0 md:px-[10%]">
              <h3 className={`${fruances.className} italic text-[18px] text-[#260406] leading-[38px] md:mb-4 md:text-[36px] md:leading-[54px]`}>More from Kemi Olumuyiwa</h3>
              <p className={` ${sora.className} mx-auto max-w-sm text-sm leading-6 text-[#555555] md:text-base`}>
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
            <div className="bg-[#F9F5EE] rounded-lg p-6 items-center flex flex-col h-full">
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
            <div className="bg-[#F9F5EE] rounded-lg p-6 items-center flex flex-col h-full">
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

        <section id="review" className="w-full mb-10 bg-[#F9F5EE] px-4 py-12 text-center md:px-[10%] ">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            {/* Author Image */}

            {/* Message */}
            <h2 className={`${sora.className} text-sm md:text-xl font-normal md:mb-3 text-center text-[#1B5E35]`}>REVIEWS</h2>
            <div className="w-full px-0 md:px-[10%]">
              <h3 className={`${fruances.className} italic text-[18px] text-[#260406] leading-[38px] md:mb-4 md:text-[36px] md:leading-[54px]`}>What Readers Are Saying</h3>
              <p className={` ${sora.className} mx-auto max-w-xs text-sm leading-6 text-[#555555] md:text-base`}>
                Real feedback from readers whose lives have been inspired by New Dawn, Same Fire.
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
                < PiQuotesFill className="text-[#C0840B26] text-3xl" />
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
                < PiQuotesFill className="text-[#C0840B26] text-3xl" />
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
                < PiQuotesFill className="text-[#C0840B26] text-3xl" />
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
                < PiQuotesFill className="text-[#C0840B26] text-3xl" />
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
            <p className={` ${sora.className} mx-auto max-w-2xs md:max-w-xs md:mb-10 text-sm leading-6 text-[#555555] md:text-base`}>
              Download your free copy and discover why readers are recommending <span className="text-[#C0840B] text-semibold">New Dawn, Same Fire.</span>
            </p>
          </div>
          <div className="flex justify-center text-center mt-4">
            <a href="https://new-dawn-same-fire-ebook-tau.vercel.app/new-dawn-same-fire.pdf" className={`${fruances.className} bg-[#240406] hover:bg-[#240406]/70 flex items-center mx-auto gap-4 rounded px-5 py-4 text-white md:px-7`}>
              <span><TbDownload /></span><span className="text-[#FFFFFF]">Download Free Soft Copy</span>
            </a>
          </div>
        </section>

        <section className="flex flex-col my-10 px-4 md:flex-row items-center justify-between md:px-25 gap-4 p-10 bg-[#F9F5EE] md:px-[123px] md:py-[32px]">
          <div id="story" className="bg-[#FFFFFF] rounded-2xl p-3 flex flex-col justify-between items-center flex flex-col md:h-[712px] w-full md:w-1/2 text-center md:text-left" style={{ padding: "28px 22px" }}>
            <div className="bg-[#FFFFFF] rounded-xl flex flex-col text-start justify-between w-full py-3">
              <h2 className={`${sora.className} text-sm md:text-xl font-normal text-[#1B5E35] mb-4`}>ABOUT AUTHOR</h2>
              <h2 className={`${fruances.className} italic text-[18px] text-[#260406] leading-[38px] md:text-[36px] md:leading-[54px`}>Meet Kemi Olumuyiwa</h2>
            </div>
            <p className={` ${sora.className} text-sm leading-relaxed text-[#555555CC] text-justify md:text-base`}>
              Kemi Olumuyiwa is an inspiring author, philanthropist, and speaker, passionately advocating for grace, resilience, and personal transformation. Guided by her strong values and a deep passion for change, she has devoted her life and career to helping others navigate transitions, rediscover their purpose, and ignite their inner fire.
            </p>
            <p className={` ${sora.className} text-sm leading-relaxed text-[#555555CC] text-justify md:text-base mt-5 md:mt-0`}>
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

        </section>

        <section id="legacy" className="w-full mb-10 bg-white px-4 py-12 text-center md:pt-[10%]">
          <div className="mx-auto flex max-w-5xl flex-col items-center">

            {/* Message */}
            <h2 className={`${sora.className} text-sm md:text-xl font-normal text-center md:mb-3 text-[#1B5E35]`}>LEGACY OF IMPACT</h2>
            <div className="w-full px-0 md:px-[10%]">
              <h3 className={`${fruances.className} italic text-[18px] text-[#260406] leading-[38px] md:mb-4 md:text-[36px] md:leading-[54px]`}>Vintage Fabric: A Life Of Sacrifice</h3>
            </div>
          </div>

          <div id="legacy" className="mx-auto w-full max-w-5xl rounded-2xl gap-4 bg-[#FFFFFF] p-3">
            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
              <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                <Image
                  src="/mutajero_gbemi.jpg"
                  alt="Mutajero Gbemi"
                  className="h-full w-full object-cover object-center"
                  width={667}
                  height={760}
                />
              </div>
              <div className="flex flex-col gap-4 rounded-xl bg-[#FFFFFF] text-start">
                <div>
                  <h4 className={`${sora.className}  text-[#260406] font-semibold`}>Florence Mutajero Gbeminiyi (Nee OshO)</h4>
                  <p className={`${sora.className} mt-3 text-sm leading-relaxed text-justify text-[#555555] md:text-base`}>
                    Imagine for a second, all humans were created as attires; different fabrics, different textures, different colours. What kind of outfit would Maama be? One thing is sure, she’ll be the cynosure of all eyes, a timeless piece of clothing, detailed in cut and thorough in finishing.
                  </p><br />
                  <p className={`${sora.className} mt-3 text-sm leading-relaxed text-justify text-[#555555] md:text-base`}>
                    In March 1930, the Master Designer and Tailor of Destiny- God Almighty, created one of his best pieces when the world welcomed the arrival of a beautiful damsel in Ogere town, Remo, Ogun State, christened Mutajero Florence Gbeminyi Osho. Mama journeyed into this world through Sanusi and Orebowale Osho amongst four other siblings. At the tender age of 12, she left home to live with her aunt in Lagos who schooled her in trade and thus began a lifelong illustrious career in business. Her early sales acumen was built on merchandise in rice milling.
                  </p>
                </div>
                <button
                  onClick={openLegacyModal}
                  className={`${sora.className} flex w-fit items-center cursor-pointer gap-2 text-sm font-medium text-[#C0840B] hover:underline hover:font-semibold`}
                >
                  Read Full Story
                </button>
              </div>
            </div>
          </div>

        </section>

        <section id="foundation" className="w-full mb-10 bg-[#F9F5EE] px-4 py-12 md:px-[10%] md:pb-[10%]">
          <div className="flex max-w-5xl flex-col items-start">
            <h2 className={`${sora.className} text-sm md:text-xl font-normal text-[#1B5E35]`}>MOTO FOUNDATION</h2>
            <div className="w-full px-0 items-start">
              <h3 className={`${fruances.className} italic text-[18px] text-[#260406] leading-[38px] md:mb-4 md:text-[36px] md:leading-[54px]`}>Making a difference where it matters most</h3>
              <p className={` ${sora.className} max-w-xl text-sm leading-6 text-[#555555] md:text-base`}>
                Your generosity will directly support the Foundation’s important work and make a meaningful difference where it is needed most.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-10 md:grid-cols-[1fr_1.5fr] md:items-stretch">

            <div id="story" className="bg-[#FFFFFF] rounded-2xl flex h-full flex-col justify-between items-center min-h-[286px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ padding: "24px 23px 12.5px 24px", gap: "" }}>
              <div>
                <h4 className={`${sora.className} text-[#260406] text-sm font-semibold`}>Ways to support the MOTO Foundation</h4>
                <p className={`${sora.className} mt-3 text-xs leading-relaxed text-justify text-[#555555]`}>
                  Contributions to the MOTO Foundation can be made using the account details provided below.
                </p>
              </div>
              <div className="bg-[#FFFFFF] rounded-xl flex items-center gap-2 items-start w-full py-3">
                <div className="w-12 h-12 rounded-lg bg-[#C0840B1A] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#D5AD5D] text-2xl border-[#C0840B1A]"><RiContactsLine /></span>
                </div>
                <div className="flex flex-col items-start">
                  <span className={`${sora.className} text-[#555555CC] text-sm`}>Account Name</span>
                  <span className={`${sora.className} text-[#0F172A] text-sm md:text-lg`}>Mutajero Florence Oyekan (MOTO)</span>
                </div>
              </div>
              <div className="bg-[#FFFFFF] rounded-xl flex items-center gap-2 items-start w-full py-3">
                <div className="w-12 h-12 rounded-lg bg-[#C0840B1A] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#D5AD5D] text-2xl"><RiBankLine /></span>
                </div>
                <div className="flex flex-col items-start">
                  <span className={`${sora.className} text-[#555555CC] text-sm`}>Bank Name</span>
                  <span className={`${sora.className} text-[#0F172A] text-lg`}>Union Bank</span>
                </div>
              </div>
              <div className="bg-[#FFFFFF] rounded-xl flex items-center gap-2 justify-between items-start w-full py-3">
                <div className="flex gap-2">
                  <div className="w-12 h-12 rounded-lg bg-[#C0840B1A] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#D5AD5D] text-2xl border-[#C0840B1A]"><IoWalletOutline /></span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className={`${sora.className} text-[#555555CC] text-sm`}>Account Number</span>
                    <span className={`${sora.className} text-[#0F172A] text-lg`}>0176530649</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText("0176530649");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className={`${sora.className} flex items-center gap-2 border-2 border-[#C0840B66] flex-shrink-0 rounded-xl bg-[#FEF9EE1A] p-2 text-[#C0840B] hover:bg-[#C0840B]/20"
                  aria-label="Copy account number`}
                >
                  {copied ? <IoIosCheckmarkCircle className="text-green-600 text-xl" /> : <IoCopyOutline className="text-xl" />}
                  Copy</button>
              </div>
              <div className={`${sora.className} bg-[#F9F5EE] py-4 px-10 rounded-xl text-xl text-center text-[#260406B2]`}>
                <p>Thank you sincerely for your support.</p>
              </div>
            </div>
            <div className="flex h-full w-full max-w-full items-stretch justify-center self-stretch">
              <Image
                src="/kemi_speech.jpg"
                alt="Kemiolumuyiwa giving speech"
                className="h-full min-h-[286px] w-full rounded-xl object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                width={752}
                height={286}
              />
            </div>

          </div>
        </section>

      </main>
      <footer className="bg-[#240406] text-white p-8 md:p-15">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start md:gap-x-12 xl:gap-x-60">
          {/* Left Section */}
          <div className="max-w-md flex flex-col items-center text-center md:items-start md:text-left">
            <p className={` ${sora.className} mb-6 text-sm md:text-sm `}>
              MOTO Foundation <span className="text-white/50">(Mutajero Oyekan; Teniola Olumuyiwa (MOTO) Foundation)
                is the charity outlet of Mutajero Ventures Ltd, incorporated in April 1993.</span>
            </p>
          </div>

          {/* middles section */}
          <nav className={`${fruances.className} flex flex-col gap-3 flex-1 items-center text-center md:items-start md:text-left justify-center`}>
            <Link href="#home" className="text-[#E6E6E6]/60 hover:text-white">Home</Link>
            <Link href="#about" className="text-[#E6E6E6]/60 hover:text-white">About</Link>
            <Link href="#review" className="text-[#E6E6E6]/60 hover:text-white">Review</Link>
            <Link href="#books" className="text-[#E6E6E6]/60 hover:text-white">Books</Link>
            <Link href="#foundation" className="text-[#E6E6E6]/60 hover:text-white">Foundation</Link>
          </nav>

          <div className="flex gap-x-3 items-center md:justify-start">
            <a href="https://www.linkedin.com/in/kemiolumuyiwa?originalSubdomain=ng" className={`${fruances.className} text-sm md:text-lg text-white/60 hover:text-white italic`}>Click to Follow us on</a>
            <a href="https://www.linkedin.com/in/kemiolumuyiwa?originalSubdomain=ng" aria-label="Linkedin" target="blank">
              <span><img src="/linkedin.svg" className="size-8" alt="Linkedin" /></span>
            </a>
          </div>

        </div>

        <div className="w-full text-5xl mt-8 md:text-9xl font-normal text-[#F9F5EE1A] text-center justify-between">
          <p className={`${fruances.className}`}>Kemi Olumuyiwa</p>
        </div>

        {/* Bottom Legal Section */}
        <div className={`${sora.className} w-full mt-8 flex flex-col items-center justify-between gap-4 md:border-t border-[#D9D9D9]/10 pt-4 text-center text-sm text-white/30 md:items-center md:gap-0`}>
          <p><span className="align-middle text-lg">©</span> 2026 New Dawn, Same fire. All rights reserved.</p>
        </div>
      </footer>

      {isLegacyModalOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-6"
          onClick={closeLegacyModal}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:p-8"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="legacy-story-title"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="legacy-story-title" className={`${fruances.className} text-2xl text-[#260406] md:text-3xl`}>
                  Vintage Fabric: A Life Of Sacrifice
                </h2>
                <p className={`${sora.className} mt-2 text-sm font-normal leading-6 text-[#260406]`}>
                  Florence Mutajero Gbeminiyi (Nee OshO)
                </p>
              </div>
              <button type="button" onClick={closeLegacyModal} className="rounded-full p-2 text-[#555555] hover:bg-[#F3F4F6]" aria-label="Close legacy story">
                ✕
              </button>
            </div>

            <div className={`${sora.className} mt-6 space-y-4 text-sm text-justify leading-7 text-[#555555] md:text-base`}>
              <p>
                Imagine for a second, all humans were created as attires; different fabrics, different textures, different colours. What kind of outfit would Maama be? One thing is sure, she’ll be the cynosure of all eyes, a timeless piece of clothing, detailed in cut and thorough in finishing.
              </p>
              <p>
                In March 1930, the Master Designer and Tailor of Destiny- God Almighty, created one of his best pieces when the world welcomed the arrival of a beautiful damsel in Ogere town, Remo, Ogun State, christened Mutajero Florence Gbeminyi Osho. Mama journeyed into this world through Sanusi and Orebowale Osho amongst four other siblings. At the tender age of 12, she left home to live with her aunt in Lagos who schooled her in trade and thus began a lifelong illustrious career in business. Her early sales acumen was built on merchandise in rice milling.
              </p>
              <p>
                <b className={`${sora.className}`}>A WEAVE OF LOVE</b>
                <br />
                In March 1951, the loom of love wove two unique attires together, the threads interlaced, Maama met her soul mate, Pa Josiah Kalejaiye Oyekan (late), who was a leading industrialist (J.K Oyekan & Sons) in Ogere and Lagos. Their union was blessed with seven children; Sunday Olufunmilayo Orebowale, Samuel Oluwasegun, Adesola Adetoro Oluremilekun and Ademoyegun Adetuberu. Others are Adejuwon Oluwafemi Odunmbaku,  Oluwakemi Oluteniola Esther Mayokun and Olumuyiwa Dada Akingbade David Oyekan. Marriage certainly is not a wardrobe of roses, Maama had a few challenges in the early years of her matrimony; a period she chose to describe as ‘tough’ but she was able to pull back the fibre and knit her family together. By 1957, she was forging ahead to a great future with her husband. As Nigeria gained her independence from colonial rule in 1960, mama’s life spun forward in a major turnaround that saw her become a leading distributor of textile materials with the Nigerian Textile Mills Limited. She and a couple of her friends were enlisted as the textile mill’s clientele. She was also a leading major distributor for NICHEM Wax Limited and SPECOMILL. Mama’s family progress was further accentuated with her late husband’s rise to become the only Nigerian in the top management position of the Nigerian Textile Mills Limited, Ikeja, Lagos.
              </p>
              <p>
                <b className={`${sora.className}`}>TURNING PATCHES INTO DESIGN</b>
                <br />
                Fate cut Mama a different pattern in January 1970, when she lost the love of her life to a brief illness at a time when their last child; Olumuyiwa Akingbade Oyekan was just over two years old. She toiled day and night as she took up the mantle of training her seven children through life and education, without any support from anybody but God almighty, the master designer and tailor of destinies.  Instead of giving up, she chose to take the needle life handed her and work at a pattern…one stitch at a time. Solely running her textile business which spanned over five decades. Mama is still a major distributor in bulk sales of textile materials and also became a fortitude in the lives of her seven children, ensuring that each of them were brought up in the way of the Lord. She gave them adequate education. Mama cherished raising her children by herself, helping them through turns to work out their own life outlines.  “I never want my children to be left out amongst their peers” she says. She describes herself as not fitting into her age-group’s association in her hey-days because training her children was paramount. But today, “I fit into every class of age-group; God secured our, your future” she explained since 1990. A virtuous woman, Mama remained single, training her children for over 40 years alone, as she turned down suitors, as a single mother. For her, her children were more important to her than any relationship. The buttons came off again when Mama suffered another major loss in 1984 with the passing away of her first child – Sunday Olufunmilayo Oyekan at the age of 32. Her late son, Olufunmilayo, left her three brilliant jewels as grandchildren. These three are now Captains of Industries in Nigeria, United States of America and Canada. Maama Oluwagbeminiyi Oyekan loves construction; she loves building, planting and praying. The cerebral, organized and very warm woman loves people.
              </p>
              <p>
                <b className={`${sora.className}`}>A PATTERN OF THANKSGIVING</b>
                <br />
                Mama is blessed with six living children, 23 grand-children and 11 great grandchildren, all spread across the globe. She has travelled far and wide across the world, paying a number of visits to some African Countries, the United States of America, the United Kingdom, Switzerland, the Caribbean and a Holy pilgrimage to Israel with the General Overseer of the Redeemed Christian Church of God, Pastor E.A. & Pastor Mrs. Folu Adeboye in 1996. Mama loyalty to the extended family system is evident. She trained children of some of her siblings, some of whom lived with her for very many years. She describes her children as the “success lesson of her existence” “All the problems I have faced in my life have been wiped off by my children and this brings me joy” No doubt, her children have become the underlay; the fabric underneath the layer of her existence.
              </p>
              <p className=" text-left">
                <b className={`${sora.className}`}>STITCHING MICRO-CREDIT AND HUMANITARIAN WORK</b>
              </p>
              <p>
                Progressively, Mama opened a major outlet (fondly called shop Iya Dudu) in Lagos where she also sold textile materials in wholesale and retail. Despite her very heavy responsibility, she made it a duty to empower a lot of women in her outlets via training in the rudiments of the business. Apart from economically empowering women through training in textile trade and provision of micro-credit, Mama’s philanthropy was further dyed, when it was incorporated as a Limited Liability Company in April 1993 by her children. It was christened “Mutajero Ventures Ltd” The idea extended the length of her giving beyond market women, to enhance education in her local communities. Till date, Mama with her Trust Fund, an Education Foundation, awards Financial Rewards and Scholarships annually to the best male and female students at the Ogere Community High School in Ogere-Remo, her home town and Oke-Ira Community Grammar School, Ogba-Ikeja, Lagos where she’s resided for the four decades.
              </p>
              <p>
                <b className={`${sora.className}`}>SERVICE TO GOD - THE TAILOR OF LIFE</b>
                <br />
                Outside hard work and strong family values, another of Mama’s strong threads is her high regard for the Almighty God which she adequately instilled into all her children. She is currently an Elder, in fact, the Eldest at the City of David Parish of the Redeemed Christian Church of God (RCCG), Victoria Island, Lagos being shepherd by Pastor Idowu and Pastor Dr. (Mrs.) Siju Iluyomade. Dr. Siju Iluyomade who fondly refers to herself as “Maama’s Daughter” is the Founder and Convener of “ARISE WOMEN CONFERENCE” (ARISE FOR A WOMAN TODAY) a solid charity organization that is lifting many mothers, in fact, many women out of poverty. Maama Florence has been a staunch member of the organization for nine (9) years. Before this, she was ordained a deaconess at the Christ Onward Gospel Church and was installed the “Mother in Israel” of the Church in 2009. She is a staunch member of Methodist Church in Nigeria who conferred her with the “Majekobaje of Methodist Church of Ogere Remo". She’s also the Mother of the Youth in the Christ Apostolic Church, Jesus Miracle Mountain, Lagos.
              </p>
              <p>
                In recognition of Mama’s selfless service, she was made the Life Patron of the church’s choir in 2002.  When life seemed knotted, by faith, Mama always knew there was a crown on the other side of the embroidery. As Mama celebrates her nonagenarian years, we pray for many more merry years ahead. Years clothed in beauty, great health, increased and flourishing wisdom. We wish you all the best, Great-Grandma. Wear your best clothes and catwalk on the long runway of the 9th Floor.
              </p>
              <p>We cherish you Grandma 👵</p>
              <p>WE LOVE YOU MAAMI 😍</p>
            </div>

            <a
              href="#legacy" onClick={closeLegacyModal}
              className={`${sora.className} flex w-fit mt-4 items-center cursor-pointer gap-2 text-sm font-medium text-[#C0840B] hover:underline hover:font-semibold`}
            >
              Close Full Story
            </a>
          </div>
        </div>
      ) : null}

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
