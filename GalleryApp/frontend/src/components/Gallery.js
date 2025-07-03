import React from 'react';
import { DropZone } from './DropZone';

const defaultGallery = [
  {
    url: "https://worldwildschooling.com/wp-content/uploads/2024/02/European-Towns-That-Are-Like-Stepping-into-a-Fairytale_Oia-Santorini-Greece_Patryk-Kosmider_AdobeStock_50819585.jpg"
  },
  {
    url: "https://media.timeout.com/images/106257912/750/562/image.jpg"
  },
  {
    url: "https://www.gokitetours.com/wp-content/uploads/2024/09/The-Most-Beautiful-Places-to-Visit-in-Santorini-Greece-1200x900.webp"
  },
  {
    url: "https://www.hachettebookgroup.com/wp-content/uploads/2019/08/iStock-539167007.jpg?w=1024"
  },
  {
    url: "https://www.22places.com/wp-content/uploads/2025/03/pyramids-giza.jpg"
  },
  {
    url: "https://static.toiimg.com/photo/msid-103454173,width-96,height-65.cms"
  }
];

export const Gallery = ({ gallery = defaultGallery }) => {
  return (
    <div className='px-16'>
      <div className='flex items-center space-x-3 mb-6'>
        <div className='w-3 h-3 bg-orange-300 rounded-full' />
        <h1 className='text-2xl font-semibold text-gray-500'>Memories</h1>
      </div>

      <div className='grid py-5 grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {gallery.map((item, index) => (
          <img
            key={index}
            src={item.url}
            alt={`Memory ${index}`}
            className='w-96 h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-200'
          />
        ))}
        <DropZone />
      </div>
    </div>
  );
};
