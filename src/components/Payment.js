import { useContext } from "react";
import { Link } from "react-router-dom";
import { CheckoutContext } from "../context/checkout_context";

export default function Payment() {
  const { handlePayment } = useContext(CheckoutContext);

  return (
    <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-md">
        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 ">
          <h2 className="text-xl text-gray-800 font-bold text-center mb-5">
            PAYMENT METHOD
          </h2>
          <form>
            <div className="flex flex-col gap-y-3">
              <div className="flex">
                <input
                  type="radio"
                  name="payment"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="paypal"
                  value="paypal"
                  onClick={handlePayment}
                  required
                />
                <label
                  htmlFor="paypal"
                  className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                >
                  Paypal
                </label>
              </div>

              <div className="flex">
                <input
                  type="radio"
                  name="payment"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="Credit-Card"
                  value="Credit-Card"
                  onClick={handlePayment}
                />
                <label
                  htmlFor="Credit-Card"
                  className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                >
                  Credit Card
                </label>
              </div>

              <div className="flex">
                <input
                  type="radio"
                  name="payment"
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="Bank-transfer"
                  value="Bank-Transfer"
                  onClick={handlePayment}
                />
                <label
                  htmlFor="Bank-transfer"
                  className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                >
                  Bank Transfer
                </label>
              </div>
            </div>
            <div className="mt-6 grid">
              <Link to="/checkout/confirm">
                <button
                  type="submit"
                  className="py-3 w-full px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
                >
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
