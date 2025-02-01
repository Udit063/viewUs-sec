"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function AnimatedMacbook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lidRotate = useTransform(scrollYProgress, [0, 0.5], [-90, 0]);
  const screenOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="h-fit w-full"
      aria-label="Animated MacBook showcase"
    >
      {/* <div className="sticky top-1/2 -translate-y-1/2 w-full max-w-4xl mx-auto"> */}
      <div className="relative w-full pb-[62.5%] flex justify-end">
        <div className="absolute inset-0 flex flex-col items-center ">
          <div
            className="relative w-[95%] h-[96%]"
            style={{ perspective: 2000 }}
          >
            <motion.div
              className="absolute inset-0 origin-bottom"
              style={{ rotateX: lidRotate }}
            >
              <div className="w-full h-full bg-[#1a1a1a] rounded-t-2xl shadow-xl overflow-hidden flex items-center justify-center">
                <div className="w-[97%] h-[95%] bg-black rounded-lg overflow-hidden flex items-center justify-center">
                  <motion.div
                    className="relative w-[100%] h-[100%] bg-black rounded-lg overflow-hidden"
                    style={{ opacity: screenOpacity }}
                  >
                    <Image
                      src="/assets/images/grid_fixed.png"
                      alt="Testimonial Grid"
                      layout="fill"
                      objectFit="cover"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-full h-[6%] bg-black rounded-b-xl shadow-xl z-10 flex flex-col">
            {/* <div className="h-1/3 w-full bg-[#141414] rounded-t-sm"></div> */}
            <div className="h-2/3 w-full bg-black rounded-b-xl flex items-end justify-center">
              <div className="w-1/2 h-1/2 bg-[#141414] rounded-md"></div>
            </div>
          </div>{" "}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
