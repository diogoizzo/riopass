import ITour from './ITour';

export default interface ITourCategory {
   id?: string;
   name: string;
   enName: string;
   esName: string;
   tours?: ITour[];
}
