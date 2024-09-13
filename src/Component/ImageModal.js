// src/Component/ImageModal.js

import React from 'react';
import './ImageModal.css'; // Import the CSS for the modal

const ImageModal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        {image && <img src={image.urls.regular} alt={image.alt_description} />}
      </div>
    </div>
  );
};

export default ImageModal;
