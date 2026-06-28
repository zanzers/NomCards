import type { Deck } from "../../types/deck"
import DeckCard from "./DeckCard";


interface DeckGridProps{
    decks: Deck[];
}


function DeckGrid({decks}: DeckGridProps) {
  return (

    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {decks.map((deck) => (
            <DeckCard
                key={deck.id}
                deck={deck}
            />
        ))}
    </div>
  )
}

export default DeckGrid
