import React from 'react';
import Image from 'next/image';
import IImage from '../../interfaces/IImage';

interface PhotoGaleryProps {
   featuredPhoto: IImage;
   photoGallery?: IImage[];
}

function PhotoGrid({ featuredPhoto, photoGallery }: PhotoGaleryProps) {
   return (
      <div>
         <div className="w-full px-4 relative h-96 text-center rounded-md overflow-hidden">
            <Image
               className="rounded-md inline-block"
               src={featuredPhoto?.src}
               fill={true}
               alt="imagem do cristo redentor"
               style={{ objectFit: 'contain' }}
            />
         </div>
         <div className="w-full mt-3 grid gap-3 grid-cols-4">
            {photoGallery?.map((photo) => (
               <div key={photo.name} className="relative h-48">
                  <Image
                     className="rounded-sm"
                     src={photo.src}
                     fill={true}
                     alt={
                        photo.description ||
                        photo.name ||
                        'nenhuma descrição fornecida'
                     }
                     style={{ objectFit: 'contain' }}
                  />
               </div>
            ))}
         </div>
      </div>
   );
}

export default PhotoGrid;
