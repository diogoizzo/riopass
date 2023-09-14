import React, { Dispatch } from 'react';
import Image from 'next/image';
import IImage from '../../interfaces/IImage';

interface PhotoGaleryProps {
   featuredPhoto: IImage;
   photoGallery?: IImage[];
   openModal: () => void;
   setImg: React.Dispatch<React.SetStateAction<string>>;
}

function PhotoGrid({
   featuredPhoto,
   photoGallery,
   openModal,
   setImg
}: PhotoGaleryProps) {
   function openPhotoInModal(src: string) {
      setImg(src);
      openModal();
   }
   return (
      <div className="relative z-0">
         <div className="w-full px-4 relative h-96 text-center rounded-md overflow-hidden">
            <Image
               className="rounded-md inline-block"
               src={featuredPhoto?.src}
               fill={true}
               alt={
                  featuredPhoto?.description ||
                  featuredPhoto?.name ||
                  'Nenhuma descrição fornecida'
               }
               style={{ objectFit: 'contain' }}
               onClick={() => openPhotoInModal(featuredPhoto?.src)}
            />
         </div>
         <div className="w-full mt-3 grid gap-3 grid-cols-4">
            {photoGallery?.map((photo) => (
               <button
                  key={photo?.awsFileName}
                  onClick={() => openPhotoInModal(photo?.src)}
               >
                  <div className="relative h-48">
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
               </button>
            ))}
         </div>
      </div>
   );
}

export default PhotoGrid;
