import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { months } from "../constants";

export default function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Our Treasures
          </h2>
          <p className="mt-4 text-zinc-400">
            Over the past 7 months, we've built significant memories that have become a part of my heart, and I can't wait to create many more beautiful moments with you, Isel.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="space-y-10 mt-10">
          {months.map((month, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center space-y-8 sm:space-x-8 sm:space-y-0 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
            >
              <div className="w-full sm:w-1/2">
                <img
                  src={month.image}
                  alt={month.description}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="w-full sm:w-1/2 text-center sm:text-left">
                <h3 className="text-xl font-bold text-white">{month.date}</h3>
                <p className="mt-2 text-sm text-zinc-400">{month.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-white text-lg font-semibold">
            Thank you for everything you’ve given me—your warmth, your patience, and the way you always make me feel like I’m home. I’m so grateful for you, for us, and for all the beautiful moments we’ve shared. You make my life better every day, and I’ll forever cherish you.
          </p>
          <p className="mt-4 text-white text-lg">
            Even if we fight, I want you to know that my love for you never fades. No matter what, you will always be the most beautiful girl to me, now and forever. Even when we disagree, I choose to fight through everything with you because I believe in us. Looking at everything we’ve built so far, I’m excited for what lies ahead of us in the next few years. I can't wait to continue this journey together, no matter where it takes us.
          </p>
        </div>
      </div>
    </div>
  );
}
