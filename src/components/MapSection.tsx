import React from 'react';
import './MapSection.css';

const MapSection: React.FC = () => {
  return (
    <section className="map-section" id="map">
      <div className="map-header">
        <h2 className="map-title">Main Ceremony</h2>
      </div>
      <div className="map-container">
        <div className="map-left">
          <div className="map-frame">
            {/* Replace src with your live Google Maps embed url */}
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=14.5452472,121.0670899&z=16&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        <div className="map-right">
          <h3 className="map-heading">Dambanang Pangdiyosesis Ni Santa Marta, Parokya Ni San Roque, Pateros</h3>
          <div className="map-card">
            <div className="map-card-content">
              <div className="map-card-line">
                <span className="map-dot" />
                <span className="map-label-strong">2:00 PM</span>
              </div>
              <div className="map-card-line">
                <span className="map-icon" aria-hidden>📅</span>
                <span>Saturday 4<br/>October, 2025</span>
              </div>
              <div className="map-card-line">
                <span className="map-pin" aria-hidden>📍</span>
                <span>
                  Dambanang Pang-Diyosesis ni<br/>
                  Santa Marta<br/>
                  Parokya ni San Roque<br/>
                  (Pateros Church)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;


