import { useContext } from "react";
import { Link } from "react-router-dom";
import { CheckoutContext } from "../context/checkout_context";

export default function Delivery() {
  const { handleChange } = useContext(CheckoutContext);

  return (
    <div className="w-full p-5">
      <div className="max-w-xl mx-auto">
        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl md:p-10 ">
          <h2 className="text-xl text-gray-800 font-bold text-center mb-8">
            DELIVERY ADDRESS
          </h2>
          <form>
            <div className="my-2 border rounded-lg">
              <input
                type="text"
                id="address"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4"
                placeholder="Enter address"
                name="address"
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-2 border rounded-lg">
              <input
                type="text"
                id="city"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4"
                placeholder="Enter city"
                name="city"
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-2 border rounded-lg">
              <input
                type="number"
                id="postal"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4"
                placeholder="Enter postal code"
                name="postal"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 border rounded-lg">
              <input
                type="text"
                id="country"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4"
                placeholder="Enter country"
                name="country"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-6 grid">
              <Link to="payment">
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
