# Tine Wedding Website

A beautiful, responsive wedding website built with React and TypeScript featuring a hero banner with countdown timer.

## Features

- **Hero Banner**: Elegant design with background image and overlay
- **Countdown Timer**: Real-time countdown to the wedding date
- **Responsive Design**: Mobile-friendly layout
- **Modern Typography**: Beautiful fonts (Dancing Script & Montserrat)
- **Navigation Menu**: Clean navigation with hover effects

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

1. Start the development server:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Customization

### Wedding Date
Edit the wedding date in `src/components/HeroBanner.tsx`:
```typescript
const weddingDate = new Date('2025-12-31T18:00:00').getTime();
```

### Couple Names
Update the names in `src/components/HeroBanner.tsx`:
```typescript
<h1 className="couple-names">Joefrey & Sheila</h1>
```

### Colors
Modify the color scheme in `src/components/HeroBanner.css`:
- Primary pink: `#E91E63`
- Dark green overlay: Various rgba values

## Project Structure

```
src/
├── components/
│   ├── HeroBanner.tsx      # Main hero banner component
│   └── HeroBanner.css      # Hero banner styles
├── App.tsx                 # Main app component
├── App.css                 # App-level styles
├── index.tsx               # Entry point
└── index.css               # Global styles

public/
├── images/
│   └── tey.jpg            # Hero background image
└── index.html             # HTML template
```

## Technologies Used

- React 18
- TypeScript
- CSS3 with modern features
- Google Fonts (Dancing Script, Montserrat)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and intended for personal use. 