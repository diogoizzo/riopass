import IImage from '../interfaces/IImage';
import ITour from '../interfaces/ITour';
import ITourCategory from '../interfaces/ITourCategory';

export default class Tour implements ITour {
   constructor(
      public id: string,
      public name: string,
      public categories: ITourCategory[],
      public description: string,
      public longDescription: string,
      public price: number,
      public finalPrice: number,
      public itinerary: any,
      public featuredPhoto: any,
      public featuredPhotoId: string,
      public destination?: string,
      public durationHours?: number,
      public obs?: string,
      public restrictions?: string,
      public languages?: string,
      public placeOfDeparture?: string,
      public placeOfReturn?: string,
      public timeOfDeparture?: string,
      public timeOfReturn?: string,
      public belongsTobring?: string,
      public availability?: string,
      public include?: string,
      public notInclude?: string,
      public textLanguage?: string,
      public partner?: string,
      public photoGallery?: IImage[]
   ) {}

   static createFromObject({
      id,
      name,
      categories,
      description,
      longDescription,
      price,
      finalPrice,
      itinerary,
      featuredPhoto,
      featuredPhotoId,
      destination,
      durationHours,
      obs,
      restrictions,
      languages,
      placeOfDeparture,
      placeOfReturn,
      timeOfDeparture,
      timeOfReturn,
      belongsTobring,
      availability,
      include,
      notInclude,
      textLanguage,
      partner,
      photoGallery
   }: Tour): Tour {
      return new Tour(
         id,
         name,
         categories,
         description,
         longDescription,
         price,
         finalPrice,
         itinerary,
         featuredPhoto,
         featuredPhotoId,
         destination,
         durationHours,
         obs,
         restrictions,
         languages,
         placeOfDeparture,
         placeOfReturn,
         timeOfDeparture,
         timeOfReturn,
         belongsTobring,
         availability,
         include,
         notInclude,
         textLanguage,
         partner,
         photoGallery
      );
   }

   static createMany(patients: Tour[]): Tour[] {
      return patients.map(
         ({
            id,
            name,
            categories,
            description,
            longDescription,
            price,
            finalPrice,
            itinerary,
            featuredPhoto,
            featuredPhotoId,
            destination,
            durationHours,
            obs,
            restrictions,
            languages,
            placeOfDeparture,
            placeOfReturn,
            timeOfDeparture,
            timeOfReturn,
            belongsTobring,
            availability,
            include,
            notInclude,
            textLanguage,
            partner,
            photoGallery
         }) => {
            return new Tour(
               id,
               name,
               categories,
               description,
               longDescription,
               price,
               finalPrice,
               itinerary,
               featuredPhoto,
               featuredPhotoId,
               destination,
               durationHours,
               obs,
               restrictions,
               languages,
               placeOfDeparture,
               placeOfReturn,
               timeOfDeparture,
               timeOfReturn,
               belongsTobring,
               availability,
               include,
               notInclude,
               textLanguage,
               partner,
               photoGallery
            );
         }
      );
   }
   get tourLink() {
      return `/admin/tours/${this.id}`;
   }
   get tourEditLink() {
      return `/admin/tours/editar/${this.id}`;
   }
}
