# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])


```


# NomCards

An offline-first flashcard application built with React, FastAPI, and PostgreSQL.

---

# 🚀 Milestone 1 - Foundation

- [x] Product Brief
- [x] Software Requirements Specification (SRS)
- [x] Database Design (ERD)
- [x] API Specification
- [x] System Architecture
- [x] React + TypeScript Project
- [x] Theme System
- [x] Main Layout
- [x] React Router
- [x] Sidebar Navigation
- [x] Top Navigation Bar
- [ ] MobileNav
- [ ] Polish the responsive spacing and interactions.


---

# 📚 Milestone 2 - Deck Management

- [ ] Create Deck
- [ ] Edit Deck
- [ ] Delete Deck
- [ ] View Deck List
- [ ] Deck Details Page

---

# 🃏 Milestone 3 - Flashcards

- [ ] Create Flashcard
- [ ] Edit Flashcard
- [ ] Delete Flashcard
- [ ] Flashcard List
- [ ] Search Flashcards
- [ ] Flashcard Tags

---

# 🧠 Milestone 4 - Study Mode

- [ ] Start Study Session
- [ ] Show Answer
- [ ] Correct / Incorrect Answer
- [ ] Save Study History
- [ ] Session Summary

---

# 📊 Milestone 5 - Statistics

- [ ] Dashboard
- [ ] Cards Studied Today
- [ ] Accuracy
- [ ] Study Streak
- [ ] Study Time
- [ ] Progress Charts

---

# ⚙️ Milestone 6 - Settings

- [ ] Theme Settings
- [ ] Daily Goal
- [ ] Font Size
- [ ] About Page

---

# 📱 Milestone 7 - PWA

- [ ] Installable App
- [ ] Offline Support
- [ ] App Icons
- [ ] Splash Screen

---

# 🤖 Milestone 8 - Future Features

- [ ] Community Decks
- [ ] Import PDF
- [ ] Import CSV
- [ ] AI Flashcard Generation
- [ ] AI Quiz Generation
- [ ] AI Study Assistant

---

# 🚀 Release Checklist

- [ ] Responsive Design
- [ ] Accessibility Review
- [ ] Performance Optimization
- [ ] Testing
- [ ] Documentation
- [ ] Deploy Frontend
- [ ] Deploy Backend
- [ ] Release v1.0









Here's the order I'd follow
✅ Finish the User Menu dropdown.
✅ Make the layout responsive (lg:hidden, hidden lg:block).
✅ Build the MobileNav using your existing navigation.ts.
✅ Polish the responsive spacing and interactions.
🚀 Start building the Dashboard.