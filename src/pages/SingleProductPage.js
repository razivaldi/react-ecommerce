import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { reviews_url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import Review from "../components/Review";
const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
    review_loading,
    review_error,
    reviews,
    fetchReviews,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    fetchReviews(`${reviews_url}${id}`);
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

  if (review_loading) {
    return <Loading />;
  }
  if (review_error) {
    return <Error />;
  }

  const {
    title,
    price,
    description,
    stock,
    stars,
    _id: sku,
    brand,
    imageUrl,
  } = product;

  console.log(reviews)

  return (
    <>
      <PageHero title={title} product />
      <div className="grid md:grid-cols-2 gap-5 mt-12 p-5 mx-10 border-2 border-black rounded-2xl">
        <div className="mmx-auto">
          <ProductImages images={imageUrl} />
        </div>
        <div className="m-8">
          <h1 className="text-4xl font-bold">{title}</h1>
          <Stars stars={stars} reviews={reviews} />
          <h5 className="text-orange-500 font-semibold">
            {formatPrice(price)}
          </h5>
          <p>{description}</p>
          <div className="grid grid-cols-4">
            <p>Tersedia:</p>
            <span className="col-span-3">{stock}</span>
            <p className="row-start-2">SKU:</p>
            <span className="col-span-3 row-start-2">{sku}</span>
            <p className="row-start-3">Brand:</p>
            <span className="col-span-3 row-start-3">{brand}</span>
          </div>
          {stock > 0 && <AddToCart product={product} />}
        </div>

        {/* review section */}
        <Review reviews={reviews}/>
      </div>
    </>
  );
};

export default SingleProductPage;
