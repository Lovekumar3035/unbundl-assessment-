# Whistle Website — Frontend Assessment

A React-based frontend built for the Unbundl Frontend Developer Assessment.
Recreates key sections of the Whistle (dental aligners) website from Figma.

## Tech Stack
- React + Vite
- Plain CSS
- DummyJSON API

## Setup Instructions

```bash
npm install
npm run dev
```

## APIs Used
- `https://dummyjson.com/products?limit=4` — WhyWhistle section cards
- `https://jsonplaceholder.typicode.com/posts?_limit=5` — FAQ section

## Approach
I broke the Figma design into 4 independent components — HeroSection, WhyWhistle, HappySmilers, and Footer. I used DummyJSON and JSONPlaceholder APIs to populate dynamic data with proper loading and error states. Each component has its own CSS file for clean separation of styles.