import ReactLoading from 'react-loading';
import Menu from '../parts/Menu';

export default function LoadingFront() {
   return (
      <div className="w-full flex justify-center pt-16  pb-24">
         <ReactLoading
            type={'spinningBubbles'}
            color={'#E0E0E0'}
            height={160}
            width={160}
         />
      </div>
   );
}
