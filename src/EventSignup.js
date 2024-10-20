// src/EventSignupSection.js
import React, { useState } from 'react';
import './EventSignup.css';

const EventSignupSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to server)
        console.log('Form submitted:', formData);
        alert('Thanks for signing up!');
    };

    return (
        <div className="event-signup-section">
            <div className="event-content">
                <div className="event-text">
                    <h2>Get Event Details!</h2>
                    <p>Stay informed about our upcoming events. Simply provide your name and email address to receive updates for multiple events!</p>
                    <img src="your-image-url-1" alt="Event Image 1" />
                    <img src="your-image-url-2" alt="Event Image 2" />
                </div>

                <div className="form-container">
                    <h3>Sign Up for Event Updates</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventSignupSection;
