import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Product from "../components/Product";
const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <>
      <PageHero title={name} product />
      <div className="grid md:grid-cols-2 mt-20 items-center">
        <div className="ml-10">
        <ProductImages images={images} />
        </div>
        <div className="mx-10 my-10">
          <h1 className="text-4xl font-bold">{name}</h1>
          <Stars rating={stars} reviews={reviews} />
          <h5>{formatPrice(price)}</h5>
          <p>{description}</p>
          <div className="grid grid-cols-4">
            <p>Tersedia:</p>
            <span className="col-span-3">{stock}</span>
            <p className="row-start-2">SKU:</p>
            <span className="col-span-3 row-start-2">{sku}</span>
            <p className="row-start-3">Brand:</p>
            <span className="col-span-3 row-start-3">{company}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
