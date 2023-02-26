import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitch, BsTwitter } from "react-icons/bs";

const fecha = new Date().getFullYear();

const Footer = () => {
  return (
    <section id="footer" className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:space-y-0 md:items-start">
          <div className="text-center my-6 text-white mx-auto text-xs md:hidden">
            Copyright &copy; {fecha}. All Rights Reserved.
          </div>
          <div className="my-6">
            <Image
              src="/logo-white.svg"
              width={96}
              height={96}
              alt="Logo white"
            />
          </div>

          <div className="flex space-x-4 justify-center ">
            <Link href="/">
              <BsFacebook style={{ color: "white" }} />
            </Link>
            <Link href="/">
              <BsInstagram style={{ color: "white" }} />
            </Link>
            <Link href="/">
              <BsTwitch style={{ color: "white" }} />
            </Link>
            <Link href="/">
              <BsTwitter style={{ color: "white" }} />
            </Link>
          </div>
        </div>
        {/* <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <Link href={"/"} className="hover:text-darkGrayishBlue">
              Oportunidad de empleo
            </Link>
            <Link href={"/"} className="hover:text-darkGrayishBlue">
              Politica de privacidad
            </Link>
            <Link href={"/"} className="hover:text-darkGrayishBlue">
              Socios
            </Link>
            <Link href={"/"} className="hover:text-darkGrayishBlue">
              Inversiones
            </Link>
          </div>
        </div> */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <Link href="#main" className="hover:text-darkGrayishBlue">
              Productos
            </Link>
            <Link href="#testimonials" className="hover:text-darkGrayishBlue">
              Servicios
            </Link>
            <Link href={"/"} className="hover:text-darkGrayishBlue">
              Nosotros
            </Link>
            <Link href={"/"} className="hover:text-darkGrayishBlue">
              Contacto
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-x-3">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Update"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Subscribe
              </button>
            </div>
            <div className="hidden text-white mt-5 md:block">
              Copyright &copy; {fecha}. All Rights Reserved.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
