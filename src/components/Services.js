import React from "react";
import { services } from "../utils/constants";
import "./services.css";

const Services = () => {
  return (
    <>
      <h2 className="text-center border-2 border-black rounded-full py-3 bg-amber-100 my-16">
        Our Benefits
      </h2>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-14 2xl:mx-auto border border-black rounded-lg bg-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
          {services.map((service) => (
            <div key={service.id}>
              <span className="text-4xl">{service.icon}</span>
              <div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
                <div className="bg-gray-400 w-9 h-0.5"></div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-1 text-gray-600">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
// {/* <div className="section-center">
//         {/* CALL array services from constant.js */}
//         <div className="services-center">
//         {services &&
//           services.map((service) => (
//             <div key={service.id} className="service">
//               <span>{service.icon}</span>
//               <h3>{service.title}</h3>
//               <p>{service.text}</p>
//             </div>
//           ))}
//       </div>
//     </div> */}

export default Services;
