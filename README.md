# 🦆 Robot Duck Website

A whimsical, multi-page website featuring robot ducks, classic cartoon characters, agricultural history, and bird conspiracy theories—where cold steel meets sunlit waters and whimsy floats effortlessly.

![Robot Duck Screenshot](./robot-duck.jpg)

## 📜 Project Description

This playful project features:

- Main landing page with robot duck image and email subscription form
- Scientific analysis of real ducks with taxonomy and facts
- Celebrity ducks archive with profiles of famous cartoon ducks
- F.H. King biography page covering his agricultural observations
- "Birds Aren't Real" movement analysis and timeline
- Interactive research lab with chat interface
- Robot Duck product shop (currently sold out due to migration)
- Duck business economics with market data
- Legal policies with duck-themed terms of service
- Comprehensive sitemap for easy navigation

All pages feature consistent styling, responsive design, and smooth transitions for a seamless user experience.

---

## 🚀 Getting Started

### Prerequisites:
- Node.js (v14+ recommended)
- npm

### Install dependencies:
```bash
npm install
```

### Run locally:
```bash
npm start
```

Visit `http://localhost:5000` to view the site.

### Deploy to GitHub Pages:
```bash
npm run build
npm run deploy
```

---

## 📁 Project Structure

```
/robot-duck
├── index.html                     # Main landing page
├── about-real-ducks.html     # Scientific duck information
├── celebrity-ducks.html      # Cartoon duck characters
├── fake-birds.html           # Birds Aren't Real analysis
├── fh-king.html              # F.H. King biography
├── further-research.html     # Interactive lab
├── duck-data.html            # Duck market economics
├── shop.html                 # Product page (sold out)
├── legal-policies.html       # Terms & policies
├── sitemap.html                   # Site navigation overview
├── robot-duck.jpg                 # Main robot duck image
├── robot-duck-2.jpg               # Scientific specimen image
├── robot-duck-3.jpg               # Research lab specimen
├── fix-navigation.js              # Link fixing script
├── package.json                   # Project configuration
└── README.md                      # This file
```

---

## 🛠 Customizing

* All content is contained in the HTML files using inline CSS
* Images can be replaced with your own (maintain the same filenames)
* Navigation between pages is handled through relative links
* Email form can be connected to an actual service by updating form action

---

## 🔧 Fixing Navigation

If you rename any files or notice navigation issues, you can run the included fix script:

```bash
node fix-navigation.js
```

This will update all links across the site to maintain consistent navigation.

---

## 📦 Deployment

Deploy to GitHub Pages using the included scripts, or use any static site hosting:

* [GitHub Pages](https://pages.github.com/)
* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/)
* [Surge](https://surge.sh/)

---

## 📜 License

- Apache 2.0

---

## ✨ Credits

Created by [afrigino](https://github.com/afrigino)
