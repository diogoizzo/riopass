import React from 'react';
import ItineraryStep from '../atoms/ItineraryStep';
import IItineraryStep from '../../interfaces/IItineraryStep';
import FinalItineraryStep from '../atoms/FinalItineraryStep';

function Itinerary({ itinerary }: { itinerary: IItineraryStep[] }) {
   const orderedItinerary = itinerary.sort((a, b) => a.order - b.order);
   return (
      <div className="pt-3 pb-6">
         {orderedItinerary?.map((step, idx, arr) => {
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
