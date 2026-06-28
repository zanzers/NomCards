import type { Deck } from "../../types/deck"


interface DeckCardProps {
    deck: Deck
}


function DeckCard({deck} : DeckCardProps) {
  return (
    
    <div className="rounded-lg border p-5 transition hover:shadow-md">

        <h3 className="text-lg font-semibold">
            {deck.title}
        </h3>

        <p className="mt-2 text-muted-foreground">
            {deck.description}
        </p>

        <div className="mt-6 flex items-center justify-center text-sm text-muted-foreground">
            <span>{deck.cardCount} Cards</span>

            <span>
                {new Date(deck.updatedAt).toLocaleDateString()}
            </span>
        </div>

    </div>
    
  );
}

export default DeckCard
