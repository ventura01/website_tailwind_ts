import React from "react";

const CTASection = () => {
  return (
    <section id="cta" className="bg-brightRed">
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:flex-row md:space-y-0">
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">Simplify how your team works today!</h2>
        <button className="p-3 px-6 pt-2 text-brightRed font-bold bg-white rounded-full shadow-md transition baseline hover:bg-red-100 "> Compra ya!</button>
      </div>
    </section>
  );
};

export default CTASection;
