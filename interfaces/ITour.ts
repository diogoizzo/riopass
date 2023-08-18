export default interface ITour {
   id?: string;
   name: string;
   categories: any;
   destination?: string;
   description: string;
   longDescription: string;
   durationHours?: number;
   price: number;
   finalPrice: number;
   obs?: string;
   languages?: string;
   restrictions?: string;
   placeOfDeparture?: string;
   placeOfReturn?: string;
   timeOfDeparture?: string;
   timeOfReturn?: string;
   belongsTobring?: string;
   availability?: string;
   include?: string;
   notInclude?: string;
   textLanguage?: string;
   partner?: string;
   itinerary: any;
   photoGallery?: any;
   featuredPhoto: any;
   featuredPhotoId: string;
}
