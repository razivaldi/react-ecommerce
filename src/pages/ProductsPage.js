import React from "react";
import { Filters, ProductList, Sort, PageHero } from "../components";
import "./productspage.css";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <div className="page border-2 border-black rounded-2xl -my-14 pb-32">
        <div className="section-center products">
          <Filters />
          <div className="mr-3">
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
