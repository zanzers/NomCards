# Software Requirements Specification (SRS)

## Project

FlashDeck

Version 1.0

---

# 1. Purpose

This document defines the functional and non-functional requirements for FlashDeck Version 1.

---

# 2. Product Scope

FlashDeck is a Progressive Web Application that enables users to create flashcards, organize them into decks, and study efficiently using a simple and intuitive interface.

---

# 3. Functional Requirements

## 3.1 Deck Management

The system shall allow users to:

* Create a deck
* Rename a deck
* Delete a deck
* View all decks
* Search decks

---

## 3.2 Flashcard Management

The system shall allow users to:

* Create flashcards
* Edit flashcards
* Delete flashcards
* Move flashcards between decks
* Search flashcards

Each flashcard contains:

* Front (Question)
* Back (Answer)
* Created Date
* Last Modified Date

---

## 3.3 Study Mode

The system shall allow users to:

* Select a deck
* View one flashcard at a time
* Reveal the answer
* Mark the answer as:

  * Correct
  * Incorrect
* Continue to the next flashcard

---

## 3.4 Statistics

The system shall display:

* Cards studied today
* Total cards
* Correct answers
* Incorrect answers
* Study sessions completed

---

## 3.5 Settings

The system shall provide:

* Light/Dark mode
* Font size adjustment
* Language selection (future)

---

## 3.6 Progressive Web App

The application shall:

* Be installable
* Support offline mode
* Work on desktop and mobile browsers
* Automatically update when a new version is available

---

# 4. Non-Functional Requirements

## Performance

* Application loads within 3 seconds.
* Page transitions should feel smooth.
* Search results should appear instantly for typical deck sizes.

---

## Reliability

* User data must not be lost during normal operation.
* Auto-save should occur whenever a flashcard is edited.

---

## Usability

* Clean interface
* Mobile responsive
* Keyboard-friendly on desktop
* Touch-friendly on mobile

---

## Security

* User data stored securely.
* Input validation for all forms.
* Protection against common web vulnerabilities.

---

## Compatibility

Supported Browsers:

* Chrome
* Edge
* Firefox
* Safari

Supported Devices:

* Desktop
* Android
* iPhone
* Tablets

---

# 5. Future Enhancements

Version 2

* Tags
* Images
* Audio
* Import/Export
* Study timer

Version 3

* User accounts
* Cloud synchronization
* Shared decks
* Public deck library

Version 4

* Spaced repetition
* AI flashcard generation
* PDF import
* OCR
* Learning analytics
