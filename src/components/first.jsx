import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function First() {
  useEffect(() => {
    gsap.to(".wasp", {
      x: -500,
      scrollTrigger: {
        trigger: ".wasp",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
  }, []);

  return (
    <>
      <div className="h-screen z-0 bg-green-600 overflow-x-hidden">
        <div className="flex justify-between item-center px-[5rem] py-4 bg-green-800 sticky top-0 left-0">
          <div className="uppercase text-[2rem] font-bold">wasp</div>
          <div className="flex justify-center items-center gap-20 font-semibold">
            <div className="hover:text-white">Home</div>
            <div className="hover:text-white">Category</div>
            <div className="hover:text-white">Reimagine</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
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
