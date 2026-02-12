# 🏔️ Pakistan Tourism Website

A modern, responsive tourism website showcasing the breathtaking beauty of Pakistan. Built with Next.js 16, TypeScript, and Tailwind CSS, featuring stunning destinations, tour packages, and travel guides.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-38bdf8?style=flat-square&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.2.4-61dafb?style=flat-square&logo=react)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, industry-standard design with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🗺️ **18+ Destinations** - Explore beautiful locations across Pakistan
- 📦 **Tour Packages** - Curated travel packages for unforgettable experiences
- 📝 **Travel Blog** - Professional travel guides and tips
- ⚡ **Fast Performance** - Built with Next.js 16 for optimal speed
- 🎯 **SEO Optimized** - Server-side rendering and static generation
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🎨 **Active Navigation** - Highlighted active page in navigation
- 🔍 **Search & Filter** - Find destinations by location and best time to visit

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/shayan9689/tourism-website.git
cd tourism-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
tourism-website/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing and detail pages
│   ├── contact/           # Contact form page
│   ├── destinations/      # Destinations listing and detail pages
│   ├── packages/          # Tour packages listing and detail pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation bar with active states
│   ├── Footer.tsx         # Footer component
│   ├── HeroSection.tsx    # Hero section with search
│   ├── DestinationCard.tsx # Destination card component
│   └── PackageCard.tsx    # Package card component
├── lib/                   # Utility functions and data
│   ├── data.ts            # Mock data for destinations, packages, blogs
│   └── utils.ts           # Utility functions
├── public/                 # Static assets
│   └── images/            # Destination images
└── styles/                # Global styles
```

## 🛠️ Built With

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[React 19](https://react.dev/)** - UI library

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Features

- **Modern Color Scheme** - Blue/Indigo gradient theme
- **Smooth Animations** - Page transitions and hover effects
- **Active Navigation** - Visual feedback for current page
- **Responsive Cards** - Beautiful destination and package cards
- **Professional Typography** - Inter font family
- **Custom Scrollbar** - Styled scrollbars for better UX

## 📱 Pages

- **Homepage** - Hero section, featured destinations, packages, and blog preview
- **Destinations** - Browse all destinations with filters
- **Destination Detail** - Detailed information about each destination
- **Tour Packages** - View all available tour packages
- **Package Detail** - Detailed package information with highlights
- **Blog** - Travel guides and articles
- **Blog Post** - Individual blog post with full content
- **About** - Information about Pakistan Tourism
- **Contact** - Contact form and information

## 🌟 Key Features Implementation

### Active Navigation
The navbar automatically highlights the current page using Next.js `usePathname` hook.

### Dynamic Routes
All detail pages are generated statically using `generateStaticParams` for optimal performance.

### Image Optimization
Images are optimized using Next.js `Image` component with proper sizing and lazy loading.

### Search Functionality
Destinations can be searched and filtered by location and best time to visit.

## 📧 Contact

- **Email**: shayanumair.dev@gmail.com
- **Phone**: +923107679332
- **Address**: DHA Phase 8 Lahore, Pakistan

## 📝 License

This project is private and proprietary.

## 👨‍💻 Author

**Shayan Umair**
- GitHub: [@shayan9689](https://github.com/shayan9689)
- Email: shayanumair.dev@gmail.com

## 🙏 Acknowledgments

- Pakistan's beautiful destinations and landscapes
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations

---

Made with ❤️ for showcasing Pakistan's beauty
