// import React from "react";
import { teko } from "@/app/utils/fonts";
import Image from "next/image";

import image1 from "./../images/demolish.jpg";
import image2 from "./../images/excavation.jpg";
import image3 from "./../images/landclear.jpg";
import image4 from "./../images/bulkhead.jpg";
import image5 from "./../images/drainageDemo.jpg";
import image6 from "./../images/pilingsDrivin.jpg";

const services = [
  {
    name: "Demolition",
    desc: "Expertly dismantling structures to make way for new possibilities.",
    image: image1,
  },
  {
    name: "Excavation",
    desc: "Precise earth-moving to create the groundwork for your projects.",
    image: image2,
  },
  {
    name: "Land Clearing & Site Preperation",
    desc: "Comprehensive site preparation, including land clearing, to ensure your project starts on solid ground and meets all necessary requirements.",
    image: image3,
  },
  {
    name: "Bulkhead Construction",
    desc: "Building durable and reliable barriers to protect your property.",
    image: image4,
  },
  {
    name: "Drainage Implimentation",
    desc: "Implementing effective drainage solutions to prevent water damage.",
    image: image5,
  },
  {
    name: "Pile Driving",
    desc: "Delivering strong and stable foundations with precise pile driving techniques.",
    image: image6,
  },
];

export default function ActionAreaCard() {
  return (
    <>
      <h2 className="text-2xl my-8">Some of the services we offer include:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3
                className={` ${teko} text-2xl text-teal-600 font-semibold mb-2`}
              >
                {item.name}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
