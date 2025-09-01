// components/Contact.jsx
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    alert('Thanks for your message! I\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Get In Touch</h2>
          <p>Feel free to contact me for any work or suggestions</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info fade-in">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4>Email</h4>
                <p>singhshaurya403@gmail.com.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4>Phone</h4>
                <p>9310099379</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Location</h4>
                <p>New Delhi, India</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form fade-in">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                ></textarea>
              </div>
              
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;