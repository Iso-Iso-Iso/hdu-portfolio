import React from "react";
import Image from "next/image";
import CatTypingImg from "@/assets/cat-typing.gif";

const MainScreen = () => {
  return (
    <section className="lg:h-[560px] flex gap-4 items-center flex-col lg:flex-row max-lg:mb-6">
      <div className="flex-1">
        <h1 className="flex flex-col font-serif gap-2 mb-6 max-lg:text-center">
          <span className="font-thin font-serif text-5xl">Front-end</span>
          <span className="text-font-primary-active font-bold text-6xl">
            Middle+
          </span>
          <span className="font-thin  text-3xl">Developer</span>
        </h1>
        <p className="font-thin text-lg leading-8 max-lg:text-center">
          I am a middle frontend developer with a solid foundation in modern
          technologies and frameworks. I enjoy creating seamless and visually
          engaging user interfaces while maintaining clean and efficient code.
          My focus is on delivering high-quality, user-friendly experiences that
          align with best practices and innovative solutions.
        </p>
      </div>
      <div className="flex-1 flex justify-end">
        <Image
          src={CatTypingImg}
          alt="Cat typing"
          className="lg:w-[440px] lg:h-[440px] rounded h-[220px] w-[220px]"
        />
      </div>
    </section>
  );
};

export default MainScreen;
