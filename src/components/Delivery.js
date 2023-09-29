import { Link } from "react-router-dom";

export default function Delivery() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-xl text-gray-800 font-bold sm:text-3xl"></h2>
        </div>
        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 ">
          <h2 className="text-xl text-gray-800 font-bold text-center">
            DELIVERY ADDRESS
          </h2>
          <form>
            <div className="mb-4 sm:mb-8">
              <input
                type="text"
                id="address"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4"
                placeholder="Enter address"
              />
            </div>
            <div className="mb-4 sm:mb-8">
              <input
                type="text"
                id="city"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4"
                placeholder="Enter city"
              />
            </div>
            <div className="mb-4 sm:mb-8">
              <input
                type="text"
                id="postal"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4"
                placeholder="Enter postal code"
              />
            </div>
            <div className="mb-4 sm:mb-8">
              <input
                type="text"
                id="country"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4"
                placeholder="Enter country"
              />
            </div>
            <div className="mt-6 grid">
              <Link to='/checkout/payment'>
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
