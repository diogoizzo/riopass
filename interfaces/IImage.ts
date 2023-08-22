import ITour from './ITour';

export default interface IImage {
   id?: string;
   name?: string;
   description?: string;
   src: string;
   tour: ITour;
   tourId: string;
}
