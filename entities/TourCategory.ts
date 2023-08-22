import ITour from '../interfaces/ITour';
import ITourCategory from '../interfaces/ITourCategory';

export default class TourCategory {
   constructor(
      public id: string,
      public name: string,
      public enName: string,
      public esName: string,
      public tours?: ITour[]
   ) {}
   static createFromObject({
      id,
      name,
      enName,
      esName,
      tours
   }: ITourCategory): TourCategory {
      return new TourCategory(String(id), name, enName, esName, tours);
   }

   static createMany(categories: ITourCategory[]): TourCategory[] {
      return categories.map(({ id, name, enName, esName, tours }) => {
         return new TourCategory(String(id), name, enName, esName, tours);
      });
   }
}
