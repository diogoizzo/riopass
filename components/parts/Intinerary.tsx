import React from 'react';
import ItineraryStep from '../atoms/ItineraryStep';
import IItineraryStep from '../../interfaces/IItineraryStep';
import FinalItineraryStep from '../atoms/FinalItineraryStep';

function Itinerary({ itinerary }: { itinerary: IItineraryStep[] }) {
   return (
      <div className="pt-3 pb-6">
         {itinerary?.map((step, idx, arr) => {
            if (idx === arr.length - 1) {
               return (
                  <FinalItineraryStep
                     key={step.name}
                     name={step.name}
                     order={step.order}
                  />
               );
            } else {
               return (
                  <ItineraryStep
                     key={step.name}
                     name={step.name}
                     order={step.order}
                  />
               );
            }
         })}
      </div>
   );
}

export default Itinerary;
