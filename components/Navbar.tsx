"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFilterSquare } from "react-icons/bs";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  console.log(menu);

  return (
    <nav className="container rlative p-6 mx-auto">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Image src="/logo.svg" alt="Logo" width={120} height={120} />{" "}
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="#main" className="hover:text-darkGrayishBlue">
            Productos
          </Link>
          <Link href="#hero" className="hover:text-darkGrayishBlue">
            Servicios
          </Link>
          <Link href="#sec-feature" className="hover:text-darkGrayishBlue">
            Nosotros
          </Link>
          <Link href="#footer" className="hover:text-darkGrayishBlue">
            Contacto
          </Link>
        </div>
        <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full shadow-md shadow-red-200 transition baseline hover:bg-brightRedLight hidden md:block">
          {" "}
          Compra ya!
        </button>
        <button
          className="block hamburger md:hidden focus:outline-none"
          id="menu-btn"
          onClick={() => setMenu(!menu)}
        >
          <BsFilterSquare color="darkBlue" size="1.25rem" />
        </button>
      </div>
      {menu ? (
        <div className="md:hidden">
          <div className="absolute items-center flex flex-col self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <Link
              href="#main"
              onClick={() => setMenu(!menu)}
              className="hover:text-darkGrayishBlue font-bold"
            >
              Productos
            </Link>
            <Link
              href="#sec-features"
              onClick={() => setMenu(!menu)}
              className="hover:text-darkGrayishBlue font-bold"
            >
              Servicios
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setMenu(!menu)}
              className="hover:text-darkGrayishBlue font-bold"
            >
              Nosotros
            </Link>
            <Link
              href="#footer"
              onClick={() => setMenu(!menu)}
              className="hover:text-darkGrayishBlue font-bold"
            >
              Contacto
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
