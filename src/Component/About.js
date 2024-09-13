import React from 'react';

const About = () => {
  return (
    <>
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
      <header style={styles.header}>
        <h1>About Pixma</h1>
      </header>
      <div style={styles.content}>
        <h2>Our Vision</h2>
        <p>
            At <strong>Pixma</strong>, we believe that every photograph tells a story. Our gallery is a celebration of the art of photography, showcasing a diverse collection of stunning images from talented photographers around the world. We aim to inspire, captivate, and engage our audience with each click of the shutter.
          </p>
          <p>
            Founded with a passion for visual storytelling, Pixma brings together exceptional photography that captures the beauty of our world. Whether it's the raw emotion of a portrait, the serene tranquility of a landscape, or the vibrant energy of urban life, our gallery offers a unique perspective on the art form.
          </p>
        </div>
        <div style={styles.content}>
          <h2>Our Story</h2>
          <p>
            Pixma was born out of a love for the visual arts and a desire to create a platform where photographers and enthusiasts can come together. Our founders, a group of avid photographers and art lovers, envisioned a space where creativity thrives and where every photograph is celebrated for its artistic value and storytelling power.
          </p>
          <p>
            Since our inception, we have curated a collection of breathtaking images, each selected for its ability to evoke emotion and spark conversation. Our gallery is more than just a display of photographs; it's a space where stories are shared, connections are made, and art is cherished.
          </p>
        </div>
        <div style={styles.content}>
          <h2>Join Us</h2>
          <p>
            We invite you to explore our gallery, immerse yourself in the world of photography, and become part of the Pixma community. Whether you're a photographer looking to showcase your work or an art lover seeking inspiration, Pixma is here to celebrate the beauty of the visual world with you.
          </p>
          <p>
            Connect with us on social media, subscribe to our newsletter, or visit our gallery to experience the magic of photography. Together, let's celebrate the art of capturing moments and sharing stories through the lens.
          </p>
      </div>

      
      </div>
    </section>
    
    <footer style={styles.footer}>
        <p>&copy; 2024 Pixma. All rights reserved.</p>
      </footer>
    </>
    
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '40px',
  },
  content: {
    marginBottom: '20px',
  },
  footer: {
    textAlign: 'center',
    padding: '10px',
    borderTop: '1px solid #ddd',
  },
};

export default About;
