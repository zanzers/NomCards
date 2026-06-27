
Table decks {
  id uuid [pk]
  name varchar
  description text
  created_at timestamp
  updated_at timestamp
}

Table flashcards {
  id uuid [pk]
  deck_id uuid [not null]
  front text
  back text
  tags text
  created_at timestamp
  updated_at timestamp
}

Table study_sessions {
  id uuid [pk]
  deck_id uuid [not null]
  started_at timestamp
  ended_at timestamp
  total_cards int
  correct_answers int
  incorrect_answers int
}

Table study_answers {
  id uuid [pk]
  study_session_id uuid [not null]
  flashcard_id uuid [not null]
  is_correct boolean
  answered_at timestamp
}

Table achievements {
  id uuid [pk]
  title varchar
  description text
  icon varchar
  unlocked_at timestamp
}

Table app_settings {
  id uuid [pk]
  theme varchar
  font_size int
  daily_goal int
  notifications boolean
}

Ref: flashcards.deck_id > decks.id

Ref: study_sessions.deck_id > decks.id

Ref: study_answers.study_session_id > study_sessions.id

Ref: study_answers.flashcard_id > flashcards.id