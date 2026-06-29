import { MoreHorizontal } from "lucide-react";
import RecentCard from "./RecentCard";
import RecentMenu from "./RecentMenu";
import { getDecks } from "../../lib/localStorage";
import type { Deck, Question } from "../../types/deck";
import { useEffect, useState } from "react";



function RecentSection() {

    const [decks, setDecks] = useState<Deck[]>([]);
    
    useEffect(() => {
        setDecks(getDecks());
    }, []);


  return (
    <section className="space-y-4">

        <div className=" border-b flex items-center justify-between">
            <h2 className="text-lg font-semibold">
                Recent
            </h2>

        

        <button className="text-sm text-muted-foreground transition hover:text-foreground">
            <RecentMenu />

        </button>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

            <RecentCard isCreate title="" subtitle="" />

            {decks.map((deck) => {
                console.log(deck);

                return (
                    <RecentCard
                        deck={deck}
                        key={deck.id}
                        title={deck.subject}
                        subtitle={`${deck.questions.length} Questions`}
                    />
                );
            })}
        </div>



    </section>
  )
}

export default RecentSection
