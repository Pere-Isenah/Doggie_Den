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
      <div className="grid place-items-center">
        <div className="grid place-items-center">
          <img src={ContactUsPic} alt="ContactUs" />
        </div>
        <div className="grid grid-cols-4 gap-0 w-9/12 pb-5 place-content-center">
          <div className="sm:colspan-1">
            <span className='inline-block text-2xl pr-2 text-center'><FaInstagram /></span>
            <p className="inline-block text-2xl font-bold">Doggie_Den</p>
          </div>
          <div className="col-span-1">
          <span className='inline-block text-2xl'><MdMailOutline /></span>
            <p className="inline-block text-2xl font-bold">Doggieden@gmail.com</p>
          </div>
          <div className="col-span-1">
          <span className='inline-block text-2xl'><FaTiktok /></span>
            <p className="inline-block text-2xl font-bold">DoggieDen</p>
          </div>
          <div className="col-span-1">
          <span className='inline-block text-2xl'><FaWhatsapp /></span>
            <p className="inline-block text-2xl font-bold">+11 0153638493</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;