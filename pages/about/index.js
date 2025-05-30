"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const section2Ref = useRef(null);
  const bgImageRef = useRef(null);
  const boxesRef = useRef([]);

  useGSAP(() => {
    // Set initial states
    gsap.set(bgImageRef.current, { scale: 2 });
    boxesRef.current.forEach((box) => {
      gsap.set(box, { opacity: 0, y: 800 });
    });

    // Create ScrollTrigger timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
      },
    });

    // Zoom out bg
    tl.to(bgImageRef.current, { scale: 1, duration: 2 });

    // Animate boxes
    boxesRef.current.forEach((box, index) => {
      tl.to(box, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: index * 0.3,
      });
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <>
      {/* Section 1 */}
      <section className="w-full h-screen bg-blue-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold">First Section</h1>
      </section>

      {/* Section 2 with animation */}
      <section ref={section2Ref} className="relative w-full h-screen overflow-hidden">
        <div
          ref={bgImageRef}
          className="absolute inset-0 bg-cover bg-center scale-125"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/sci-fi-3d-purple-grid-from-80s_633872-110.jpg?w=1800')",
          }}
        ></div>

        <div className="relative h-full flex flex-col items-center justify-center gap-12 p-8">
          <div
            ref={(el) => (boxesRef.current[0] = el)}
            className="box absolute w-[25vw] h-[250px] bg-white rounded-lg shadow-lg flex items-center justify-center text-xl font-bold"
          >
            1
          </div>
          <div
            ref={(el) => (boxesRef.current[1] = el)}
            className="box absolute w-[25vw] h-[250px] bg-orange-300 rounded-lg shadow-lg flex items-center justify-center text-xl font-bold"
          >
            2
          </div>
          <div
            ref={(el) => (boxesRef.current[2] = el)}
            className="box absolute w-[25vw] h-[250px] bg-amber-200 rounded-lg shadow-lg flex items-center justify-center text-xl font-bold"
          >
            3
          </div>
          <div
            ref={(el) => (boxesRef.current[3] = el)}
            className="box absolute w-[25vw] h-[250px] bg-purple-300 rounded-lg shadow-lg flex items-center justify-center text-xl font-bold"
          >
            44
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full h-screen bg-green-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Third Section</h1>
      </section>
    </>
  );
}
