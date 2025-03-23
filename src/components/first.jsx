import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useModelAnimation from "../hooks/useModelAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function First() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.to(".wasp", {
      x: -500,
      scrollTrigger: {
        trigger: ".wasp",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    ScrollTrigger.create({
      start: "top top",
      onUpdate: (self) => {
        setScrolled(self.scroll() > 50);
      },
    });
  }, []);

  useModelAnimation();

  return (
    <>
      <div className="h-screen bg-green-600 overflow-x-hidden relative">
        <div
          className={`fixed top-0 left-0 w-full px-6 py-2 text-white flex justify-between items-center transition-all duration-300 z-50 bg-green-600/50 backdrop-blur-md ${
            scrolled
              ? "top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1200px] rounded-full shadow-lg"
              : ""
          }`}
        >
          <div className="uppercase text-[2rem] font-bold">wasp</div>
          <div className="flex justify-center items-center gap-10 font-semibold">
            <div className="hover:text-gray-300 cursor-pointer">Home</div>
            <div className="hover:text-gray-300 cursor-pointer">Category</div>
            <div className="hover:text-gray-300 cursor-pointer">Reimagine</div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-24">
          <div className="wasp text-[20rem] uppercase font-bold py-4 px-8 text-white">
            wasp
          </div>
          <div className="mr-[-8rem] -rotate-20">
            <img src="/flower1.png" className="" alt="flower" />
          </div>
        </div>
      </div>
    </>
  );
}
