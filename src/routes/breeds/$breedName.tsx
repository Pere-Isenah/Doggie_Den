import { createFileRoute } from '@tanstack/react-router';
import { dogAboutUs } from '../../Components/BreedData';

export const Route = createFileRoute('/breeds/$breedName')({
  component: BreedPage,
});

function BreedPage() {
  const { breedName } = Route.useParams();

  return (
    <div className="bg-primary-brown">
      {dogAboutUs.map((breed, index) =>
        breed.name === breedName ? (
          <div key={index} className="grid grid-cols-2">
            <div className="col-span-1">
              <img src={breed.image} alt={breed.name} />
            </div>
            <div className="col-span-1 mt-10">
              <h2 className="text-6xl font-bold mb-2">{breed.name}</h2>
              <p>{breed.description}</p>
              <div>
                <h4 className="mt-2.5 text-2xl font-bold">Details</h4>
                {breed.dogDetails.map((details, i) => (
                  <div key={i}>
                    <div className="flex space-x-1 mt-2">
                    <p className="font-bold bg-black text-white border border-black rounded-2xl w-1/6 h-1/2 text-center">Origin:</p>
                    <p className="inline-block">{details.Origin}</p>
                    </div>
                    <div className="flex space-x-1 mt-2">
                    <p className="font-bold bg-black text-white border border-black rounded-2xl w-1/6 h-1/2 text-center">Size:</p>
                    <p className="">{details.Size}</p>
                    </div>
                    <div className="flex space-x-1 mt-2">
                    <p className="font-bold bg-black text-white border border-black rounded-2xl w-1/6 h-1/2 text-center">Lifespan:</p>
                    <p className="">{details.Lifespan}</p>
                    </div>
                    <div className="flex space-x-1 mt-2">
                    <p className="font-bold bg-black text-white border border-black rounded-2xl w-1/6 h-1/2 text-center">Coat:</p>
                    <p className="">{details.Coat}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="mt-2.5 text-2xl font-bold">Traits</h4>
                <div className="flex space-x-1">
                {breed.dogTraits.map((trait, i) => (
               <p className="font-bold bg-black text-white border border-black rounded-2xl w-full  h-full text-center mr-2" key={i}>{trait}</p>
              ))}
              </div>
              </div>
              <div>{breed.dogGrooming}</div>
              <div>{breed.dogHealth}</div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default BreedPage;