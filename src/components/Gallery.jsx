import React from 'react';
import '../pages/css/Gallery.css'; 

const Gallery = ({ images }) => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div className="image-item" key={index}>
          <img
            src={image.pictureURL} 
            alt={image.altText}    
            className="gallery-image"
          />
          <div className="image-name">{image.pictureName}</div> {/* Display image name */}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
