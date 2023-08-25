import IImage from '../interfaces/IImage';
import ITour from '../interfaces/ITour';

export default class Image implements IImage {
   constructor(
      public id: string,
      public src: string,
      public tour: ITour,
      public tourId: string,
      public name?: string,
      public description?: string,
      public awsFileName?: string,
      public featuredOfTour?: ITour,
      public featuredOfTourId?: String
   ) {}

   static createFromObject({
      id,
      src,
      tour,
      tourId,
      name,
      description,
      awsFileName,
      featuredOfTour,
      featuredOfTourId
   }: IImage): Image {
      return new Image(
         String(id),
         src,
         tour,
         tourId,
         name,
         description,
         awsFileName,
         featuredOfTour,
         featuredOfTourId
      );
   }

   static createMany(images: IImage[]): Image[] {
      return images.map(
         ({
            id,
            src,
            tour,
            tourId,
            name,
            description,
            awsFileName,
            featuredOfTour,
            featuredOfTourId
         }) => {
            return new Image(
               String(id),
               src,
               tour,
               tourId,
               name,
               description,
               awsFileName,
               featuredOfTour,
               featuredOfTourId
            );
         }
      );
   }
}
