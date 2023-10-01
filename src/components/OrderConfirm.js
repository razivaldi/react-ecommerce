import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import CartTotals from "./CartTotals";
import { BsBox2, BsPersonCircle, BsTruck } from "react-icons/bs";

export default function OrderConfirm() {
  const { cart } = useCartContext();
  const deliver = JSON.parse(localStorage.getItem('deliver'))
  const payment = (localStorage.getItem('payment'))

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
              <p>Shipping: {deliver.country}</p>
              <p>Pay Method: {payment}</p>
            </div>
          </div>
          <div className="flex">
            <span className="p-3 w-fit text-2xl h-fit block bg-orange-400 rounded-full">
              <BsBox2 />
            </span>
            <div className="ml-4">
              <h4>Deliver to</h4>
              <p>Address:{deliver.city} {deliver.address}, {deliver.postal}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-4/6 mx-auto">
            {cart.map((item) => {
              return (
                <div key={item.id} className="flex bg-gray-200 items-center justify-between rounded-lg p-2 my-2">
                  <div className="flex items-center p-2 w-2/6 ">
                    <img
                      src={item.image}
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
          <div className="w-1/4 relative self-end">
            <CartTotals />
          </div>
        </div>
      </div>
    </>
  );
}
