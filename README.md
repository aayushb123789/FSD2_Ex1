# React Login + Upload 🚀
![Project Banner](./assets/banner.png)

A small, modern React app demonstrating a polished login page with file upload. Built for clarity, accessibility, and easy customization — great as a starter or UI demo.

📄 License: MIT · ⚛️ React 18 · ⚡ Vite

Table of contents
- Features
- Visual preview
- Quick start
- Usage
- Upload API (example)
- Project structure
- Components
- Styling & design tips
- Accessibility
- Tests
- Contributing
- License

---

Features ✨
- Clean, responsive login page (email + password) ✅
- Avatar / file upload widget with preview and progress 🖼️
- Client-side validation and helpful UI hints 🛡️
- Auth context + protected route example 🔐
- Easy to wire to any backend (sample server included) 🔌
- Accessibility-minded (labels, ARIA, keyboard navigation) ♿

Visual preview 📸
- Hero image: ./assets/banner.png
- Animated demo (replace with GIF): ./assets/demo.gif

Replace these images with your own screenshots/GIFs to make the README visual and interactive.

---

Quick start (local) ⚙️
1. Clone
   - git clone https://github.com/aayushb123789/FSD2_Ex1.git
   - cd FSD2_Ex1
2. Install
   - npm install
3. Start dev server
   - npm run dev
4. Open http://localhost:5173 (or the address printed by your dev server)

Environment 🧩
- Create a .env (example):
  - VITE_API_URL=http://localhost:4000
  - VITE_UPLOAD_PATH=/api/upload
- Remember Vite variables must be prefixed with VITE_

Example npm scripts (package.json)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest"
  }
}
```

---

Usage (login + upload flow) 🔁
1. Open the app, enter email and password.
2. On successful login, you'll be taken to the profile/upload page.
3. Click or drag a file onto the upload box to preview. Confirm to upload.
4. See a progress bar while the file uploads, then a success state ✅

Example: Upload with fetch
```js
async function uploadFile(file) {
  const url = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_UPLOAD_PATH}`;
  const form = new FormData();
  form.append('file', file);
  // optional: send auth token
  const res = await fetch(url, {
    method: 'POST',
    body: form,
    // headers: { Authorization: `Bearer ${token}` } // if needed
  });
  return res.json();
}
```

Upload API contract (example) 📡
- Endpoint: POST /api/upload
- Content-Type: multipart/form-data
- Form field name: file (or "avatar")
- Success: 200 OK with JSON { url: "https://..." }
- Error: meaningful 4xx/5xx with JSON { error: "message" }

Example Node/Express server snippet
```js
// server.js (simple example)
import express from 'express';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

const app = express();
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });
  // In production, store in S3 or CDN, return public URL
  res.json({ url: `/uploads/${req.file.filename}` });
});
app.listen(4000);
```

---

Project structure (suggested) 📁
- src/
  - components/
    - LoginForm.jsx
    - UploadWidget.jsx
    - ProtectedRoute.jsx
  - context/
    - AuthContext.jsx
  - pages/
    - LoginPage.jsx
    - ProfilePage.jsx
  - styles/
    - tailwind.css or App.css
  - App.jsx
  - main.jsx
- server/ (optional example backend)
- assets/ (screenshots/gifs)

Component overview 🧩
- LoginForm
  - Controlled inputs, validation, friendly error states
  - "Remember me" toggle and demo credential helper
- UploadWidget
  - Drag & drop, click-to-select, image/file preview
  - Progress bar using XMLHttpRequest or fetch with progress
  - Retry and cancel actions
- AuthContext
  - Stores auth token and user, handles login/logout
- ProtectedRoute
  - Simple wrapper to guard private pages

Styling & visual polish tips 🎨
- Use a design system or Tailwind for consistent spacing/colors
- Soft shadows, subtle gradients, and rounded corners for modern look
- Micro-interactions:
  - Hover states
  - Focus rings (for keyboard users)
  - Smooth upload progress animation
- Add a small "demo credentials" callout for testers:
  - Email: demo@demo.com
  - Password: password

Accessibility ♿
- Ensure form controls have associated labels
- Use role and aria-live to announce upload progress/result
- Manage focus on navigation (focus trap on modals)
- Ensure color contrast meets WCAG AA

Testing 🧪
- Unit: Vitest + @testing-library/react
- E2E: Playwright or Cypress for full flow (login -> upload -> verify)
- Example test command: npm run test

Tips for interactive README elements 🧭
- Replace static images with GIFs for flow demos (login -> upload)
- Add a CodeSandbox or StackBlitz link for an interactive in-browser demo
- Show a "Try it" section with demo credentials and a direct link to the hosted app (when available)

Contributing 🤝
- Feel free to open issues or PRs
- Suggested workflow:
  - Fork -> branch -> commit -> PR with description + screenshots
- Add tests for new features

License 📜
- MIT — see LICENSE file

Contact ✉️
- Author: aayushb123789
- Reach me at: aayushb6973@gmail.com

---
