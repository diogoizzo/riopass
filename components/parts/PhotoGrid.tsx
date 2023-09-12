import React from 'react';
import Image from 'next/image';

function PhotoGrid() {
   return (
      <div>
         <div className="w-full px-4 relative h-96 text-center rounded-md overflow-hidden">
            <Image
               className="rounded-md inline-block"
               src={'/img/cristo.jpg'}
               fill={true}
               alt="imagem do cristo redentor"
               style={{ objectFit: 'contain' }}
            />
         </div>
         <div className="w-full mt-3 grid gap-3 grid-cols-4">
            <div className="relative h-48">
               <Image
                  className="rounded-sm"
                  src={'/img/cristo.jpg'}
                  fill={true}
                  alt="imagem do cristo redentor"
                  style={{ objectFit: 'cover' }}
               />
            </div>
            <div className="relative h-48">
               <Image
                  className="rounded-sm"
                  src={'/img/cristo.jpg'}
                  fill={true}
                  alt="imagem do cristo redentor"
                  style={{ objectFit: 'cover' }}
               />
            </div>
            <div className="relative h-48">
               <Image
                  className="rounded-sm"
                  src={'/img/cristo.jpg'}
                  fill={true}
                  alt="imagem do cristo redentor"
                  style={{ objectFit: 'cover' }}
               />
            </div>
            <div className="relative h-48">
               <Image
                  className="rounded-sm"
                  src={'/img/cristo.jpg'}
                  fill={true}
                  alt="imagem do cristo redentor"
                  style={{ objectFit: 'cover' }}
               />
            </div>
            <div className="relative h-48">
               <Image
                  className="rounded-sm"
                  src={'/img/cristo.jpg'}
                  fill={true}
                  alt="imagem do cristo redentor"
                  style={{ objectFit: 'cover' }}
               />
            </div>
            <div className="relative h-48">
               <Image
                  className="rounded-sm"
                  src={'/img/cristo.jpg'}
                  fill={true}
                  alt="imagem do cristo redentor"
                  style={{ objectFit: 'cover' }}
               />
            </div>
         </div>
      </div>
   );
}

export default PhotoGrid;
