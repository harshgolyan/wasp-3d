import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Second() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(
                        ".number, .heading, .sub", 
                        {
                            opacity: 0,
                            y: 100,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            stagger: 0.3,
                            ease: "power3.out",
                        }
                    );
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, [sectionRef]);

    return (
        <div className="h-screen z-10 p-10 relative text-center flex justify-between items-center">
            <div className="relative">
                <img src="/flower2.png" alt="flower" className="relative w-[120rem] h-[30rem] ml-[-16rem] rotate-90 skewY-20 -translate-x-30" />
            </div>
            <div className="relative" ref={sectionRef}>
                <div className="absolute top-1/2 left-[5rem] -translate-x-1/2 -translate-y-1/2 bg-green-400 mix-blend-color h-[15rem] w-[20rem] rounded-full blur-xl filter animate-blob2 rotate-45"></div>
                <div className="absolute top-1/2 left-[20rem] -translate-x-1/2 -translate-y-1/2 bg-yellow-400 mix-blend-color h-[15rem] w-[20rem] rounded-full filter blur-xl animate-blob2 -rotate-45"></div>
                <div>
                    <div className="number text-[10rem] text-start font-extrabold stroke-text">01</div>
                    <div className="heading text-[6rem] text-start font-bold leading-[5rem] uppercase stroke-text">wasp venom</div>
                    <div className="sub text-[2rem] text-start font-medium leading-[3rem] mt-16 stroke-text">
                        Wasp venom contains a mix of neurotoxins, enzymes, and peptides that can cause pain, swelling, and allergic reactions in humans.
                    </div>
                </div>
            </div>
        </div>
    );
}
