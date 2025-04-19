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
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-[#DBE2EF]/0 via-[#DBE2EF]/50 to-[#DBE2EF]/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-[#DBE2EF]">
          Hi chrisel mae 🙂 i dont know kung if you still visit this web app na ginawa ko for you. But siguro dito ko nalang ikkwento lahat ng mga nangyari sa buhay after we seperate
          Its been 3 months po I dont know if you miss me but I miss you everyday, every night - nakikita and nararamdaman kita sa mga bagay na ginagawa ko. 
          Im thankful for the seperation we had kasi alam mo ba na if hindi tayo natapos, hindi ko madidiscover na kaya ko palang tumakbo ng 30kilometers??!! hahshaha imagine na tinakbo ko from bahay hanggang paranaque? parang ganon. I didnt even know na kaya pala ng utak at katawan ko.
          I started to buy my chicken breast in bulk, when we are dating lagi akong nagssave ng at least 3k every cut off for you and us in case na aalis tayo, pero now I spent my 3k for chicken breast. Last time I bought 11kg
          I saw johnoy again last feb sa centris nung nagguest sya sa wish 107, he sang ‘ang panata’. i wish that day na makita ka since first day mo ata non sa work mo and nasa centris lang din ako and i know dun ka bumababa.
          I dont know anything sa buhay mo ngayon, but I still think of you everyday. Im still trying my best to move on nang tahimik, mahirap but I can say na nakakausad ako kahit papano. Actually di ako nakakausad, I just slowly learn how to spend my days without you.
          If youre dating somebody, I hope na he treat you better as I did. Trust me chrisel I did my very best to prove my love sayo, ilang beses kong sasabihin yan pero yan lang ang inatupag ko sa buong 8months. I know ive been a pain in the ass pero I hope na kahit papano napasaya kita 🙂
          And namimiss ko na sila LUNAAAAA jusko ka di kita machat para makita sila hays, tumitingin nalang ako sa mga pics nila dito sa phone ko
          If you miss me just call me, bebe :(( i miss your voice, I miss all of you. You know where to find me chrisel mae. Ingat ka palagi 😉
                  </h2>
      </div>
    </div>
  );
}
