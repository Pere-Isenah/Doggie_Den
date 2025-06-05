import lhasaImage from "../assets/Images/LhasaApso2.png";
import pugImage from "../assets/Images/pug2.png";
import boerboel from "../assets/Images/boerboel2.png";
import petcoolJunior from "../assets/Images/petcool_junior.jpg";
import petcoolEssen from "../assets/Images/petcool_essential.jpg";
import optimaxPup from "../assets/Images/optimax-puppy.png";
import optimaxWhole from "../assets/Images/optimax-wholesome.png";
import boosterPup from "../assets/Images/booster-puppy.png";
import boosterSport from "../assets/Images/booster-sport.png";
import pugAboutImg from "../assets/Images/lhasaMoreData.png"
import lhasaAboutImg from "../assets/Images/pugMoreData.png"
import lhasa3 from "../assets/Images/lhasa3.png"
import lhasa4 from "../assets/Images/lhasa4.png"
import pug3 from "../assets/Images/pug3.png"
import pug4 from "../assets/Images/pug4.png"
import bor1 from "../assets/Images/bor1.png"
import bor2 from "../assets/Images/bor2.png"


interface DogDetail {
  name: string;
  image: string | string[];
  description?: string;
  Group?: string;
  Size?: string;
  Coat?: string;
  Color?: string;
  Lifespan?: string;
  dogTraits?: string[] | string;
  dogGroming?: string;
  dogHealth?: string;
  exerciseNeeds?: string;
  grooming?: string;
  training?: string;
  characteristics?: Array<{
    name: string;
    rating: number;
  }>;
}


// Dog Food Details Interface
interface DogFoodDetail {
  foodname: string;
  image: string;
  size: string;
  price: string;
  description: string;
  ageStage: string;
  breedSize: string;
  keyIngredients: string[];
  nutritionalValues: {
    protein: string;
    fat: string;
    fiber: string;
    moisture: string;
    calcium: string;
  };
  keyBenefits: string[];
  feedingGuide: {
    weight: string;
    amount: string;
  }[];
}

interface dogAboutUs {
  image: string;
  name: string;
  description: string;
  dogDetails: string;
  dogTraits: string;
  dogGroming: string;
  dogHealth: string;
  Group: string;
  Size: string;
  Coat: string;
  Color: string;
  Lifespan: string;
}

export const dogDetails : DogDetail[]  = [ 
    {name: 'Lhasa Apso', image: lhasaImage },
    { name: 'Pug', image: pugImage},
    {name: 'Boerboel', image: boerboel}
  ];
  
export const dogFoodDetails: DogFoodDetail[] = [
  {
    foodname: "Optimax Puppy",
    image: optimaxPup,
    size: "15kg",
    price: "$49.99",
    description: "Complete and balanced nutrition specially formulated for puppies, supporting healthy growth and development.",
    ageStage: "Puppy (2-12 months)",
    breedSize: "All Breeds",
    keyIngredients: [
      "Fresh chicken",
      "Brown rice",
      "Fish meal",
      "Egg product",
      "Flaxseed",
      "Probiotics"
    ],
    nutritionalValues: {
      protein: "28%",
      fat: "18%",
      fiber: "3%",
      moisture: "10%",
      calcium: "1.2%"
    },
    keyBenefits: [
      "Supports brain development",
      "Builds strong bones",
      "Promotes healthy digestion",
      "Enhanced immune system"
    ],
    feedingGuide: [
      { weight: "1-5kg", amount: "50-150g/day" },
      { weight: "5-10kg", amount: "150-250g/day" },
      { weight: "10-20kg", amount: "250-400g/day" }
    ]
  },
  {
    foodname: "Optimax Adult",
    image: optimaxWhole,
    size: "20kg",
    price: "$59.99",
    description: "Premium adult dog food providing complete nutrition for maintaining optimal health and vitality.",
    ageStage: "Adult (1+ years)",
    breedSize: "All Breeds",
    keyIngredients: [
      "Fresh beef",
      "Whole grain wheat",
      "Salmon oil",
      "Sweet potato",
      "Green peas",
      "Vitamins & minerals"
    ],
    nutritionalValues: {
      protein: "24%",
      fat: "15%",
      fiber: "4%",
      moisture: "10%",
      calcium: "1.0%"
    },
    keyBenefits: [
      "Maintains muscle mass",
      "Healthy skin & coat",
      "Joint support",
      "Dental health"
    ],
    feedingGuide: [
      { weight: "5-10kg", amount: "100-200g/day" },
      { weight: "10-25kg", amount: "200-400g/day" },
      { weight: "25-40kg", amount: "400-600g/day" }
    ]
  },
  {
    foodname: "Booster Puppy Growth",
    image: boosterPup,
    size: "12kg",
    price: "$44.99",
    description: "Specially formulated for growing puppies, packed with essential nutrients for healthy development.",
    ageStage: "Puppy (2-12 months)",
    breedSize: "Small to Medium",
    keyIngredients: [
      "Chicken meal",
      "Rice",
      "Fish oil",
      "Dried eggs",
      "Beet pulp",
      "DHA supplement"
    ],
    nutritionalValues: {
      protein: "30%",
      fat: "20%",
      fiber: "3%",
      moisture: "10%",
      calcium: "1.4%"
    },
    keyBenefits: [
      "Enhanced growth",
      "Cognitive development",
      "Strong immunity",
      "Digestive health"
    ],
    feedingGuide: [
      { weight: "1-5kg", amount: "60-180g/day" },
      { weight: "5-10kg", amount: "180-300g/day" },
      { weight: "10-15kg", amount: "300-400g/day" }
    ]
  },
  {
    foodname: "Booster Adult Active",
    image: boosterSport,
    size: "18kg",
    price: "$54.99",
    description: "High-energy formula for active adult dogs, supporting endurance and muscle maintenance.",
    ageStage: "Adult (1+ years)",
    breedSize: "All Breeds",
    keyIngredients: [
      "Fresh turkey",
      "Brown rice",
      "Fish meal",
      "Pea protein",
      "Glucosamine",
      "Antioxidants"
    ],
    nutritionalValues: {
      protein: "26%",
      fat: "16%",
      fiber: "3.5%",
      moisture: "10%",
      calcium: "1.1%"
    },
    keyBenefits: [
      "Sustained energy",
      "Muscle recovery",
      "Joint health",
      "Immune support"
    ],
    feedingGuide: [
      { weight: "5-15kg", amount: "150-350g/day" },
      { weight: "15-30kg", amount: "350-550g/day" },
      { weight: "30-45kg", amount: "550-750g/day" }
    ]
  },
  {
    foodname: "Optimax Senior",
    image: optimaxWhole,
    size: "15kg",
    price: "$52.99",
    description: "Tailored nutrition for senior dogs, supporting joint health and maintaining ideal weight.",
    ageStage: "Senior (7+ years)",
    breedSize: "All Breeds",
    keyIngredients: [
      "Lean chicken",
      "Oatmeal",
      "Glucosamine",
      "Green lipped mussel",
      "L-carnitine",
      "Omega-3 & 6"
    ],
    nutritionalValues: {
      protein: "22%",
      fat: "12%",
      fiber: "5%",
      moisture: "10%",
      calcium: "0.8%"
    },
    keyBenefits: [
      "Joint support",
      "Weight management",
      "Brain function",
      "Heart health"
    ],
    feedingGuide: [
      { weight: "5-10kg", amount: "100-180g/day" },
      { weight: "10-25kg", amount: "180-350g/day" },
      { weight: "25-35kg", amount: "350-500g/day" }
    ]
  },
  {
    foodname: "Booster Weight Control",
    image: boosterSport,
    size: "14kg",
    price: "$49.99",
    description: "Specially formulated for weight management, maintaining lean muscle mass while supporting healthy weight loss.",
    ageStage: "Adult (1+ years)",
    breedSize: "All Breeds",
    keyIngredients: [
      "Lean turkey",
      "Sweet potato",
      "Green peas",
      "L-carnitine",
      "Fiber blend",
      "Probiotics"
    ],
    nutritionalValues: {
      protein: "25%",
      fat: "10%",
      fiber: "8%",
      moisture: "10%",
      calcium: "1.0%"
    },
    keyBenefits: [
      "Weight control",
      "Lean muscle",
      "Satiety support",
      "Healthy digestion"
    ],
    feedingGuide: [
      { weight: "5-10kg", amount: "90-170g/day" },
      { weight: "10-25kg", amount: "170-320g/day" },
      { weight: "25-40kg", amount: "320-480g/day" }
    ]
  }
];

export const dogAboutUs : DogDetail[]  = [ 
  {
    name: "Lhasa Apso",
    image: [lhasa4,lhasa3],
    Group: "Non-Sporting Group (AKC)",
    Size: "Small, 12-18 pounds, 10-11 inches tall",
    Coat: "Long, heavy, and dense coat",
    Color: "gold, cream, honey, or black",
    Lifespan: "12-15 years or longer",
    description: "The Lhasa Apso, an ancient breed from Tibet, is known for its regal bearing and stunning coat. Originally bred as sentinel dogs for Buddhist monasteries, these small but confident dogs carry themselves with a dignified, almost lion-like presence. Despite their small size, they possess a bold and independent spirit, making them excellent watchdogs. Their intelligence and loyalty make them wonderful companions, though they can be somewhat reserved with strangers. The breed's most distinctive feature is their floor-length coat, which served as protection against Tibet's harsh climate.",
    dogGroming:'long hair', dogHealth:'very Good',
    exerciseNeeds: "Moderate exercise needs. While energetic, they adapt well to apartment living and need daily walks and play sessions. Indoor games and short walks usually satisfy their exercise requirements, making them ideal for both active and less active owners.",
    grooming: "Their luxurious coat requires substantial maintenance. Daily brushing is essential to prevent matting and tangling. Regular professional grooming every 6-8 weeks helps maintain coat health. Special attention should be paid to keeping the face clean and eyes clear of hair irritation.",
    training: "Intelligent but independent-minded, Lhasa Apsos require patient, consistent training. Early socialization is crucial to prevent overly protective behavior. They respond well to positive reinforcement but may show stubbornness. Their keen intelligence makes them quick learners when properly motivated.",
    characteristics: [
      { name: "Independent", rating: 5 },
      { name: "Alert", rating: 4 },
      { name: "Loyal", rating: 5 },
      { name: "Confident", rating: 5 },
      { name: "Playful", rating: 4 },
      { name: "Watchful", rating: 5 }
    ]
  },
  {
    name: "Pug",
    image: [pug3,pug4],
    Group: "Toy Group (AKC)",
    Size: "Small, 14-18 pounds, 10-13 inches tall",
    Coat: "Short, smooth, and glossy",
    Color: "fawn or black",
    Lifespan: "12-15 years",
    description: "Pugs are charming, good-natured companions with a uniquely wrinkled face and captivating personality. Originally bred to be lap dogs for Chinese royalty, these compact dogs have a rich history as beloved pets. Known for their expressive faces and comical personalities, Pugs have a remarkable ability to adapt to any living situation and family dynamic. Their sociable nature and minimal exercise needs make them perfect apartment dogs and excellent family companions. Despite their small size, they have a sturdy, muscular build beneath their smooth, short coat.",
    dogGroming: 'short hair',
    dogHealth: 'Good',
    exerciseNeeds: "Low to moderate exercise needs. Short daily walks and indoor play sessions are ideal. Due to their brachycephalic (flat-faced) nature, avoid strenuous exercise in hot or humid weather. Monitor breathing during physical activity and ensure they don't overexert themselves.",
    grooming: "Regular maintenance of facial wrinkles is essential to prevent skin infections. While their short coat sheds moderately, weekly brushing helps manage loose hair. Clean facial folds daily with a damp cloth and ensure they're thoroughly dried to prevent irritation. Regular nail trimming and dental care are important aspects of their grooming routine.",
    training: "Pugs are eager to please but can be stubborn. They respond well to positive reinforcement, especially when food rewards are involved. Keep training sessions short and fun to maintain their interest. Early socialization helps develop their natural friendly disposition.",
    characteristics: [
      { name: "Affectionate", rating: 5 },
      { name: "Playful", rating: 4 },
      { name: "Gentle", rating: 5 },
      { name: "Social", rating: 5 },
      { name: "Adaptable", rating: 4 },
      { name: "Family-friendly", rating: 5 }
    ]
  },
  {
    name: "Boerboel",
    image: [bor1,bor2],
    Group: "Working Group (AKC)",
    Size: "Large, 150-200 pounds, 24-28 inches tall",
    Coat: "Short, dense, and smooth",
    Color: "fawn or brindle",
    Lifespan: "10-12 years",
    description: "The Boerboel, developed in South Africa, is a powerful and intelligent guardian breed. These imposing dogs were bred to protect farms and homesteads, combining strength with remarkable agility. Despite their intimidating size, they are known for being gentle and affectionate with their families, especially children. Their confident and calm demeanor makes them exceptional guardians, but they require experienced handling and thorough training. The breed's name derives from 'boer' (farmer) and 'boel' (dog), reflecting their heritage as farm protectors.",
    dogGroming: 'short hair',
    dogHealth: 'Good',
    exerciseNeeds: "High exercise needs. Requires substantial daily exercise including long walks, jogging, or active play sessions. Mental stimulation through training or problem-solving activities is equally important. Their energy levels and strength demand consistent physical outlets and structured activities.",
    grooming: "Their short coat requires minimal maintenance but regular brushing helps manage shedding and maintains coat health. Weekly brushing, occasional baths, and regular nail trimming are typically sufficient. Despite their low-maintenance coat, they do shed seasonally.",
    training: "Early and extensive socialization is crucial. These intelligent dogs need firm, consistent training from an experienced handler. Their protective instincts must be properly channeled through obedience training. Positive reinforcement methods work well, but clear boundaries and leadership are essential.",
    characteristics: [
      { name: "Protective", rating: 5 },
      { name: "Intelligent", rating: 4 },
      { name: "Loyal", rating: 5 },
      { name: "Confident", rating: 5 },
      { name: "Calm", rating: 4 },
      { name: "Family-oriented", rating: 5 }
    ]
  }
]
