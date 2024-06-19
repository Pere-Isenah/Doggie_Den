import lhasaImage from "../assets/Images/LhasaApso2.png";
import pugImage from "../assets/Images/pug2.png";
import boerboel from "../assets/Images/boerboel2.png";
import petcoolJunior from "../assets/Images/petcool_junior.jpg";
import petcoolEssen from "../assets/Images/petcool_essential.jpg";
import optimaxPup from "../assets/Images/optimax-puppy.png";
import optimaxWhole from "../assets/Images/optimax-wholesome.png";
import boosterPup from "../assets/Images/booster-puppy.png";
import boosterSport from "../assets/Images/booster-sport.png";


interface DogDetail {
  name: string;
  image: string; 
  dogName: string;
}

// Dog Food Details Interface
interface DogFoodDetail {
  foodname: string;
  image: string; 
  size: string;
  type: string;
  description: string;
  ingredient: string;
}

export const dogDetails : DogDetail[]  = [ 
    {name: 'Lhasa Apso', image: lhasaImage, dogName: 'Lhasa Apso' },
    { name: 'Pug', image: pugImage, dogName: 'pug'},
    {name: 'Boerboel', image: boerboel, dogName: "boerboel" }
  ];
  
export const dogFoodDetails : DogFoodDetail[]= [
  {foodname: "Pet Cool junior", image: petcoolJunior,size: "18kg", type:"Junior", description: "pet cool junior is a complete and balanced dog food diet for juniors from 6 weeks. it meets all everyday nutritional needs for puppies health and provides all the vitamin and minerals necessary for optimal growth",
   ingredient: "Ground whole corn, Animal Fat, Beet pulp, ground whole wheat, Meat and bone meal, Brewers rice, Corn and gluten meal",  },
  {foodname: "Pet Cool Essential", image: petcoolEssen,size: "18kg", type:"Essential", description: "pet cool junior is a complete and balanced dog food diet for adult dogs. it meets all the nutritional needs of your dog. it's the best dog food that will help maintain a healthy digestive system  and promote healthy skin and a shiny coat",
   ingredient: "Ground whole corn, Animal Fat, Beet pulp, ground whole wheat, Meat and bone meal, Brewers rice, Corn and gluten meal",  },
  {foodname: "Optimax Puppy", image: optimaxPup,size: "22kg", type:"Puppy", description: "pet cool junior is a complete and balanced dog food diet for juniors from 6 weeks. it meets all everyday nutritional needs for puppies health and provides all the vitamin and minerals necessary for optimal growth",
   ingredient: "Chicken meal, Wheat, Wheat middling, Animal fat, Corn, Corn gluten feed, Fish meal, yeast, natural enchcers, salt, probiotic, Vitamins and Minerals premix",  },
  {foodname: "Optimax Wholesome", image: optimaxWhole,size: "33kg", type:"wholesome", description: "pet cool junior is a complete and balanced dog food diet for juniors from 6 weeks. it meets all everyday nutritional needs for puppies health and provides all the vitamin and minerals necessary for optimal growth",
   ingredient: "Chicken meal, Wheat, Wheat middling, Animal fat, Corn, Corn gluten feed, Fish meal, yeast, natural enchcers, salt, probiotic, Vitamins and Minerals premix",  },
  {foodname: "Booster Puppy", image: boosterPup,size: "10kg", type:"Puppy", description: "pet cool junior is a complete and balanced dog food diet for juniors from 6 weeks. it meets all everyday nutritional needs for puppies health and provides all the vitamin and minerals necessary for optimal growth",
   ingredient: "Chicken meal, Peans, Rice, Animal fat, Dried beet pulp, Fish meal, Chicken Digest(liquid), carrot, Egg Product, Spinach, Vitamin and Mineral premix",  },
  {foodname: "Booster Sport", image:boosterSport,size: "15kg", type:"Sport", description: "pet cool junior is a complete and balanced dog food diet for juniors from 6 weeks. it meets all everyday nutritional needs for puppies health and provides all the vitamin and minerals necessary for optimal growth",
   ingredient: "Chicken meal, Peans, Rice, Animal fat, Dried beet pulp, Fish meal, Chicken Digest(liquid), carrot, Egg Product, Spinach, Vitamin and Mineral premix",  },
]
