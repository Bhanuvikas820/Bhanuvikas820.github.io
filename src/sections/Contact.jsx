import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <motion.div 
          className="contact-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-header">
            <h2 className="contact-title">Let's build something efficient.</h2>
            <p className="contact-desc">Whether it's a backend system or an AI integration, I'm always open to discussing technical challenges.</p>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="What's on your mind?"></textarea>
            </div>
            <Button type="submit" variant="primary" className="w-full mt-4">Send Message</Button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
