import React from 'react';
import './Home.css';  
import Header from './Header';
import Footer from './Footer';
import MapComponent from './Map';

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      <div className="image-container">
        <img src="photo1.jpg" alt="Charity Image" className="charity-image" />
        <div className="overlay-text">
          <h2>BECOME PART OF IMPACT WE ARE MAKING</h2>
          <button className="image-button">Get Involved</button>
        </div>
        
      </div>

      <main className="home-content">
        <section className="welcome-section">
          <h1>Welcome to Our Charity</h1>
          <p>We are dedicated to making the world a better place through our community-driven efforts. Join us in our mission to help those in need and make a lasting impact.</p>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>Our mission is to provide essential resources such as food, shelter, and education to underprivileged communities. With your help, we can create sustainable solutions that uplift lives.</p>
          
        </section>

        <section className="highlights-section">
          <div className="highlight">
            <h3>Upcoming Events</h3>
            <p>Join our upcoming charity drives and community events. Every little effort counts!</p>
            
          </div>

          <div className="highlight">
            <h3>Support Our Campaigns</h3>
            <p>Support one of our ongoing campaigns and help provide for those in need.</p>
            
          </div>

          <div className="highlight">
            <h3>Donate Today</h3>
            <p>Make a difference by donating to our cause. Your contribution can change lives.</p>
            
          </div>
        </section>
      </main>
      <MapComponent />
      <Footer />
    </div>
  );
};

export default Home;
