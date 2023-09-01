import IImage from './IImage';
import ITourCategory from './ITourCategory';

export default interface ITour {
   id?: string;
   name: string;
   url: string;
   categories?: ITourCategory[];
   destination?: string;
   description: string;
   longDescription: string;
   durationHours?: number;
   price: number;
   finalPrice: number;
   moreInfo?: string;
   obs?: string;
   languages?: string;
   restrictions?: string;
   placeOfDeparture?: string;
   belongsTobring?: string;
   availability?: string;
   include?: string;
   notInclude?: string;
   textLanguage?: string;
   partner?: string;
   itinerary: any;
   photoGallery?: IImage[];
   featuredPhoto: any;
   featuredPhotoId: string;
}
