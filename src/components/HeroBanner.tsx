import React, { useState, useEffect } from 'react';
import './HeroBanner.css';

const HeroBanner: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set wedding date - you can adjust this
    const weddingDate = new Date('2025-10-04T14:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSaveTheDate = () => {
    // Create calendar event data
    const event = {
      title: 'Eleazar & Kristine Wedding',
      description: 'Join us for our special day! We can\'t wait to celebrate with you.',
      location: 'Wedding Venue', // You can update this with actual venue
      startTime: '2025-10-04T14:00:00',
      endTime: '2025-10-04T22:00:00', // Assuming 8-hour event
      organizer: 'Eleazar & Kristine'
    };

    // Generate iCalendar content
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//TinEli Wedding//Wedding Event//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${Date.now()}@tinewedding.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${event.startTime.replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTEND:${event.endTime.replace(/[-:]/g, '').split('.')[0]}Z`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      `ORGANIZER;CN=${event.organizer}`,
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'BEGIN:VALARM',
      'TRIGGER:-PT1D',
      'ACTION:DISPLAY',
      'DESCRIPTION:Reminder: Tomorrow is Eleazar & Kristine\'s Wedding!',
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    // Create a Blob with the iCalendar content
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Eleazar_Kristine_Wedding.ics'; // Suggest a filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="hero-banner">
      <div className="hero-background">
        <img src="/images/tey1.jpg" alt="Eleazar & Kristine" className="background-image" />
        <div className="overlay"></div>
      </div>
      
      <header className="hero-header">
        <div className="logo">TinEli</div>
        <nav className="navigation">
          <a href="#home">HOME</a>
          <a href="#story">STORY</a>
          <a href="#services">SERVICES</a>
          <a href="#gallery">GALLERY</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <div className="hero-content">
        <h1 className="couple-names">Eleazar & Kristine</h1>
        <p className="tagline">We Are Getting Married</p>
        
        <div className="countdown-timer">
          <div className="countdown-item">
            <div className="countdown-number">{countdown.days}</div>
            <div className="countdown-label">DAYS</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{countdown.hours}</div>
            <div className="countdown-label">HOURS</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{countdown.minutes}</div>
            <div className="countdown-label">MINUTES</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{countdown.seconds}</div>
            <div className="countdown-label">SECONDS</div>
          </div>
        </div>

        <button className="cta-button" onClick={handleSaveTheDate}>SAVE THE DATE</button>
      </div>
    </div>
  );
};

export default HeroBanner; 