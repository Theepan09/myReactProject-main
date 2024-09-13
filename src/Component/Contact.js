import React, { useState } from 'react';

const Contact = () => {
    // State for form inputs and submission status
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Simulate form submission
        try {
            // In a real application, you would use fetch or axios to send the data to a server
            console.log('Form Data Submitted:', formData);

            // Simulate successful submission
            setFormStatus('success');

            // Show a prompt or confirmation dialog
            alert('Your message has been sent. Thank you!');

            // Reset the form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormStatus('error');
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <section id="contact" className="contact section">

                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Contact Us</h2>
                    <p>
                        We’d Love to Hear From You!
                        <br />
                        Whether you have a question, need support, or just want to say hello, our team is here to help. At [Your Company Name], we value open communication and are dedicated to providing you with the best experience possible.
                        <br />
                        Feel free to reach out to us through the contact form below, and we’ll get back to you as soon as possible. If you prefer, you can also contact us via phone or email. We look forward to assisting you!
                    </p>
                </div>{/* End Section Title */}

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4">

                        <div className="col-lg-5">

                            <div className="info-wrap">
                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h3>Address</h3>
                                        <p>420 North Bridge Road, Singapore 188727</p>
                                    </div>
                                </div>{/* End Info Item */}

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                    <i className="bi bi-telephone flex-shrink-0"></i>
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+65 8954 4632</p>
                                    </div>
                                </div>{/* End Info Item */}

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h3>Email Us</h3>
                                        <p>pixmasupport@gmail.com</p>
                                    </div>
                                </div>{/* End Info Item */}

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                                    frameBorder="0"
                                    style={{ border: 0, width: '100%', height: '270px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                                <div className="row gy-4">

                                    <div className="col-md-6">
                                        <label htmlFor="name-field" className="pb-2">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name-field"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="email-field" className="pb-2">Your Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email-field"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="subject-field" className="pb-2">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            id="subject-field"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="message-field" className="pb-2">Message</label>
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows="10"
                                            id="message-field"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        {formStatus === 'loading' && <div className="loading">Loading</div>}
                                        {formStatus === 'error' && <div className="error-message">An error occurred. Please try again.</div>}
                                        {formStatus === 'success' && <div className="sent-message">Your message has been sent. Thank you!</div>}

                                        <button type="submit">Send Message</button>
                                    </div>

                                </div>
                            </form>
                        </div>{/* End Contact Form */}

                    </div>

                </div>

            </section>
        </>
    );
};

export default Contact;
