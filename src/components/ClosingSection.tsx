import React from 'react';
import './ClosingSection.css';

const ClosingSection: React.FC = () => {
  return (
    <section
      className="closing-section"
      id="closing"
      style={{ backgroundImage: "url(/images/happy.jpg)" }}
    >
      <div className="closing-overlay" />
      <div className="closing-content">
        <h2 className="closing-title">With Love and Gratitude</h2>
        <p className="closing-text">
          We are so thrilled to be celebrating our special day with those closest to our hearts.
          Your presence is the greatest gift—thank you for the love, the laughter, and the memories
          we will cherish forever. We can’t wait to celebrate with you.
        </p>
      </div>
    </section>
  );
};

export default ClosingSection;


