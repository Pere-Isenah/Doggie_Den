import {useState} from "react";
import { FaDog } from "react-icons/fa6";
import { Link } from "react-scroll";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";



export const Nav = () =>{
  const [click,setClick] =  useState(false);
  
  const handleClick = () => {
    setClick(!click)
  }
const MobileNav =(
				<div className="absolute z-20 top-14 right-8 text-center bg-black bg-opacity-20 p-3 ">
				<ul>
					<Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
					<li className="p-1">Home</li>
					</Link>
					<Link to="Breeds" spy={true} smooth={true} offset={50} duration={500}>
					<li className="p-1">Breeds</li>
					</Link>
					<Link to="Gromming" spy={true} smooth={true} offset={50} duration={500}>
					<li className="p-1">Services</li>
					</Link>
					<Link to="AboutUs" spy={true} smooth={true} offset={50} duration={500}>
					<li className="p-1">About Us</li>
					</Link>
					<Link to="ContactUs" spy={true} smooth={true} offset={50} duration={500}>
					<li className="p-1">Contact Us</li>
					</Link>
				</ul>
			</div>
			);
  return (
		<div className="grid grid-cols-3 text-center p-3 text-white w-full absolute z-20">
			<div className="flex gap-1 cols-span-1">
				<span className="text-base md:text-3xl">
					<FaDog />
				</span>
				<h1 className="text-lg md:text-3xl font-bold">Doggie Den</h1>
			</div>
			<div className="col-span-2 hidden md:block">
				<ul className="flex  gap-5  md:text-lg">
					<Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
					<li className="hover:font-bold cursor-pointer">Home</li>
					</Link>
					<Link to="Breeds" spy={true} smooth={true} offset={50} duration={500}>
					<li className="hover:font-bold cursor-pointer">Breeds</li>
					</Link>
					<Link to="Gromming" spy={true} smooth={true} offset={50} duration={500}>
					<li className="hover:font-bold cursor-pointer">Services</li>
					</Link>
					<Link to="AboutUs" spy={true} smooth={true} offset={50} duration={500}>
					<li className="hover:font-bold cursor-pointer">About Us</li>
					</Link>
					<Link to="ContactUs" spy={true} smooth={true} offset={50} duration={500}>
					<li className="hover:font-bold cursor-pointer">Contact Us</li>
					</Link>
				</ul>
			</div>
			<div className="text-white">
			  {click&&MobileNav}
			</div>
			<button className="col-span-1 pl-16 md:hidden" onClick={handleClick}>
			  {click ? <IoCloseSharp />:<IoMdMenu />}
			</button>
		</div>
    )
};