import Image from "next/image";
import React from "react";
import { products } from "../datos";
const ProductList = () => {
  return (
    <section id="product-list">
      <div className="container mx-auto">
        <div className="py-20  text-center">
          <h3 className="text-1xl font-bold  mt-24">Our Products</h3>
          <h2 className=" font-bold capitalize text-4xl">
            our products are solutions for yor needs
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-3xl my-4 gap-2 w-full mx-auto overflow-hidden"
            >
              <Image
                src={product.url}
                alt={product.name}
                width={600}
                height={600}
                className="object-cover h-64 w-full object-center"
              />
              <div className="p-4">
                <h3 className="uppercase text-1xl font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-500">{product.desc}</p>
                <p className="font-bold">U${product.decsPrice}</p>
                <del>U${product.price}</del>
              </div>
              <div className="flex justify-center my-6 mt-4">
                <button className="rounded-full hover:bg-orange-500 hover:text-white capitalize shadow-md shadow-orange-300 bg-white py-2 outline outline-orange-500 text-orange-500 font-bold px-6">shop now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
