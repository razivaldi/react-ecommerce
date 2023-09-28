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
      <div className="grid md:grid-cols-2 gap-5 mt-12 p-5 mx-10 border-2 border-black rounded-2xl">
        <div className="mmx-auto">
          <ProductImages images={images} />
        </div>
        <div className="m-8">
          <h1 className="text-4xl font-bold">{name}</h1>
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
            <span className="col-span-3 row-start-3">{company}</span>
          </div>
          {stock > 0 && <AddToCart product={product} />}
        </div>

        {/* review section */}
        <div>
          <h5 className="font-medium">REVIEWS</h5>
          <div className="bg-sky-200">No Review</div>
        </div>
        <div>
          <h5 className="font-medium">WRITE A CUSTOMER REVIEW</h5>
          <form>
            <label className="font-medium">Rating</label>
            <br />
            <select className="w-full">
              <option>Select...</option>
            </select>
            <br />
            <label className="font-medium">Comment</label>
            <br />
            <textarea className="w-full"></textarea>
            <button className="w-full bg-orange-300">SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
