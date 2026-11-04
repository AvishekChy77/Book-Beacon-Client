# 📚 BookBeacon — Library Management Website

**Live site:** https://book-beacon.web.app
**Backend repo:** https://github.com/AvishekChy77/Book-Beacon-Server

BookBeacon is a modern, animated library web app — browse a growing collection across every genre, borrow in one click and return on your schedule.

## ✨ Features

- **Animated UI** — Framer Motion powers the hero slideshow, scroll-reveal sections, staggered grids, count-up stats, page transitions and micro-interactions throughout
- **Smart browsing** — instant search (title/author), category filter, sorting (rating, name, copies), availability toggle and grid/list view switching
- **Borrow & return** — pick a return date, track everything on the Borrowed Books page with days-left / overdue badges
- **Wishlist** — heart any book to save it locally; a live badge in the navbar keeps count
- **Read & download** — book summaries with a generated PDF download (code-split so the PDF engine only loads when needed)
- **Librarian tools** — add and update books with a live cover-image preview
- **Secure auth** — Firebase email/password + Google sign-in, JWT cookies for protected API calls
- **Dark / light theme** — custom DaisyUI themes built around the BookBeacon teal & sage palette
- **Request a book** — can't find a title? Send a request straight to the librarians

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS + DaisyUI (custom themes) |
| Animation | Framer Motion, Swiper |
| Data | TanStack Query + Axios |
| Auth | Firebase Authentication |
| Extras | React Router, SweetAlert2, React-Toastify, @react-pdf/renderer |

## 🚀 Getting started

```bash
npm install

# copy the env template and fill in your Firebase web config
cp .env.example .env

npm run dev
```

The app talks to the Express/MongoDB API in [Book-Beacon-Server](https://github.com/AvishekChy77/Book-Beacon-Server).

## 📦 Build & deploy

```bash
npm run build        # outputs to dist/
firebase deploy      # hosting config in firebase.json
```
