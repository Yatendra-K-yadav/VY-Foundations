
import React from 'react';
import './Campaign.css';
import Header from './Header';
import Footer from './Footer';
import Event from './Events';


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
                        <img src="https://images.pexels.com/photos/6591164/pexels-photo-6591164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Campaign Image 1" />
                        <img src="https://images.pexels.com/photos/6646903/pexels-photo-6646903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Campaign Image 2" />

                        {/* Additional text paragraphs */}
                        <h2>Our Mission</h2>
                        <p>Our website aims to connect generous individuals with those in need by facilitating donations and support. We are dedicated to creating a positive impact through various donation channels, including money, clothes, electronics, and other essentials.</p>
                        
                        <div className="about-section">
                            <h2>What We Offer</h2>
                            <p>We provide a platform for users to donate not only money but also educational materials, food, and shelter. Our interactive map helps users find local charities and shelters, and our calendar keeps everyone informed about upcoming events and initiatives.</p>
                        </div>
                        
                        <div className="about-section">
                            <h2>How to Donate</h2>
                            <p>Donating is easy and secure through our website. You can choose to donate money via our secure payment system, or contribute physical items such as clothes, electronics, and more. Each donation helps us achieve our goal of providing essential support to underprivileged communities.</p>
                            <p>For detailed donation options, visit our <a href="">Donate</a> page.</p>
                        </div>
                        
                        <div className="about-section">
                            <h2>Our Impact</h2>
                            <p>With your support, we have been able to make a significant difference in the lives of many individuals and families. From providing essential resources to organizing community events, every contribution helps us work towards a better future for those in need.</p>
                        </div>
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
                
            </div>
            <Event />
            <Footer />
        </>
    );
};

export default CampaignSection;
