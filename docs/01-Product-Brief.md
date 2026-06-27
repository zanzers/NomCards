# FlashDeck

**Product ID:** NS-001

**Studio:** Nowarie Studio

**Status:** Planning

**Version:** 1.0.0 (Target)

---

# Overview

FlashDeck is the first official product developed by Nowarie Studio.

It is a Progressive Web App (PWA) that helps users study more effectively through digital flashcards. The application focuses on simplicity, speed, and a distraction-free learning experience while remaining fully installable on desktop and mobile devices.

Rather than competing with feature-heavy learning platforms, FlashDeck aims to provide a clean and intuitive study environment that users can access anywhere from a single codebase.

"Your study data belongs to you. FlashDeck works anywhere, even without the internet."

---

# Vision

Create the simplest and most enjoyable flashcard application for students and lifelong learners.

---

# Mission

Help people learn faster, remember longer, and enjoy studying through thoughtful software design.

---

# Target Audience

* Students
* Language learners
* Professionals preparing for certifications
* Teachers
* Self-learners
* Anyone who studies using flashcards

---

# Problem Statement

Many existing flashcard applications are either overly complex, require accounts, or overwhelm users with unnecessary features.

FlashDeck focuses on what matters most: creating, organizing, and studying flashcards in a beautiful and responsive interface.

---

# Product Goals

* Fast and responsive
* Installable as a PWA
* Works on desktop and mobile
* Offline support
* Clean user experience
* Modern interface
* Easy deck management
* Easy card creation

---

# Platforms

Version 1 supports:

* Desktop Web
* Android (PWA)
* iOS (PWA)

Future versions may include native desktop and mobile applications.

---

# Core Features

* Deck Management
* Flashcard Management
* Study Mode
* Progress Tracking
* Search
* Dark Mode
* Offline Capability

---

# Technology Stack

| Category         | Technology             |
| ---------------- | ---------------------- |
| Frontend         | React                  |
| Language         | TypeScript             |
| Styling          | Tailwind CSS           |
| Build Tool       | Vite                   |
| PWA              | vite-plugin-pwa        |
| State Management | Zustand                |
| Data Fetching    | TanStack Query         |
| Backend          | FastAPI                |
| ORM              | SQLAlchemy             |
| Database         | PostgreSQL             |
| Local Storage    | IndexedDB              |
| Validation       | Pydantic               |
| AI               | Gemini/OpenAI (future) |
| Deployment       | Docker                 |

---

# Success Criteria

Version 1 is considered successful when users can:

* Create flashcard decks
* Create and manage flashcards
* Study using flashcards
* Track study progress
* Install the application as a PWA
* Use the application offline

---

# Long-Term Vision

FlashDeck will evolve into a complete learning platform featuring spaced repetition, AI-assisted flashcard generation, cloud synchronization, collaboration, and educational analytics while maintaining the simplicity that defines Nowarie Studio's products.


# Architecture

when offline
Phone

↓

IndexedDB

↓

Study Offline


when Online

React (PWA)
        │
        ▼
FastAPI
        │
        ▼
PostgreSQL
