"use client"; 

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Moments", href: "/projects" }
];

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-[#3F72AF]/20 to-black">
      <audio ref={audioRef} loop>
        <source src="/public/ikawAtAko.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-[#DBE2EF] underline"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-[#DBE2EF]/0 via-[#DBE2EF]/50 to-[#DBE2EF]/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-[#F9F7F7] cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Our 2024
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-[#DBE2EF]/0 via-[#DBE2EF]/50 to-[#DBE2EF]/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-[#DBE2EF]">
          In a world of endless possibilities, you are my one certainty—here’s to a universe of love in 2024 with you.
        </h2>
      </div>
    </div>
  );
}
