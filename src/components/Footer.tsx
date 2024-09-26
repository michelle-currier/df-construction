import React from "react";

const Footer = () => (
  <>
    <hr className="w-full border-gray-600 mt-6" />
    <div className="w-full flex justify-between items-end px-6 p-4">
      <div className="w-1/2">
        <p className="text-sm">
          Built by{" "}
          <a
            href="https://mcurrier.com"
            target="_blank"
            className="text-teal-300 border-teal-300 border-b "
          >
            m.currier designs
          </a>
        </p>
      </div>
      <div className="w-1/2 text-right">
        <p className="text-sm">©DF Construction Services 2024</p>
      </div>
    </div>
  </>
);

export default Footer;
