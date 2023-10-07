import React, { useEffect } from "react";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const { products_loading, products_error, featured_products } =
    useProductsContext();

  // use loading component, while fetch data
  if (products_loading) {
    return <Loading />;
  }

  //use error component, if error thrown
  if (products_error) {
    return <Error />;
  }

  //return featured products
  return (
    <>
      <div className="-mt-10">
        <h2 className="text-center border-2 border-black rounded-full py-3 bg-amber-100">
          Featured Product
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 mx-10 sm:grid-cols-2 lg:mx-16 my-16">
        {featured_products.map((product) => {
          // const { image, name, price, id } = product
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <div className="mb-20 flex justify-center">
        <Link
          to="products"
          className="w-fit px-4 py-2 rounded-full border-2 border-black font-semibold bg-orange-500 text-white hover:bg-orange-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800"
        >
          See More Products
        </Link>
      </div>
    </>
  );
};

export default FeaturedProducts;
