import React from 'react'
import {dogFoodDetails} from "./BreedData"

const Food = () => {
  return (
    <div className="bg-primary-brown py-24 text-center">
      <h2 className="text-white text-4xl font-bold p-2">Food</h2>
      <p className="text-white mb-3"> nothing but the best tasty and nurishing for your furry friend!!</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 content-center">
    {dogFoodDetails.map((food,index)=>(
    <div key={index} className="bg-white text-center p-4 rounded-md">
      <img src={food.image} className="w-40 h-64 md:h-80 md:w-60" />
      <h3 className="text-[17px] md:text-2xl font-bold">{food.foodname}</h3>
      <p className="font-bold p-1">Size</p>
      <p className="text-sm md:text-base">{food.size}</p>
      <p className="font-bold p-1">Description</p>
      <p className="text-sm md:text-base">{food.description}</p>
      <p className="font-bold p-1">Ingredient</p>
      <p className="text-sm pb-2 md:text-base">{food.ingredient}</p>
      <button className="bg-primary-brown p-3 rounded-md text-white">Buy</button>
    </div>
    ))}
    </div>
    </div>
  )
}

export default Food