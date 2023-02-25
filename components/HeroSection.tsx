import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products.
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, ipsa
            quis non aperiam laboriosam quasi laudantium amet voluptatem
            eligendi unde. Quia nobis molestias corporis et eius repellat dicta
            aut nostrum, dignissimos aperiam sequi magnam, aliquid doloribus.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="p-3 px-6 pt-2 text-white bg-brightRed shadow-md transition shadow-red-200 rounded-full baseline hover:bg-brightRedLight">
              Compra ya!
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/illustration-intro.svg"
            alt="Hero-img"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
