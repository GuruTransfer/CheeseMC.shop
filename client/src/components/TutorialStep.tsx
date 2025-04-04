import React from 'react';

interface TutorialStepProps {
  number: number;
  title: string;
  link?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const TutorialStep: React.FC<TutorialStepProps> = ({ 
  number, 
  title, 
  link, 
  imageUrl, 
  imageAlt 
}) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  const toggleZoom = () => {
    if (imageUrl) {
      setIsZoomed(!isZoomed);
    }
  };

  const titleWithLink = link ? (
    <>
      {title.split(link).map((part, idx, array) => {
        if (idx === array.length - 1) return part;
        return (
          <React.Fragment key={idx}>
            {part}
            <a href={link} className="text-blue-600 hover:underline">{link}</a>
          </React.Fragment>
        );
      })}
    </>
  ) : title;

  return (
    <div className="mb-8 border-b pb-6">
      <h3 className="text-lg font-semibold mb-3 flex items-center">
        <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center mr-2">
          {number}
        </span>
        {titleWithLink}
      </h3>
      
      {imageUrl && (
        <div className="mt-4">
          <img 
            src={imageUrl}
            alt={imageAlt || `Bước ${number}`}
            className={`
              ${isZoomed ? 'w-full' : 'w-full md:w-4/5'} 
              mx-auto rounded-lg border border-gray-200 shadow-sm 
              ${imageUrl ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}
            `}
            onClick={toggleZoom}
          />
        </div>
      )}
    </div>
  );
};
