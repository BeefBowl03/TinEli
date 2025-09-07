import React, { useEffect, useMemo, useRef, useState } from 'react';
import './WeddingGallery.css';

type GallerySlide = {
  imageUrl: string;
  title: string;
  photosCountLabel: string;
  alt: string;
};

const PLACEHOLDER_SLIDES: GallerySlide[] = [


  {
    imageUrl: '/images/happy.jpg',
    title: 'Two Glass of Juice',
    photosCountLabel: '12 PHOTOS',
    alt: 'Bride holding a glass of juice'
  },

  {
    imageUrl: '/images/unan.jpg',
    title: 'Two Glass of Juice',
    photosCountLabel: '12 PHOTOS',
    alt: 'Bride holding a glass of juice'
  },

  {
    imageUrl: '/images/tey2.jpg',
    title: 'Two Glass of Juice',
    photosCountLabel: '12 PHOTOS',
    alt: 'Bride holding a glass of juice'
  },
  {
    imageUrl: '/images/tey3.jpg',
    title: 'Two Glass of Juice',
    photosCountLabel: '12 PHOTOS',
    alt: 'Bride holding a glass of juice'
  },
  {
    imageUrl: '/images/tey4.jpg',
    title: 'Two Glass of Juice',
    photosCountLabel: '12 PHOTOS',
    alt: 'Bride holding a glass of juice'
  },
  {
    imageUrl: '/images/tey5.jpg',
    title: 'Two Glass of Juice',
    photosCountLabel: '12 PHOTOS',
    alt: 'Bride holding a glass of juice'
  },
  {
    imageUrl: '/images/tey6.jpg',
    title: 'Two Glass of Juice',
    photosCountLabel: '12 PHOTOS',
    alt: 'Bride holding a glass of juice'
  },
  {
    imageUrl: '/images/tey7.jpg',
    title: 'Two Glass of Juice',
    photosCountLabel: '12 PHOTOS',
    alt: 'Bride holding a glass of juice'
  },
  {
    imageUrl: '/images/tey8.jpg',
    title: 'Two Glass of Juice',
    photosCountLabel: '12 PHOTOS',
    alt: 'Bride holding a glass of juice'
  },
  {
    imageUrl: '/images/tey9.jpg',
    title: 'Two Glass of Juice',
    photosCountLabel: '12 PHOTOS',
    alt: 'Bride holding a glass of juice'
  },
  {
    imageUrl: '/images/tey10.jpg',
    title: 'Two Glass of Juice',
    photosCountLabel: '12 PHOTOS',
    alt: 'Bride holding a glass of juice'
  },
  {
    imageUrl: '/images/tey1.jpg',
    title: 'Timer starts now!',
    photosCountLabel: '8 PHOTOS',
    alt: 'Wedding table setup'
  },
  {
    imageUrl: '/images/eleazarheadshot.jpg',
    title: 'Beautiful sunset',
    photosCountLabel: '10 PHOTOS',
    alt: 'Engagement ring close up'
  },
  {
    imageUrl: '/images/relationship.jpg',
    title: 'Company\'s Conference Room',
    photosCountLabel: '12 PHOTOS',
    alt: 'Groom looking towards the horizon'
  },
  {
    imageUrl: '/images/meet.jpg',
    title: 'Useful baskets',
    photosCountLabel: '24 PHOTOS',
    alt: 'Bride and groom holding hands'
  },
  {
    imageUrl: '/images/feb.jpg',
    title: 'Skater man in the road',
    photosCountLabel: '14 PHOTOS',
    alt: 'Outdoor wedding aisle'
  },
  {
    imageUrl: '/images/bg.jpg',
    title: 'Two Glass of Juice',
    photosCountLabel: '9 PHOTOS',
    alt: 'Outdoor celebration with greenery'
  },
  {
    imageUrl: '/images/teyheadshot.jpg',
    title: 'Timer starts now!',
    photosCountLabel: '30 PHOTOS',
    alt: 'Wedding sign and tableware'
  },
  {
    imageUrl: '/images/tey.jpg',
    title: 'Beautiful sunset',
    photosCountLabel: '28 PHOTOS',
    alt: 'Beach wedding setup'
  }
];

function useAutoRotate(
  isPaused: boolean,
  onTick: () => void,
  intervalMs: number
): void {
  const savedCallback = useRef(onTick);
  useEffect(() => {
    savedCallback.current = onTick;
  }, [onTick]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => savedCallback.current(), intervalMs);
    return () => clearInterval(id);
  }, [isPaused, intervalMs]);
}

const WeddingGallery: React.FC = () => {
  const slides = useMemo(() => PLACEHOLDER_SLIDES, []);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const goTo = (index: number) => {
    const lastIndex = slides.length - 1;
    if (index < 0) {
      setCurrentIndex(lastIndex);
    } else if (index > lastIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const goNext = () => goTo(currentIndex + 1);
  const goPrev = () => goTo(currentIndex - 1);

  useAutoRotate(isHovering, goNext, 4000);

  return (
    <section className="wedding-gallery" id="gallery">
      <div className="gallery-container">
        <p className="gallery-eyebrow">OUR MEMORIES</p>
        <h2 className="gallery-title">Wedding Gallery</h2>


        <div
          className="gallery-slider"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={
                index === currentIndex ? 'gallery-slide is-active' : 'gallery-slide'
              }
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
              aria-hidden={index !== currentIndex}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              <img className="sr-only" src={slide.imageUrl} alt={slide.alt} />
              <div className="gallery-overlay" />
            </div>
          ))}

          <button
            type="button"
            className="gallery-nav gallery-nav--prev"
            aria-label="Previous slide"
            onClick={goPrev}
          >
            ‹
          </button>
          <button
            type="button"
            className="gallery-nav gallery-nav--next"
            aria-label="Next slide"
            onClick={goNext}
          >
            ›
          </button>

          <div className="gallery-dots" role="tablist" aria-label="Slide dots">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === currentIndex}
                className={index === currentIndex ? 'dot is-active' : 'dot'}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingGallery;


