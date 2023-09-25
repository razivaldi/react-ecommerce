import React from "react";
import { PageHero } from "../components";
import toko from "../assets/toko.png";
import "./aboutpage.css";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <h1 className="text-center mt-10 mb-5 font-semibold">About Us</h1>
      <div className="sm:flex items-center m-10">
        <img src={toko} className="w-1/2 h-1/2 mx-auto md:w-2/6 md:h-2/6" />
        <p className="p-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
