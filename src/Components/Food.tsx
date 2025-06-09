import { useState } from 'react';
import { Link } from 'react-scroll';
import { dogFoodDetails } from "./BreedData";
import { FaStar, FaDog, FaWeight, FaChartPie } from 'react-icons/fa';
import { GiMeat, GiWeightScale } from 'react-icons/gi';
import { MdOutlineScience, MdExpandMore } from 'react-icons/md';
import { TbMeat } from 'react-icons/tb';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useFoodCardAnimation } from '../hooks/useFoodCardAnimation';

const Food = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  useScrollAnimation();
  useFoodCardAnimation();

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="bg-primary-brown py-16 text-center">
      {/* Reduce top section padding */}
      <div className="animate-on-scroll">
        <h2 className="text-white text-3xl font-bold p-2">Premium Dog Food</h2>
        <p className="text-white mb-6 text-base">Nutritionally complete and balanced for every life stage</p>
      </div>
      
      {/* Reduce gap between cards and adjust max-width */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
        {dogFoodDetails.map((food, index) => (
          <div 
            key={index} 
            className={`food-card bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 ease-in-out pt-4 ${
              expandedCard === index ? 'expanded scale-105 z-10' : ''
            }`}
          >
            {/* Reduce image size */}
            <div className="relative">
              <img 
                src={food.image} 
                alt={food.foodname} 
                className="w-full h-48 object-contain p-2" 
              />
              <div className="absolute top-2 right-2 bg-primary-dark-brown text-white px-2 py-0.5 rounded-full text-sm">
                {food.price}
              </div>
              <div className="absolute bottom-2 right-2 flex items-center gap-1">
                <FaStar className="text-yellow-400 text-sm" />
                <span className="text-primary-dark-brown font-semibold text-sm">4.8</span>
              </div>
            </div>
            
            {/* Reduce padding and text sizes */}
            <div className="p-4">
              <div className="mb-3">
                <h3 className="text-lg font-bold text-primary-dark-brown">{food.foodname}</h3>
                <div className="flex justify-between items-center mt-1 gap-2">
                  <div className="flex items-center gap-1">
                    <FaDog className="text-primary-dark-brown text-sm" />
                    <span className="text-xs bg-primary-brown/10 text-primary-dark-brown px-2 py-0.5 rounded-full">
                      {food.ageStage}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GiWeightScale className="text-primary-dark-brown text-sm" />
                    <span className="text-xs bg-primary-brown/10 text-primary-dark-brown px-2 py-0.5 rounded-full">
                      {food.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Reduce description text size */}
              <p className="text-gray-600 text-xs mb-3">{food.description}</p>

              {/* Make nutritional values more compact */}
              <div className="mb-3">
                <div className="flex items-center gap-1 mb-1">
                  <FaChartPie className="text-primary-dark-brown text-sm" />
                  <h4 className="font-semibold text-primary-dark-brown text-sm">Nutritional Values</h4>
                </div>
                <div className="grid grid-cols-3 gap-1 text-xs">
                  <div className="bg-primary-brown/5 p-2 rounded">
                    <div className="font-medium flex items-center gap-1 justify-center">
                      <GiMeat className="text-primary-dark-brown" />
                      <span>Protein</span>
                    </div>
                    <div>{food.nutritionalValues.protein}</div>
                  </div>
                  <div className="bg-primary-brown/5 p-2 rounded">
                    <div className="font-medium flex items-center gap-1 justify-center">
                      <TbMeat className="text-primary-dark-brown" />
                      <span>Fat</span>
                    </div>
                    <div>{food.nutritionalValues.fat}</div>
                  </div>
                  <div className="bg-primary-brown/5 p-2 rounded">
                    <div className="font-medium flex items-center gap-1 justify-center">
                      <MdOutlineScience className="text-primary-dark-brown" />
                      <span>Fiber</span>
                    </div>
                    <div>{food.nutritionalValues.fiber}</div>
                  </div>
                </div>
              </div>

              {/* Expand Button */}
              <button 
                onClick={() => toggleCard(index)}
                className="w-full flex items-center justify-center gap-2 text-primary-dark-brown hover:text-primary-brown transition-colors py-2"
              >
                <span>{expandedCard === index ? 'Show Less' : 'Show More'}</span>
                <MdExpandMore className={`transform transition-transform duration-300 ${
                  expandedCard === index ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Expanded Content */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedCard === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {/* Key Ingredients */}
                <div className="mt-4 border-t pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GiMeat className="text-primary-dark-brown" />
                    <h4 className="font-semibold text-primary-dark-brown">Key Ingredients</h4>
                  </div>
                  <ul className="text-sm text-gray-600 grid grid-cols-2 gap-2">
                    {food.keyIngredients.map((ingredient, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary-dark-brown rounded-full"></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Feeding Guide */}
                <div className="mt-4 border-t pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FaWeight className="text-primary-dark-brown" />
                    <h4 className="font-semibold text-primary-dark-brown">Feeding Guide</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {food.feedingGuide.map((guide, idx) => (
                      <div key={idx} className="bg-primary-brown/5 p-2 rounded">
                        <div className="font-medium">{guide.weight}</div>
                        <div className="text-gray-600">{guide.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buy Button */}
              <div className="mt-3">
                <Link
                  to="ContactUs"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <button className="w-full bg-primary-brown text-white py-2 rounded-md text-sm hover:bg-primary-dark-brown transition-colors">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;