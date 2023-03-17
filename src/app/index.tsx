


// ============================ NAV BAR OPEN =========================================


"use client";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="bg-gradient-to-bl from-slate-500 to-stone-700">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-24">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className=" flex items-center">
              <Link href="/" className="text-white text-4xl sm:text-2xl font-bold md:text-4xl">
                Achievers
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-8">
              <div className="flex space-x-3 md:space-x-5 mdlg:space-x-8 lg:space-x-12">
                <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  Index
                </Link>
                <Link href="/home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  Home
                </Link>
                <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  About
                </Link>
                <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  Contact
                </Link>
                <Link href="/info" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium md:text-lg">
                  Info
                </Link>
                <Link href="/login-signup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium md:text-xs special:text-lg">
                  Login/Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Index
            </Link>
            <Link href="/home" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <Link href="/info" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Info
            </Link>
            <Link href="/login-signup" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Login/Signup
            </Link>
          </div>
        </div>
      )}
    </nav>

  );
}

export { Navbar };

// ======================== NAV BAR CLOSED ==============================























// =============================== PARALLAX START ==============================

const Parallax: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533243216203-8c08406d4583?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')" }}
      ></div>
      <div className="relative z-10 flex justify-end items-center h-full">
        <h1 className="text-white font-serif italic mb-6 text-right absolute right-0 mr-6 text-xl sm:text-3xl md:text-4xl sm:mb-8 sm:mr-12 lg:mr-20" style={{ maxWidth: "50%" }}>Greatest ACHIEVERS, are those who merrily keep jumping from one target to another; they have fun, they accept challenges, they motivate others, they fight, THEY ROCK! <p>Rana Reebaal...</p></h1>
        <div className="absolute bottom-0 w-full p-8 text-white text-center">
          <p className="text-lg font-semibold">Scroll down for more!</p>
        </div>
      </div>
    </div>
  );
};
export { Parallax };


// ============================== PARALLAX END =================================























// ======================== CARDS SECTION OPEN ===============================


import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card = ({ imageSrc, title, description }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardClass = `w-96 md:w-72 rounded-2xl overflow-hidden shadow-lg mx-2 mt-20 transform transition-transform ${isHovered ? "scale-110" : ""
    }`;

  return (
    <div
      className={cardClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-yellow-700 text-base">{description}</p>
      </div>
    </div>
  );
};

const cardsData: CardProps[] = [
  {
    imageSrc: "https://source.unsplash.com/random/400x400/?Paris?",
    title: "Card 1",
    description: "This is the description for Card 1",
  },
  {
    imageSrc: "https://source.unsplash.com/random/400x400/?Venice",
    title: "Card 2",
    description: "This is the description for Card 2",
  },
  {
    imageSrc: "https://source.unsplash.com/random/400x400/?Rio de Janeiro?",
    title: "Card 3",
    description: "This is the description for Card 3",
  },
  {
    imageSrc: "https://source.unsplash.com/random/400x400/?Prague",
    title: "Card 4",
    description: "This is the description for Card 4",
  },
  {
    imageSrc: "https://source.unsplash.com/random/400x400/?Sydney?",
    title: "Card 5",
    description: "This is the description for Card 5",
  },
  {
    imageSrc: "https://source.unsplash.com/random/400x400/?Kyoto",
    title: "Card 6",
    description: "This is the description for Card 6",
  },
  {
    imageSrc: "https://source.unsplash.com/random/400x400/?Florence?",
    title: "Card 7",
    description: "This is the description for Card 7",
  },
  {
    imageSrc: "https://source.unsplash.com/random/400x400/?Barcelona",
    title: "Card 8",
    description: "This is the description for Card 8",
  },
];

const CardList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {cardsData.map((cardData) => (
        <Card key={cardData.title} {...cardData} />
      ))}
    </div>
  );
};

export { CardList };


// ======================== CARDS SECTION CLOSED ============================





















// ================================= VIDEO SLIDER START =======================


import { useRef } from "react";

const videoUrls = [
  "https://assets.mixkit.co/videos/preview/mixkit-shanghai-urban-cityscape-with-flashing-buildings-31096-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-shanghai-river-and-city-skyscrapers-20099-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-shanghai-river-and-the-cityscape-pan-up-31018-large.mp4"
];

const VideoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // function to handle video change when a new slide becomes active
  const handleVideoChange = (index: number) => {
    setActiveIndex(index);
    videoRef.current?.load();
    setIsPlaying(true);
  };

  // function to handle play/pause button click
  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="mt-4 flex justify-center items-center h-screen">
      <div className="w-full md:w-9/12 lg:w-11/12 ">
        <div className="relative h-2/3">
          <video
            ref={videoRef}
            src={videoUrls[activeIndex]}
            autoPlay
            muted
            className="h-full w-full object-cover"
            controls
          />
        </div>
        <div className="flex justify-center mt-8">
          {videoUrls.map((url, index) => (
            <button
              key={url}
              aria-label={`Video ${index + 1}`}
              className={`w-8 h-2 mx-2 rounded-full ${index === activeIndex ? "bg-blue-500" : "bg-gray-600"
                } focus:outline-none`}
              onClick={() => handleVideoChange(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export { VideoSlider };


// ================================= VIDEO SLIDER STOP ========================

























// ============================= FOOTER START ===============================


import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp, FaSign } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto mt-4 py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <img src="https://www.achievers.com/wp-content/themes/achievers/assets/images/logo.svg" alt="logo" className="h-8" />
            <p className="text-gray-400 text-sm mt-2">© 2023 Achievers. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 sm:space-x-6 lg:space-x-8">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Terms &amp; Conditions
            </a>
            <a title="twitter" href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a title="linkedin" href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a title="github" href="#" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
            <a title="instagram" href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a title="facebook" href="#" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a title="whatsapp" href="#" className="text-gray-400 hover:text-white">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

// ============================== FOOTER END ================================





















