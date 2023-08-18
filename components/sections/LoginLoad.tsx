import ReactLoading from 'react-loading';

export default function LoginLoad() {
   return (
      <div className="h-[100vh] w-full flex items-center justify-center bg-raisin-black-light ">
         <ReactLoading
            type={'spinningBubbles'}
            color={'#16161F'}
            height={160}
            width={160}
         />
      </div>
   );
}
