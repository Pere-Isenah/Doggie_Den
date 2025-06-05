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
    <div className="bg-primary-brown py-24 text-center">
      <div className="animate-on-scroll">
        <h2 className="text-white text-4xl font-bold p-2">Premium Dog Food</h2>
        <p className="text-white mb-8 text-lg">Nutritionally complete and balanced for every life stage</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
        {dogFoodDetails.map((food, index) => (
          <div 
            key={index} 
            className={`food-card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out pt-6 ${
              expandedCard === index ? 'expanded scale-105 z-10' : ''
            }`}
          >
            {/* Image and Basic Info */}
            <div className="relative">
              <img 
                src={food.image} 
                alt={food.foodname} 
                className="w-full h-64 object-contain p-4" 
              />
              <div className="absolute top-4 right-4 bg-primary-dark-brown text-white px-3 py-1 rounded-full">
                {food.price}
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span className="text-primary-dark-brown font-semibold">4.8</span>
              </div>
            </div>
            
            <div className="p-6">
              {/* Product Title and Stage */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary-dark-brown">{food.foodname}</h3>
                <div className="flex justify-between items-center mt-2 gap-2">
                  <div className="flex items-center gap-2">
                    <FaDog className="text-primary-dark-brown" />
                    <span className="text-sm bg-primary-brown/10 text-primary-dark-brown px-3 py-1 rounded-full">
                      {food.ageStage}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GiWeightScale className="text-primary-dark-brown" />
                    <span className="text-sm bg-primary-brown/10 text-primary-dark-brown px-3 py-1 rounded-full">
                      {food.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{food.description}</p>

              {/* Nutritional Values */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <FaChartPie className="text-primary-dark-brown" />
                  <h4 className="font-semibold text-primary-dark-brown">Nutritional Values</h4>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
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
                expandedCard === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
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
              <div className="mt-4">
                            <Link
                            to="ContactUs"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            >
              <button className="w-full bg-primary-brown text-white py-3 rounded-lg hover:bg-primary-dark-brown transition-colors mt-4">
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