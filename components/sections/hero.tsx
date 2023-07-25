import React from "react";
import bg from "@/public/bg_hero.jpg";
import ImageSlider from "@/components/sections/sliders";
import Image from "next/image";
import Link from "next/link";
import inner from "@/public/inner_hero.png";
import inner2 from "@/public/inner_hero2.png";
import FrameAnimation from "./downloadButton";
const images = [inner.src, inner2.src];
const Hero = () => {
  return (
    <section
      className=" relative"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="h-[510px] w-full max-w-7xl mx-auto relative ">
        <div className="absolute -bottom-[85px]  md:-bottom-[170px] z-20 w-full md:w-1/3 ">
          <Link href="/download" className="flex justify-center max-w-[510px] mx-auto">
            <FrameAnimation />
          </Link>
        </div>
        <div className="absolute top-0 left-0 overflow-hidden">
          <ImageSlider images={images} height="510px" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
