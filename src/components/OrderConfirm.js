import { useContext, useEffect, useState } from "react";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import CartTotals from "./CartTotals";
import { BsBox2, BsPersonCircle, BsTruck } from "react-icons/bs";
import { CheckoutContext } from "../context/checkout_context";
import { useUserContext } from "../context/user_context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function OrderConfirm() {
  const { cart } = useCartContext();
  const { deliver } = useContext(CheckoutContext);
  const { userState } = useUserContext();
  const [ order, setOrder ] = useState({})
  const navigate = useNavigate()

  const postOrder = async (datas) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SHOP_URL}/add-order`, datas, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token,
        },
      })
      const result = response.data
      alert("Your order has been placed")
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  
  const userId = userState.userId
  
  useEffect(() => {
    const item = cart.map((item) => {
      return {
        productId: item.productId,
        quantity: item.amount,
        color: item.color
      }
    })
    setOrder((state) => ({
      ...state,
      items: item,
      userId: userId,
    }))
  },[])
  

  const handleSubmit = (e) => {
    e.preventDefault()
    postOrder(order)
  }

  console.log("cart", cart)
  console.log("order", order)
  
  return (
    <>
      <div className="w-11/12 mx-auto border mt-8 border-black p-5 rounded-2xl">
        <div className="flex justify-around p-5 mb-10">
          <div className="flex">
            <span className="p-3 w-fit text-2xl h-fit block bg-orange-400 rounded-full">
              <BsPersonCircle />
            </span>
            <div className="ml-4">
              <h4>Customer</h4>
              <p>username</p>
            </div>
          </div>
          <div className="flex">
            <span className="p-3 w-fit text-2xl h-fit block bg-orange-400 rounded-full">
              <BsTruck />
            </span>
            <div className="ml-4">
              <h4>Order Info</h4>
              <p>Country: {deliver.country}</p>
              <p>Pay Method: {deliver.payment}</p>
            </div>
          </div>
          <div className="flex">
            <span className="p-3 w-fit text-2xl h-fit block bg-orange-400 rounded-full">
              <BsBox2 />
            </span>
            <div className="ml-4">
              <h4>Deliver to</h4>
              <p>
                Address: {deliver.address}, {deliver.postal}
              </p>
              <p>City: {deliver.city}</p>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between">
          <div className="w-full md:w-4/6 mx-auto md:mx-0">
            {cart.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex bg-gray-200 items-center justify-between rounded-lg p-2 pr-4 my-2"
                >
                  <div className="flex items-center p-2 w-2/6">
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/${item.image}`}
                      alt={item.name}
                      className="border border-black rounded-xl w-2/4 h-2/4 "
                    />
                    <span className="text-left ml-3">
                      <p className="font-semibold">{item.name}</p>
                      <p>
                        Color :
                        <span
                          className="h-4 w-4 rounded-full ml-2 inline-block"
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </p>
                    </span>
                  </div>
                  <div>{formatPrice(item.price)}</div>
                  <p>{item.amount}</p>
                  <div>{formatPrice(item.price * item.amount)}</div>
                </div>
              );
            })}
          </div>
          <div className=" ml-4 self-end">
            <CartTotals />
            <button onClick={handleSubmit} className="active:bg-orange-600 border-2 border-black rounded-full bg-orange-500 w-full mt-2 text-white font-semibold">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
