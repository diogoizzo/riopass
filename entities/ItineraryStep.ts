import IItineraryStep from '../interfaces/IItineraryStep';

export default class ItineraryStep implements IItineraryStep {
   constructor(public id: string, public name: string, public order: number) {}
}
