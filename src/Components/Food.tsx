import React from 'react'
import {dogFoodDetails} from "./BreedData"

const Food = () => {
  return (
    <div className="bg-primary-brown flex flex-wrap gap-4 p-4 justify-center items-center">
    {dogFoodDetails.map((food,index)=>(
    <div key={index} className="bg-white text-center p-4 rounded-md">
      <img src={food.image} className="md:h-80 md:w-60" />
      <h3 className="text-2xl font-bold">{food.foodname}</h3>
      <p>Size</p>
      <p>{food.size}</p>
      <p>Description</p>
      <p>{food.descriptions}</p>
      <p>Ingredient</p>
      <p>{food.ingredient}</p>
      <button className="bg-primary-brown p-3 rounded-md text-white">Buy</button>
    </div>
    ))}
    </div>
  )
}

export default Food