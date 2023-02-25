import { products } from "../datos";

const Product = () => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <p>{product.decsPrice}</p>
          <del>{product.price}</del>
        </div>
      ))}
    </div>
  );
};

export default Product;
