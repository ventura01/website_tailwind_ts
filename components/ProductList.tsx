import React from "react";
import Product from "./Product";

const ProductList = () => {
  return (
    <section id="product-list">
      <div className="">
        <h2 className="text-4xl font-bold text-center mt-24">Our Products</h2>
        <Product />
      </div>
    </section>
  );
};

export default ProductList;
