import React from 'react'
import VetPic from "../assets/Images/vet.png"
const Vet = () => {
  return (
    <div className="bg-[#B9A89B] text-center text-white px-3">
      <h2 className="font-bold text-3xl pt-6">Exceptional Veterinary Care for Your Furry Friends</h2>
      <p className="text-xl px-6 py-3">At Doggie Den, we pride ourselves on providing top-notch veterinary care for your beloved pets. Our experienced team is dedicated to ensuring the health and well-being of your furry friends, offering comprehensive services tailored to meet their unique needs. From routine check-ups to advanced medical treatments, you can trust us to deliver the highest standard of care with compassion and expertise.</p>
      <div>
        <img className="w-11/12" src={VetPic} alt="vet"/>
      </div>
    </div>
  )
}

export default Vet