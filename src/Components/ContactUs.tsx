import React from 'react';
import ContactUsPic from "../assets/Images/contactUsPic.png";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaTiktok } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="text-center bg-primary-green p-3">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <img src={ContactUsPic} alt="ContactUs" />
        </div>
        <div className="col-span-1 grid grid-rows-4 gap-0">
          <div className="flex items-center mt-2">
            <FaInstagram />
            <p className="pl-2">Doggie_Den</p>
          </div>
          <div className="flex items-center mt-2">
            <MdMailOutline />
            <p className="pl-2">Doggieden@gmail.com</p>
          </div>
          <div className="flex items-center mt-2">
            <FaTiktok />
            <p className="pl-2">DoggieDen</p>
          </div>
          <div className="flex items-center mt-2">
            <FaWhatsapp />
            <p className="pl-2">+11 0153638493</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;