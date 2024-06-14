import React from "react";
import { FaDog } from "react-icons/fa6";
import { Link } from "react-scroll";


export const Nav = () =>{
const MobileNav = <>
				<div>
				<ul>
					<Link>
					<li>Home</li>
					</Link>
					<Link>
					<li>Breeds</li>
					</Link>
					<Link>
					<li>Services</li>
					</Link>
					<Link>
					<li>About Us</li>
					</Link>
					<Link>
					<li>Contact Us</li>
					</Link>
				</ul>
			</div>
			</>
  return (
		<div className="grid grid-cols-3 text-center p-3">
			<div className="flex gap-1 cols-span-1">
				<span className="text-3xl">
					<FaDog />
				</span>
				<h1 className="text-3xl font-bold">Doggie Den</h1>
			</div>
			<div className="col-span-2">
				<ul className="flex  gap-5 text-lg font-bold">
					<Link>
					<li>Home</li>
					</Link>
					<Link>
					<li>Breeds</li>
					</Link>
					<Link>
					<li>Services</li>
					</Link>
					<Link>
					<li>About Us</li>
					</Link>
					<Link>
					<li>Contact Us</li>
					</Link>
				</ul>
			</div>
		</div>
    )
};