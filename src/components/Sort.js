import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import "./sort.css";

const Sort = () => {
  const {
    filtered_products: products,
    setGridView,
    setListView,
    updateSort,
    sort,
    grid_view,
  } = useFilterContext();

  return (
    <div className="section-sort">
      <div className="btn-container">
        <button type="button" onClick={setGridView}>
          <BsFillGridFill />
        </button>
        <button type="button" onClick={setListView}>
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <span>
        Sort by{" "}
        <form className="inline">
          <select onChange={updateSort} value={sort}>
            <option value="price-lowest">Lowest Price</option>
            <option value="price-highest">Highest Price</option>
            <option value="name-a">A-Z</option>
            <option value="name-z">Z-A</option>
          </select>
        </form>
      </span>
    </div>
  );
};

export default Sort;
