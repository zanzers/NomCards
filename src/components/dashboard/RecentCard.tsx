import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Deck } from "../../types/deck";


interface RecentCardProps{
    deck?: Deck;
    isCreate?: boolean;
}

function RecentCard({deck, isCreate} : RecentCardProps) {
    const navigate = useNavigate();

    if(isCreate){
        return (
            <button 
            onClick={() => navigate("/createNew")}
            className="flex h-28 w-52 flex-col items-center justify-center rounded-2xl border border-dashed transition hover:border-primary hover:bg-muted/50">

                <Plus className="mb-3 h-8 w-8 text-primary" />
               
            </button>
            
        );
        
    }
    if(!deck) return null;

    return(
        <button
            onClick={() => navigate(`/studys/${deck.id}`)}
            className="flex h-28 w-52 flex-col justify-between rounded-2xl border bg-card p-5 text-left transition hover:shadow-md">
            <h3 className="font-semibold text-(--info)">
                {deck.subject}
            </h3>

            <p className="mt-1 text-xs  text-muted-foregground">
                {deck.questions.length} Questions
            </p>
        </button>
    )
 
 
 
 
}

export default RecentCard
