import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import Header from './../Components/Header/Header'
import Breed from './../Components/Breed'
import Grooming from './../Components/Grooming'
import Food from './../Components/Food'
import Vet from './../Components/Vet'
import AboutUs from './../Components/AboutUs'
import ContactUs from "./../Components/ContactUs"
import {Element} from "react-scroll"


export const Route = createFileRoute('/Home')({
  component: Home,
})
  
  function Home() { 
    return (
    <>
    <div>
      <Header/>
      <Element name="Breeds">
      <Breed />
      </Element>
      <Element name="Gromming">
      <Grooming />
      </Element>
      <Element name="Food">
      <Food />
      </Element>
      <Element name="Vet">
      <Vet />
      </Element>
      <Element name="AboutUs">
      <AboutUs />
      </Element>
      <Element name="ContactUs">
      <ContactUs />
      </Element>
    </div>
    </>
  )
  }