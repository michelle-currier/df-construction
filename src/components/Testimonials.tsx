// import React from "react";
// import { Card, CardContent, Typography, Grid } from "@mui/material";

const testimonials = [
  {
    name: "John Doe",
    role: "Client",
    testimonial: "This service is fantastic! Highly recommend to anyone.",
  },
  {
    name: "Jane Smith",
    role: "xyz Construction",
    testimonial: "Exceptional experience, the team was incredibly helpful.",
  },
  {
    name: "Sam Wilson",
    role: "Client",
    testimonial: "A+ service and support. I will definitely use it again.",
  },
];

const Testimonials = () => (
  <div className="mx-auto max-w-7xl w-full mb-12">
    <h4 className="text-4xl font-bold text-center my-8">Testimonials</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
      {testimonials.map((item, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg pt-6 pb-4">
          <h3 className="text-xl font-semibold mb-2 text-teal-800 px-6">
            {item.name} - <i>{item.role}</i>
          </h3>
          <hr className="border-teal-700 mt-6 mx-auto w-full" />
          <p className="text-gray-700 p-6">{item.testimonial}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
