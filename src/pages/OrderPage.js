import { useEffect, useState } from "react";
import { useUserContext } from "../context/user_context";
import axios from "axios";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

export default function OrderPage() {
  const { userState } = useUserContext();
  const [order, setOrder] = useState({});
  const getOrders = async () => {
    
    let token = JSON.parse(localStorage.getItem("userInfo")).token
    try {
    console.log(userState.userId);
    
      const response = await axios({
        method: "POST",
        url:`${process.env.REACT_APP_SHOP_URL}/user-orders`,
        data: {
          userId: userState.userId
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      });
      const result = response.data;
      setOrder(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  console.log("order", order);

  return (
    <div className="w-10/12 mx-auto ">
      <h1 className="text-3xl font-bold text-center m-10">Order History</h1>
      <div className="grid grid-cols-[400px_1fr_1fr_1fr] text-center font-semibold">
    <div >Item</div>
    <div >Price</div>
    <div >Quantity</div>
    <div >Subtotal</div>
</div>
      {order.length > 0 && order.map((item) => (
        <div key={item._id} className="grid grid-cols-[400px_1fr_1fr_1fr] my-2 rounded-lg items-center text-center bg-neutral-200">
        <div className="flex items-center p-2">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/${item.productId.imageUrl[0]}`}
            className="border border-black rounded-xl w-2/5 h-auto"
          />
          <span className="text-left ml-3">
            <Link to={`/products/${item.productId._id}`}>
            <h4>{item.title}</h4>
            </Link>
            <p>
              Color :
              <span
                className="h-4 w-4 border border-black rounded-full ml-2 inline-block"
                style={{ backgroundColor: item.color }}
              ></span>
            </p>
          </span>
        </div>
        <div>{formatPrice(item.productId.price)}</div>
        <div>{item.quantity} pcs</div>
        <div>{formatPrice(item.productId.price * item.quantity)}</div>
      </div>
      ))}
    </div>
  );
}
