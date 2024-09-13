import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageModal from './ImageModal'; // Import the ImageModal component
import './Portfolio.css'; // Import the CSS for portfolio

const Portfolio = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const UNSPLASH_ACCESS_KEY = '6Fthq51PIMQQy0VquVJYrjmQlCsBgRKsww5Zvua5PYs';
  const UNSPLASH_API_URL = `https://api.unsplash.com/photos/?client_id=${UNSPLASH_ACCESS_KEY}`;
  const UNSPLASH_SEARCH_API_URL = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${searchQuery}&client_id=${UNSPLASH_ACCESS_KEY}`;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(UNSPLASH_API_URL);
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
    const fetchFilteredImages = async () => {
      if (searchQuery === '') {
        setFilteredImages(images);
      } else {
        try {
          const response = await axios.get(UNSPLASH_SEARCH_API_URL);
          setFilteredImages(response.data.results);
        } catch (err) {
          setError(err);
        }
      }
    };

    fetchFilteredImages();
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
        <div className="portfolio-grid">
          {/* Portfolio Items */}
          <div className="row gy-4">
            {filteredImages.map((image) => (
              <div key={image.id} className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-content h-100" onClick={() => openModal(image)}>
                  <img src={image.urls.small} className="img-fluid" alt={image.alt_description} />
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
