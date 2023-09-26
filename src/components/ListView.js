import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import "./listview.css";

const ListView = ({ products }) => {
  return (
    <section>
      <div className="products-center">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="border-2 border-black rounded-xl flex overflow-hidden m-5 bg-white shadow-lg"
            >
              <img src={product.image} alt={product.name} />
              <div className="m-3">
                <h3 className="font-semi text-black">{product.name}</h3>
                <p className="text-orange-500 font-semibold">{formatPrice(product.price)}</p>
                <p className="mb-5">{product.description}</p>
                <Link to={`/products/${product.id}`}>
                  <span className="border border-black rounded-full px-3 py-1 hover:bg-amber-100">Detail</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ListView;
