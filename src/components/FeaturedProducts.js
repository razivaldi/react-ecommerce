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
      <div className="mt-20">
        <h1 className="text-center">Featured Product</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 mx-10 sm:grid-cols-2 lg:mx-16 my-16">
        {featured_products.map((product) => {
          // const { image, name, price, id } = product
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <div className="mb-20">
        <Link to='products'>
          <button
            type="button"
            className="mx-auto w-fit px-4 py-5 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800"
          >
            See Another Collection
          </button>
        </Link>
      </div>
    </>
  );
};

export default FeaturedProducts;
