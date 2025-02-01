import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookCall } from "./BookCall";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Play } from "lucide-react";
import Pricing from "./Pricing";
import AnimatedMacbook from "./AnimatedMackbook";
import { GetStartedButton } from "./GetStartedButton";
export const Landing = () => {
  return (
    <div className="flex flex-col items-center relative top-0 w-full transform rounded-2xl">
      <Navbar active="none" />
      <div className="w-[80%] flex flex-col justify-center items-center space-y-32 pt-12 pb-20">
        <div className="flex flex-col gap-1 justify-center w-fit">
          <h1 className="text-7xl text-black font-medium text-center">
            Everything You Need
          </h1>
          <div
            className="bg-white border border-[#D7BEEA] border-2 p-2 rotate-2 rounded-[30px] "
            style={{
              boxShadow: "0 50px 50px 2px  rgb(201, 161, 254)",
            }}
          >
            <div className="relative bg-[#E7D6FF] px-6 py-5 rounded-[20px] border border-[#D7BEEA] border-2 overflow-hidden">
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 10px,
                  rgba(215, 190, 234, 0.6) 10px,
                  rgba(215, 190, 234, 0.6) 11px)`,
                }}
              />
              <h2
                className="relative text-7xl z-10 font-medium text-center p-1 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #6025FF 0%, #8A2FFF 100%)",
                }}
              >
                To Manage Testimonials
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-10">
          <div
            className="relative flex h-[450px] w-full rounded-3xl overflow-hidden"
            style={{
              background: `linear-gradient(180deg, 
              #842aff 0%,
              #A662FF 24%,
              #ba84ff 38%,
              #ba84ff 47%)
              `,
            }}
          >
            <div className="absolute h-full w-[1px] right-10 bg-gradient-to-b from-white/40 to-transparent to-70% z-10" />
            <div className="absolute h-full w-[1px] left-10 bg-gradient-to-t from-white/40 to-transparent to-70% z-10" />
            <div className="absolute w-full h-[1px] top-10 bg-gradient-to-l from-white/40 to-transparent to-60% z-10" />
            <div className="absolute w-full h-[1px] bottom-10 bg-gradient-to-r from-white/40 to-transparent to-60% z-10" />
            {/* <div
              className="absolute rounded-full -left- -top-24 z-20"
              style={{
                width: "50%",
                height: "50%",
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 80%)",
                filter: "blur(50px)",
                pointerEvents: "none",
              }}
            ></div> */}
            <div
              className="absolute rounded-full -right-24 -bottom-24 rotate-4 z-10"
              style={{
                width: "50%",
                height: "80%",
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 80%)",
                filter: "blur(50px)",
                pointerEvents: "none",
              }}
            ></div>

            {/* <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                width: "50%",
                height: "100%",
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 80%)",
                filter: "blur(10px)",
                pointerEvents: "none",
              }}
            ></div> */}

            <div className="absolute -top-6 -right-6  w-full h-full overflow-none pointer-events-none">
              <div className=" w-full h-full bg-gradient-to-l from-[#B175FF] to-transparent to-40%" />
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="absolute rounded-full"
                  style={{
                    width: `${index * 150}px`,
                    height: `${index * 150}px`,
                    top: `-${index * 50}px`,
                    right: `-${index * 50}px`,
                    border: "20px solid rgba(205, 167, 255, 0.3)",
                    filter: "blur(10px)",
                    opacity: Math.max(0, 1 - index * 0.15),
                  }}
                />
              ))}
            </div>
            <div className="p-12 py-32 px-20 flex flex-col gap-5 basis-1/2 z-20">
              <h2 className="text-black text-4xl font-medium max-w-[80%]">
                Showcase your testimonials with minimal Efforts
              </h2>
              <h3 className="text-black text-xl font-medium opacity-70">
                No Developers, No complex setup.
              </h3>
            </div>
            <div className="absolute w-[50%] h-full right-16 px-2  flex items-center justify-end z-20">
              <AnimatedMacbook />
            </div>
          </div>
          <div className="flex flex-row gap-8 h-[450px]">
            <div className="basis-1/2 bg-gradient-to-t from-[#E3CAFB] to-[#FBF4FF] h-full rounded-3xl overflow-hidden flex flex-col items-center justify-center">
              <div className="flex  flex-col gap-2 items-center justify-center p-6 pb-0">
                <h2 className="text-5xl ">
                  <p className="text-text text-center">Customize</p>
                  <p className="text-black">Your wall of love</p>
                </h2>
                <p className="text-[#8A878D] text-lg max-w-[70%] text-center">
                  Get your Customized Wall of Love as per your demand!
                </p>
              </div>
              <div className="relative w-[95%] h-full">
                <Image
                  src="/assets/images/customize.png"
                  alt="customize"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-2xl absolute"
                />
              </div>
            </div>
            <div className="basis-1/2 bg-gradient-to-t from-[#E3CAFB] to-[#FBF4FF]  h-full rounded-3xl flex flex-col items-center justify-center">
              {" "}
              <div className="flex flex-col gap-2 items-center justify-center p-6 pb-0">
                <h2 className="text-5xl ">
                  <p className="text-text text-center">Create as many</p>
                  <p className="text-black text-center">as you want</p>
                </h2>
                <p className="text-[#8A878D] text-lg text-center">
                  Your Walls, Your Way - No Limits!
                </p>
              </div>
              <div className="relative w-[95%] h-full -rotate-2">
                <Image
                  src="/assets/images/wallOfLove.png"
                  alt="customize"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl absolute drop-shadow-2xl z-20"
                  // style={{
                  //   drop: "0 50px 50px 2px  rgb(201, 161, 254)",
                  // }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <GetStartedButton content="Get Started" className="px-" />
          </div>
        </div>
        {/* <script async src="http://embed.viewus.in/iframeEmbedder.js" />
        <iframe
          id="testimonial-frame"
          src="http://embed.viewus.in/w/carousal?slug=viewus&animated=on&cardBorderRadius=medium&cardBorderColor=cecece&shadow=ffffff"
          scrolling="no"
          frameBorder="0"
          width="100%"
        /> */}
        <div className="flex flex-col gap-8">
          <h2 className="text-6xl text-text font-medium">
            Manage your Testimonials
          </h2>
          <div className="relative w-full aspect-video bg-zinc-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 hover:scale-105 transition-transform"
              >
                <Play className="w-10 h-10 text-white" />
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-row gap-8">
            <div className="basis-1/2 bg-gradient-to-b from-[#E1C8FB] to-[#FBF4FF] h-80 rounded-2xl overflow-hidden flex flex-col items-center justify-center">
              <div className="flex items-center justify-center p-6 ">
                <h2 className="text-4xl ">
                  <p className="text-text text-center">Import Testimonials</p>
                  <p className="text-black">From social media platforms</p>
                </h2>
              </div>
              <div className="relative w-[90%] h-full">
                <Image
                  src="/assets/images/grid_fixed.png"
                  alt="customize"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl absolute"
                />
              </div>
            </div>
            <div className="basis-1/2 bg-gradient-to-b from-[#E1C8FB] to-[#FBF4FF]  h-80 rounded-2xl flex flex-col p-6">
              <div className="flex flex-col items-center justify-center gap-28 mx-auto space-y-6">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-4xl font-medium text-text">
                    Still not Impressed?
                  </h2>
                  <p className="text-xl text-black">
                    Let us show you how we can increase your sales
                  </p>
                </div>
                <Button className="w-full py-6 px-4 text-2xl font-medium bg-text hover:bg-text hover:bg-opacity-90 text-white rounded-full transition-colors duration-200">
                  Start for free✨
                </Button>
              </div>
            </div>
          </div>
          <div className="relative bg-gradient-to-t flex from-[#8C35FF] via-[#C295FC] to-white h-80 w-full rounded-2xl overflow-hidden">
            <div className="p-6 basis-1/2">
              <h2 className="text-text text-4xl">Collect your Testimonials</h2>
            </div>
            <div className="absolute w-[60%] h-full -bottom-2 right-6  flex items-end justify-end">
              <div className="relative w-full h-[70%]">
                {" "}
                <Image
                  src="/assets/images/coming_soon.jpg"
                  alt="image1"
                  layout="fill"
                  objectFit="cover"
                  className="absolute rounded-xl rotate-1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-center">
            <h2 className="text-6xl text-text font-medium">
              Say what our users say about us
            </h2>
          </div>
          <iframe
            id="testimonial-frame2"
            src="https://embed.viewus.in/?animated=on&slug=merged-and-share&columns=3&tagText=000000&tag=FFFFFF&star=FFD700&text=FFFFFF&cardBorderColor=FFD700&cardBackground=0c0a09&theme=dark&outerRadius=low"
            scrolling="no"
            frameBorder="0"
            width="100%"
            height="800px"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center w-fit">
          <h2 className="text-7xl text-black font-medium text-center">
            Simple Setup
          </h2>
          <div className="bg-[#E7D6FF] p-6 rounded-2xl border border-white border-2 -rotate-2 ">
            <h2 className="text-7xl text-text font-medium text-center">
              Simple Pricing
            </h2>
          </div>
        </div>
      </div>

      <Pricing />
      <div className="flex flex-col justify-center items-center mt-24 font-bold text-center w-full bg-[#A057FF]">
        <BookCall />
      </div>
      <Footer />
    </div>
  );
};
