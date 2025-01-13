import { Landing } from "@/components/landing/Landing";
import { Cloud } from "@/components/landing/Cloud";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen bg-[radial-gradient(ellipse_at_center_top,_#C4B4D3,_#D0C5DC,_#E4D9E9)]">
      <div className="sticky top-0 w-full z-10">
        <div className="absolute top-0 w-[85vw] left-1/2 -translate-x-1/2 flex justify-between px-20 z-20">
          <div className="w-1 h-40 bg-white z-10"></div>
          <div className="w-1 h-40 bg-white z-10"></div>
          <div className="w-1 h-40 bg-white z-10"></div>
          <div className="w-1 h-40 bg-white z-10"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="w-[85vw] mx-auto my-32 bg-white rounded-3xl shadow-landing ">
          <Landing />
        </div>
      </div>

      <Cloud className="w-full h-full " imageUrl="/assets/images/cloud.png" />
    </div>
  );
}
