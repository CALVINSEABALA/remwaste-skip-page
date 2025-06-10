# 🚛 Skip Selector Redesign

This project is a complete redesign of the original skip selector page, built with **Next.js** and **Tailwind CSS**. The goal was to create a modern, visually appealing, and highly responsive UI that works seamlessly on both mobile and desktop devices while keeping all original functionality intact.

The design incorporates **glassmorphism** effects and smooth animations, all implemented with clean, maintainable React code and Tailwind CSS styling.

---

## ✨ Features

- Fully responsive layout optimized for mobile and desktop
- Glassmorphism design style for a modern look and feel
- Animated interactions for enhanced user experience
- Dynamic loading of skip options from a remote API
- Clean, reusable React components
- Hosted on Netlify and available on CodeSandbox for easy testing

---

## 📸 Demo

- **Live Site:** [https://remwaste-skip-page.netlify.app/](https://remwaste-skip-page.netlify.app/)  
- **Sandbox Preview:** [https://codesandbox.io/p/github/CALVINSEABALA/remwaste-skip-page/main?import=true](https://codesandbox.io/p/github/CALVINSEABALA/remwaste-skip-page/main?import=true)

---

## 🛠️ Tech Stack

- Next.js — React framework for server-side rendering and routing  
- Tailwind CSS — Utility-first CSS framework for styling  
- Supabase Storage — Used to store skip images  
- Netlify — Deployment platform  
- Framer Motion (optional) — For animations

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed (recommended version >= 14.x).

### Installation

1. Clone the repository

```bash
git clone https://github.com/CALVINSEABALA/remwaste-skip-page.git
cd remwaste-skip-page

```


2. Install Dependencies



```bash
npm install

```
3. Create .env file


```bash
touch .env

```

4. Run the start command

```bash
npm run dev

```

Paste in to .env
```bash
NEXT_PUBLIC_SKIP_IMAGE_BASE=https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes
NEXT_BASE_URL=https://app.wewantwaste.co.uk/api/skips

```

5. Open the app in your browser

    Visit http://localhost:3000


6. 📂 Project Structure

```bash

├── components/          # Reusable UI components 
├── pages/               # Next.js pages and routing
├── public/              # Static assets
├── styles/              # Tailwind and global styles
├── utils/               # API utilities and helpers
└── .env                 # Environment variables (not committed to Git)

```



                            👩‍💻 Author
                Developed with ❤️ by Calvin M Seabala



