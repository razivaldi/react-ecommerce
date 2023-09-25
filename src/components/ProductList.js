import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return (
      <>
        {console.log(products)}
        <h5 style={{ textTransform: "none" }}>Products not found.</h5>;
      </>
    );
  }

  if (products.length > 1 && grid_view) {
    return (
      <>
        <GridView products={products} />
      </>
    );
  }

  if (products.length > 1 && !grid_view) {
    return (
      <>
        <ListView products={products} />
      </>
    );
  }
};

export default ProductList;