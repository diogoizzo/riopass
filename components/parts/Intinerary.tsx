import React from 'react';
import ItineraryStep from '../atoms/ItineraryStep';
import IItineraryStep from '../../interfaces/IItineraryStep';

function Itinerary({ itinerary }: { itinerary: IItineraryStep[] }) {
   return (
      <div className="pt-3">
         {itinerary?.map((step) => (
            <ItineraryStep
               key={step.name}
               name={step.name}
               order={step.order}
            />
         ))}
      </div>
   );
}

export default Itinerary;
