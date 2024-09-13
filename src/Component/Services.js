import React from 'react'

const Services = () => {
  return (
    <>
      <section id="services" className="services section">

        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>We offer a range of photography services including portraits, events, and commercial shoots. Our expertise extends to real estate and lifestyle photography. We also specialize in nature and wildlife perspectives.</p>

        </div>{/* End Section Title */}

        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="icon flex-shrink-0"><i className="bi bi-briefcase"></i></div>
              <div>
                <h4 className="title"><a href="service-details.html" className="stretched-link">Portrait Photography</a></h4>
                <p className="description">
                  <ul style={styles.subList}>
                    <li>Individual Portraits</li>
                    <li>Family Portraits</li>
                    <li>Couples Photography</li>
                  </ul>
                </p>
              </div>
            </div>
            {/* End Service Item */}

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
              <div>
                <h4 className="title"><a href="service-details.html" className="stretched-link">Event Photography</a></h4>
                <p className="description">
                  <ul style={styles.subList}>
                    <li>Weddings</li>
                    <li>Corporate Events</li>
                    <li>Parties and Social Gatherings</li>
                  </ul>
                </p>
              </div>
            </div>{/* End Service Item */}

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
              <div>
                <h4 className="title"><a href="service-details.html" className="stretched-link">Commercial Photography</a></h4>
                <p className="description">
                  <ul style={styles.subList}>
                    <li>Product Photography</li>
                    <li>Food Photography</li>
                    <li>Fashion Photography</li>
                  </ul>
                </p>
              </div>
            </div>{/* End Service Item */}

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <div className="icon flex-shrink-0"><i className="bi bi-binoculars"></i></div>
              <div>
                <h4 className="title"><a href="service-details.html" className="stretched-link">Real Estate Photography</a></h4>
                <p className="description">
                  <ul style={styles.subList}>
                    <li>Property Listings</li>
                    <li>Architectural Photography</li>
                  </ul>
                </p>
              </div>
            </div>{/* End Service Item */}

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <div className="icon flex-shrink-0"><i className="bi bi-brightness-high"></i></div>
              <div>
                <h4 className="title"><a href="service-details.html" className="stretched-link">Lifestyle Photography</a></h4>
                <p className="description">
                  <ul style={styles.subList}>
                    <li>Daily Life</li>
                    <li>Travel Photography</li>
                  </ul>
                </p>
              </div>
            </div>{/* End Service Item */}

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
              <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week"></i></div>
              <div>
                <h4 className="title"><a href="service-details.html" className="stretched-link">Nature and Wildlife Photography</a></h4>
                <p className="description">
                  <ul style={styles.subList}>
                    <li>Wildlife</li>
                    <li>Landscapes</li>
                  </ul>
                </p>
              </div>
            </div>{/* End Service Item */}

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
              <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week"></i></div>
              <div>
                <h4 className="title"><a href="service-details.html" className="stretched-link">Sports Photography</a></h4>
                <p className="description">
                  <ul style={styles.subList}>
                    <li>Action Shots</li>
                    <li>Team and Individual Portraits</li>
                  </ul>
                </p>
              </div>
            </div>{/* End Service Item */}

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
              <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week"></i></div>
              <div>
                <h4 className="title"><a href="service-details.html" className="stretched-link">Photojournalism</a></h4>
                <p className="description">
                  <ul style={styles.subList}>
                    <li>News Stories</li>
                  </ul>
                </p>
              </div>
            </div>{/* End Service Item */}

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
              <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week"></i></div>
              <div>
                <h4 className="title"><a href="service-details.html" className="stretched-link">Drone Photography</a></h4>
                <p className="description">
                  <ul style={styles.subList}>
                    <li>Aerial Shots</li>
                  </ul>
                </p>
              </div>
            </div>{/* End Service Item */}

          </div>

        </div>

      </section>
    </>
  )
}

// Inline styles
const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    paddingTop: '30px',
    minHeight: '70px',
    borderBottom: '1px solid #ddd'
  },
  container: {
    width: '80%',
    margin: 'auto',
    overflow: 'hidden'
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: '0'
  },
  services: {
    backgroundColor: '#fff',
    padding: '20px',
    marginTop: '20px'
  },
  heading: {
    color: '#333'
  },
  list: {
    listStyle: 'none',
    padding: '0'
  },
  subList: {
    listStyle: 'none',
    padding: '0',
    margin: '10px 0 0 20px'
  }
};

export default Services
