import React, { useEffect, useState } from 'react';
import './Donate.css';

const Donate = ({ id }) => {
    const [donationType, setDonationType] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        address: '',
        amount: '',
        details: '',
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const [isAnimated, setIsAnimated] = useState(false);

    const handleDonateClick = (type) => {
        setDonationType(type);
        setShowForm(true);
    };

    const handleCancelClick = () => {
        setShowForm(false);
        setDonationType(null);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            address: '',
            amount: '',
            details: '',
        });
        setErrorMessage(null); 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`Donating ${formData.amount} for ${donationType} with details: ${formData.details}`);
        // Simulate submission logic
    };

    const googlePay = () => {
        // Simulate Google Pay integration logic
    };

    // Trigger animation on mount
    useEffect(() => {
        setIsAnimated(true);
    }, []);

    return (
        <div id={id}>
            <div className="donate-section">
                <h1 className="donate-title">Choose Your Donation Type</h1>
                <p className="donation-intro">
                    Your generosity can make a significant impact in the lives of those in need.
                </p>
                <div className="donation-container">
                    <div className={`donation-frame ${isAnimated ? 'visible' : ''}`} id="food-donation">
                        <h2>Donate Food</h2>
                        <p>Help combat hunger by donating non-perishable food items to support local shelters.</p>
                        <button className="donation-button" onClick={() => handleDonateClick('food')}>Donate Now</button>
                    </div>
                    <div className={`donation-frame ${isAnimated ? 'visible' : ''}`} id="clothes-donation">
                        <h2>Donate Clothes</h2>
                        <p>Contribute clothes to help those in need with essential attire and support their well-being.</p>
                        <button className="donation-button" onClick={() => handleDonateClick('clothes')}>Donate Now</button>
                    </div>
                    <div className={`donation-frame ${isAnimated ? 'visible' : ''}`} id="electronics-donation">
                        <h2>Donate Electronics</h2>
                        <p>Your unused electronics can help equip schools and families in need with essential tools.</p>
                        <button className="donation-button" onClick={() => handleDonateClick('electronics')}>Donate Now</button>
                    </div>
                    <div className={`donation-frame ${isAnimated ? 'visible' : ''}`} id="money-donation">
                        <h2>Donate Money</h2>
                        <p>Your financial contribution can support various programs and help us reach our goal.</p>
                        <button className="donation-button" onClick={() => handleDonateClick('money')}>Donate Now</button>
                    </div>
                </div>

                {showForm && (
                    <div className="donation-form">
                        <button className="cancel-button" onClick={handleCancelClick}>X Cancel</button>
                        <h2>{`Donate ${donationType.charAt(0).toUpperCase() + donationType.slice(1)}`}</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Form fields */}
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} />
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                            <label htmlFor="mobile">Mobile:</label>
                            <input type="text" id="mobile" name="mobile" required value={formData.mobile} onChange={handleChange} />
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
                            {donationType === 'money' && (
                                <>
                                    <label htmlFor="amount">Donation Amount:</label>
                                    <input type="number" id="amount" name="amount" required value={formData.amount} onChange={handleChange} />
                                </>
                            )}
                            {['clothes', 'electronics', 'food'].includes(donationType) && (
                                <>
                                    <label htmlFor="details">{`${donationType.charAt(0).toUpperCase() + donationType.slice(1)} Details:`}</label>
                                    <textarea id="details" name="details" required value={formData.details} onChange={handleChange} rows="3" style={{ width: '100%' }} />
                                </>
                            )}
                            <button type="submit" className="donation-button">Submit Donation</button>
                        </form>
                        {donationType === 'money' && (
                            <button className="donation-button" onClick={googlePay}>Pay with Google Pay</button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Donate;
