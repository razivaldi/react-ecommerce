import React, { useEffect } from "react";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2080 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2080, min: 924 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 924, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
      <h2 className="text-center border-2 mb-16 border-black rounded-full py-3 bg-amber-100">
        Featured Product
      </h2>
      <div className="my-10 mx-5">
        <Carousel responsive={responsive}>
          {featured_products.map((product) => {
            return (
              <div className="mx-3" key={product.id}>
                <Product key={product.id} {...product} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="flex justify-center">
        <Link
          to="products"
          className="w-fit px-4 py-2 rounded-full border-2 border-black font-semibold bg-orange-500 text-white hover:bg-orange-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800"
        >
          See More Products
        </Link>
      </div>
      ;
    </>
  );
};

export default FeaturedProducts;
