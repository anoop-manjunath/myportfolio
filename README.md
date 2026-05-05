# My Portfolio

Personal portfolio website built with React to showcase my work, skills, projects, and resume.

## Tech Stack

- React 18
- React Router
- React Icons
- Lottie React
- React PDF
- React Spinners
- React Parallax Tilt

## Features

- Multi-page portfolio layout
- Responsive design
- Animated sections and preloader
- Projects showcase
- Resume preview and download
- Easy-to-edit React component structure

## Getting Started

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

The app runs in development mode at `http://localhost:3000` by default. If that port is already in use, React will prompt for another one.

## Available Scripts

### `npm start`

Runs the app in development mode.

### `npm run build`

Builds the app for production into the `build/` folder.

### `npm test`

Launches the test runner in interactive watch mode.

## Project Structure

```text
Portfolio/
├── public/
├── src/
│   ├── Components/
│   ├── images/
│   ├── LottieFiles/
│   └── Resume.pdf
├── package.json
└── README.md
```

## Customization

To personalize the portfolio, update the content inside `src/Components/` and replace assets such as:

- profile text and social links
- project cards
- resume file
- images and animations
- page metadata in `public/index.html`

## Deployment

Create a production build with:

```bash
npm run build
```

You can deploy the generated `build/` output to platforms such as Vercel, Netlify, or GitHub Pages.
