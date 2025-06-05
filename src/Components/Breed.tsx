import {dogDetails} from "./BreedData"
import { Link } from '@tanstack/react-router'
import { useCardAnimation } from '../hooks/useCardAnimation';

const Breed = () => {
  useCardAnimation();
  
  return (
    <div className="bg-primary-brown h-[115rem] p-4 md:h-[48rem] grid grid-cols-1 content-center">
      <h2 className="text-4xl font-bold text-center p-3 pb-10">Our Breeds</h2>
      <div className="flex flex-col md:flex-row justify-center items-center text-center gap-12">
        {dogDetails.map((breed, index) => (
          <div 
            className="breed-card bg-white w-10/12 md:w-96 h-[480px] flex flex-col items-center rounded-lg p-5 pb-5" 
            key={index} 
            id={breed.name}
          >
            <img 
              className="h-80 md:h-80 md:w-60" 
              src={Array.isArray(breed.image) ? breed.image[0] : breed.image} 
              alt={breed.name}
            />
            <h2 className="text-xl font-bold p-3">{breed.name}</h2>
            <button className="bg-primary-brown p-3 rounded-md text-white hover:bg-primary-black">
              <Link to={`/breeds/${breed.name}`}>Know More</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Breed