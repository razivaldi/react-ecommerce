import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
  console.log(products)
  return (
      <div className="products-center">
        {products.map((product) => {
          return (
              <div key={product._id} className="rounded border border-black flex">
                <img 
                src={`http://localhost:8000/${product.imageUrl[0]}`}
                className="w-2/6 h-full"/>
                <div className="w-4/6 ml-4">
                  <p className="text-2xl">{product.title}</p>
                  <p>{formatPrice(product.price)}</p>
                  <Link to={`/products/${product._id}`}>More Detail</Link>
                </div>
              </div>
          );
        })}
      </div>
  );
};

export default ListView;
