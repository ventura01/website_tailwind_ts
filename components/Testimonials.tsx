import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center mb-32">
        <h2 className="text-4xl font-bold text-center">
          What is different about Manage?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <Image
              src="/avatar-anisha.png"
              alt="anisha"
              width={96}
              height={96}
              className="w-16 -mt-14"
            />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-darkGrayishBlue text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              labore placeat ducimus, illo omnis quidem numquam.
            </p>
          </div>
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <Image
              src="/avatar-richard.png"
              alt="anisha"
              width={96}
              height={96}
              className="w-16 -mt-14"
            />
            <h5 className="text-lg font-bold">Richard Roberts</h5>
            <p className="text-darkGrayishBlue text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              labore placeat ducimus, illo omnis quidem numquam.
            </p>
          </div>
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <Image
              src="/avatar-shanai.png"
              alt="anisha"
              width={96}
              height={96}
              className="w-16 -mt-14"
            />
            <h5 className="text-lg font-bold">Shanai Wilkins</h5>
            <p className="text-darkGrayishBlue text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              labore placeat ducimus, illo omnis quidem numquam.
            </p>
          </div>
        </div>
        {/* <div className="my-16">
          <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full shadow-md shadow-red-200 transition baseline hover:bg-brightRedLight ">
            Compra ya!
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
