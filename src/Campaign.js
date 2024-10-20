// src/CampaignSection.js
import React from 'react';
import './Campaign.css';
import Header from './Header';
import Footer from './Footer';
import Event from './Events';
// Sample data for donations
const donations = [
    { donor: "Anonymous", amount: "$100", date: "2024-10-19" },
    { donor: "Anonymous", amount: "$50", date: "2024-10-18" },
    { donor: "Anonymous", amount: "$25", date: "2024-10-17" },
];

const CampaignSection = () => {

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      };

    
    const targetAmount = 1000; 
    const currentAmount = donations.reduce((total, donation) => total + parseFloat(donation.amount.replace('$', '')), 0);
    const progressPercentage = Math.min((currentAmount / targetAmount) * 100, 100); 
    return (
        <>
            <Header />
            <div className="campaign-section">
                <div className="campaign-content">
                    <div className="campaign-text">
                        <h2>Join Our Campaign!</h2>
                        <p>Support our cause and make a difference in the community. Your donations will help us achieve our goals and provide necessary resources.</p>
                        <img src="your-image-url-1" alt="Campaign Image 1" />
                        <img src="your-image-url-2" alt="Campaign Image 2" />
                    </div>

                    

                    <div className="campaign-side">
                        <div className="progress-container">
                            <div className="progress-info">
                                <h3>Progress</h3>
                                <p className="progress-percentage">{progressPercentage.toFixed(0)}%</p>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
                            </div>
                            <p className="progress-date">{new Date().toLocaleDateString()}</p>
                            <button className="donate-button" onClick={() => scrollToSection('donate-section-abcd') }>Donate Now</button>
                        </div>

                        <div className="donation-list-container">
                            <h4>Anonymous Donations:</h4>
                            <div className="donation-list">
                                {donations.map((donation, index) => (
                                    <div key={index} className="donation-item">
                                        <span>{donation.donor} - {donation.amount}</span>
                                        <span className="donation-date">{donation.date}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <Event />
            </div>
            <Footer />
        </>
    );
};

export default CampaignSection;
