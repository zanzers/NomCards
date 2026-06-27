# FlashDeck API Specification

**Document Version:** 1.0
**API Version:** v1
**Status:** Draft

---

# Overview

This document defines the REST API used by FlashDeck.

The API follows REST principles and exchanges data using JSON. All endpoints are prefixed with `/api/v1`.

---

# Base URL

Development

```
http://localhost:8000/api/v1
```

Production

```
https://api.flashdeck.app/api/v1
```

---

# Response Format

## Success

```json
{
    "success": true,
    "message": "Operation completed successfully.",
    "data": {}
}
```

## Error

```json
{
    "success": false,
    "message": "Deck not found.",
    "errors": []
}
```

---

# Deck API

## Get All Decks

### GET

```
/decks
```

### Description

Returns all available decks.

### Success Response

```json
{
    "success": true,
    "data": [
        {
            "id": "uuid",
            "name": "Programming",
            "description": "Python Basics"
        }
    ]
}
```

---

## Get Deck

### GET

```
/decks/{deck_id}
```

---

## Create Deck

### POST

```
/decks
```

### Request

```json
{
    "name": "Programming",
    "description": "Python Basics"
}
```

### Success

HTTP 201

---

## Update Deck

### PUT

```
/decks/{deck_id}
```

---

## Delete Deck

### DELETE

```
/decks/{deck_id}
```

---

# Flashcard API

## Get Flashcards

### GET

```
/decks/{deck_id}/flashcards
```

---

## Create Flashcard

### POST

```
/decks/{deck_id}/flashcards
```

### Request

```json
{
    "front": "What is OOP?",
    "back": "Object-Oriented Programming",
    "tags": [
        "Programming",
        "Python"
    ]
}
```

---

## Update Flashcard

### PUT

```
/flashcards/{flashcard_id}
```

---

## Delete Flashcard

### DELETE

```
/flashcards/{flashcard_id}
```

---

# Study API

## Start Study Session

### POST

```
/study/session
```

### Request

```json
{
    "deck_id": "uuid"
}
```

---

## Submit Answer

### POST

```
/study/answer
```

### Request

```json
{
    "study_session_id": "uuid",
    "flashcard_id": "uuid",
    "is_correct": true
}
```

---

## Get Study History

### GET

```
/study/history
```

---

# Statistics API

## Dashboard Statistics

### GET

```
/statistics
```

### Response

```json
{
    "cards_studied_today": 20,
    "correct_answers": 17,
    "incorrect_answers": 3,
    "study_time": 1200
}
```

---

# Settings API

## Get Settings

### GET

```
/settings
```

---

## Update Settings

### PUT

```
/settings
```

### Request

```json
{
    "theme": "dark",
    "font_size": 16,
    "daily_goal": 30
}
```

---

# HTTP Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | Success               |
| 201  | Created               |
| 204  | Deleted Successfully  |
| 400  | Bad Request           |
| 404  | Resource Not Found    |
| 409  | Conflict              |
| 422  | Validation Error      |
| 500  | Internal Server Error |

---

# Future Endpoints (Version 2+)

These endpoints are planned but will not be implemented in Version 1.

## Community

```
GET /community/decks

POST /community/decks

GET /community/decks/{id}
```

## AI

```
POST /ai/generate

POST /ai/pdf

POST /ai/module
```

## Import & Export

```
POST /import/csv

POST /import/pdf

GET /export/deck
```
