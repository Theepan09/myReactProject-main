// src/Component/Portfolio.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageModal from './ImageModal'; // Import the ImageModal component
//import './Portfolio.css'; // Import the CSS for portfolio


const Portfolio = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const UNSPLASH_ACCESS_KEY = '6Fthq51PIMQQy0VquVJYrjmQlCsBgRKsww5Zvua5PYs';
  const UNSPLASH_API_URL = 'https://api.unsplash.com/photos/?client_id=' + UNSPLASH_ACCESS_KEY;
  const UNSPLASH_SEARCH_API_URL = 'https://api.unsplash.com/search/photos/page=1&per_page=30&query=${inputValue}&client_id=' + UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(UNSPLASH_API_URL);
        console.log(response.data)
        setImages(response.data);
        setFilteredImages(response.data); // Initialize filteredImages with all images
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    // Filter images based on search query
    if (searchQuery === '') {
      setFilteredImages(images);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = images.filter(image =>
        image.alt_description?.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredImages(filtered);
    }
  }, [searchQuery, images]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading images: {error.message}</p>;

  return (
    <section id="portfolio" className="portfolio section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Pixma aims to showcase the natural wonders of the world and to give everyone the photographer mindset.
        </p>
      </div>

      {/* Search Bar */}
      <div className="container text-center">
        <input
          type="text"
          placeholder="Search images..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control"
          style={{ marginBottom: '20px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>
      <br />
      
      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          {/* Portfolio Items */}
          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {filteredImages.map((image) => (
              <div key={image.id} className="col-lg-4 col-md-6 portfolio-item isotope-item" >
                <div className="portfolio-content h-100" onClick={() => openModal(image)}>
                  <img src={image.urls.small} className="img-fluid" alt={image.alt_description}  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={closeModal}
      />
    </section>
  );
};

export default Portfolio;
