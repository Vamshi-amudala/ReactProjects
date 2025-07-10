# Vamshi Amudala - Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations, custom cursor effects, and a Node.js backend for contact form functionality.

## Features

- **Modern Design**: Clean, professional design with gradient backgrounds and glass morphism effects
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Custom Cursor**: Animated cursor that responds to hover interactions
- **Responsive**: Fully responsive design that works on all devices
- **Contact Form**: Working contact form with Node.js backend and email notifications
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Performance Optimized**: Fast loading and smooth scrolling

## Tech Stack

### Frontend
- React 18
- Framer Motion (animations)
- Tailwind CSS (styling)
- React Router (navigation)
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- Nodemailer (email functionality)
- CORS

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vamshi-amudala/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit the `.env` file with your email credentials:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

### Running the Application

1. Start the backend server:
```bash
npm run server
```

2. In a new terminal, start the frontend development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Email Configuration

To enable the contact form functionality:

1. Create a Gmail App Password:
   - Go to your Google Account settings
   - Enable 2-Factor Authentication
   - Generate an App Password for this application

2. Update the `.env` file with your credentials

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── CustomCursor.jsx
│   ├── FloatingShapes.jsx
│   ├── Navbar.jsx
│   └── ScrollIndicator.jsx
├── pages/              # Page components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles

server/
└── index.js           # Express server
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors (blue tones)
- Secondary colors (purple tones)
- Accent colors (orange tones)

### Content
Update the following files with your information:
- `src/pages/About.jsx` - Personal information and education
- `src/pages/Projects.jsx` - Your projects and GitHub links
- `src/pages/Skills.jsx` - Your technical skills
- `src/pages/Contact.jsx` - Contact information

### Animations
Animations are handled by Framer Motion. You can customize:
- Animation variants in each component
- Transition durations and easing
- Hover effects and micro-interactions

## Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform

### Backend (Heroku/Railway)
1. Set up environment variables on your hosting platform
2. Deploy the server code
3. Update the API endpoint in the Contact component

## Performance Optimizations

- Lazy loading of images
- Code splitting with React Router
- Optimized animations with Framer Motion
- Compressed assets and fonts
- Efficient CSS with Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: vamshiamudala126@gmail.com
- **Phone**: +91 6302904268
- **LinkedIn**: [Vamshi Amudala](https://www.linkedin.com/in/vamshi-amudala-b9296a229)
- **GitHub**: [Vamshi-amudala](https://github.com/Vamshi-amudala)