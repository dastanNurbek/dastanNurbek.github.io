import React from 'react';

const ImageCard = ({ imageUrl, linkUrl }) => {
  const handleClick = () => {
    window.location.href = linkUrl;
  };

  return (
    <div className="w-60 h-60 rounded-lg overflow-hidden group cursor-pointer" onClick={handleClick}>
      <div
        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
    </div>
  );
};

export default ImageCard;