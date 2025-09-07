import React from 'react';
import './WeddingDetails.css';

const WeddingDetails: React.FC = () => {
  return (
    <section className="wedding-details" id="details">
      <div className="details-container">
        <h2 className="details-title">Wedding Details</h2>

        <div className="details-frame">
          <div className="details-grid">
            <div className="details-card">
              <div className="details-card-inner">
                <img className="details-image" src="/images/tey11.jpg" alt="Wedding detail 1" />
              </div>
            </div>
            <div className="details-card">
              <div className="details-card-inner">
                <img className="details-image" src="/images/tey12.jpg" alt="Wedding detail 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;


