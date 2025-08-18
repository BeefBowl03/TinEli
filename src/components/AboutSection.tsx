import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Top Section - Welcoming and Event Details */}
        <div className="welcome-section">
          <h2 className="welcome-title">Hello!</h2>
          <h2 className="event-details">October 4th, 2025</h2>
          <p className="invitation-text">We are inviting you to celebrate our wedding</p>
        </div>

        {/* Bottom Section - ONE Horizontal Container with Text on Edges, Images in Center */}
        <div className="couple-introduction">
          {/* Left Text Block - Eleazar */}
          <div className="text-block left-text">
            <h3 className="person-name">Eleazar Gonzales</h3>
            <p className="person-description">
              Eleazar is the eldest son of Edgardo and Ma. Luisa Gonzales, and the first of two siblings. He lives in Pateros, where his quiet strength and thoughtful nature reflect the close bonds of his family and community.
            </p>
          </div>

          {/* Center - Images and Heart Grouped Together */}
          <div className="images-center">
            <div className="profile-image-wrapper">
              <img src="/images/eleazarheadshot.jpg" alt="Eleazar Gonzales" className="profile-image" />
            </div>
            <span className="heart-icon">❤</span>
            <div className="profile-image-wrapper">
              <img src="/images/teyheadshot.jpg" alt="Kristine Anne Aquino" className="profile-image" />
            </div>
          </div>

          {/* Right Text Block - Kristine */}
          <div className="text-block right-text">
            <h3 className="person-name">Kristine Anne Aquino</h3>
            <p className="person-description">
              Kristine is the beloved daughter of Celso and Nonette Aquino, and the third of five siblings in a lively, loving family. She calls Taguig home—a place that's shaped her warmth, strength, and easygoing spirit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 