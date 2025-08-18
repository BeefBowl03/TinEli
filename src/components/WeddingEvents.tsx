import React from 'react';
import './WeddingEvents.css';

const WeddingEvents: React.FC = () => {
  return (
    <section className="wedding-events">
      <div className="events-background">
        <div className="beach-scene"></div>
      </div>
      
      <div className="events-container">
        {/* Section Title */}
        <div className="events-header">
          <h1 className="events-title">Wedding Events</h1>
        </div>

        {/* Event Cards */}
        <div className="events-cards">
          {/* Main Ceremony Card */}
          <div className="event-card">
            <h3 className="card-title">MAIN CEREMONY</h3>
            <div className="card-separator"></div>
            
            <div className="event-details">
              <div className="detail-item">
                <div className="detail-icon">🕐</div>
                <div className="detail-content">
                  <div className="time">2:00 PM</div>
                  
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">📅</div>
                <div className="detail-content">
                  <div className="date">Friday 10</div>
                  <div className="date">October, 2025</div>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">📍</div>
                <div className="detail-content">
                  <div className="location">Dambanang Pang-Diyosesis ni</div>
                  <div className="location">Santa Marta</div>
                  <div className="location">Parokya ni San Roque (Pateros Church)</div>
                </div>
              </div>
            </div>
            

          </div>

          {/* Wedding Party Card */}
          <div className="event-card">
            <h3 className="card-title">WEDDING PARTY</h3>
            <div className="card-separator"></div>
            
            <div className="event-details">
              <div className="detail-item">
                <div className="detail-icon">🕐</div>
                <div className="detail-content">
                  <div className="time">After the Ceremony</div>
                  
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">📅</div>
                <div className="detail-content">
                  <div className="date">Friday 10</div>
                  <div className="date">October, 2025</div>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">📍</div>
                <div className="detail-content">
                  <div className="location">Alta Guia</div>
                  <div className="location">Taguig City</div>
                  <div className="location">Reception Venue</div>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingEvents; 