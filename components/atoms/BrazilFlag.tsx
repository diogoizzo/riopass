import Image from 'next/image';
import React from 'react';

function BrazilFlag({ className }: { className: string }) {
   return (
      <div className={className}>
         <Image
            width={1060}
            height={742}
            src={'/img/Flag_of_Brazil.svg'}
            alt="Icone de bandeira do brasil"
         />
      </div>
   );
}

export default BrazilFlag;
