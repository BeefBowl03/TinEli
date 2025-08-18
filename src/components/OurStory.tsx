import React from 'react';
import './OurStory.css';

const OurStory: React.FC = () => {
  return (
    <section className="our-story">
      <div className="story-container">
        {/* Header Section */}
        <div className="story-header">
       
          <h1 className="story-title">Our Story</h1>

        </div>

        {/* Timeline Section */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {/* Event 1 */}
          <div className="timeline-event left">
                         <div className="story-card">
               <h3 className="card-title">It All Began on May 14</h3>
               <p className="story-date">MAY 14, 2018</p>
               <p className="card-description">
               Two strangers walked into their first day at Cardinal Health International Philippines, Inc.—nervous, hopeful, and unaware that fate had already clocked in.

From teammates to confidants, their bond grew quietly but surely. What began as casual chats, teaming up in Mobile Legends and PUBG, and sharing transportation fare after work soon blossomed into late-night talks, inside jokes, and a love that felt like home.

Now, years later, they look back on that ordinary Monday with full hearts. Because it wasn’t just the start of a job—it was the beginning of forever.
               </p>
             </div>
            <div className="story-image">
              <img src="/images/meet.jpg" alt="First Meeting" />
            </div>
          </div>

          {/* Event 2 */}
          <div className="timeline-event right">
            <div className="story-image">
              <img src="/images/feb.jpg" alt="First Date" />
            </div>
                         <div className="story-card">
               <h3 className="card-title">Love, Delivered</h3>
               <p className="story-date">FEBRUARY 14, 2019</p>
               <p className="card-description">
               On Valentine’s Day 2019, Eleazar couldn’t be there—he was in the hospital. But his love showed up anyway.

Kristine was serenaded by the company’s choir, a surprise arranged by Eleazar himself. They handed her a small white teddy bear and a heartfelt card.

It wasn’t grand, but it was deeply felt. Even from afar, he made her feel cherished.
               </p>
             </div>
          </div>

          {/* Event 3 */}
          <div className="timeline-event left">
                         <div className="story-card">
               <h3 className="card-title">February 28, A Quiet Yes</h3>
               <p className="story-date">FEBRUARY 28, 2019</p>
               <p className="card-description">
               After a week apart—Kristine on vacation, countries away—Eleazar knew what his heart had been trying to say.

On February 28, 2019, he asked her to be his girlfriend. It had been ten years since he last gave love a name.

Kristine said yes. And just like that, something beautiful began.
               </p>
             </div>
            <div className="story-image">
              <img src="/images/relationship.jpg" alt="In Relationship" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory; 