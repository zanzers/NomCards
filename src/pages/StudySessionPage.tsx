import { useNavigate, useParams } from "react-router-dom";
import { getDecks } from "../lib/localStorage";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Flashcard from "../components/study/Flashcard";



function StudySessionPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { deckId } = useParams();
    const [result, setResult] = useState<{
        questionId: number;
        status: "correct" | "incorrect" | "skipped";
    }[]>([]);

    const navigate = useNavigate();
    
    const deck = getDecks().find(
        (deck: { id: number; }) => deck.id === Number(deckId)
    );
    const currentQuestion = deck.questions[currentIndex];
    
    if(!deck){
        return (
            <div className="p-6">
                Deck not found.
            </div>
        )
    }


    function handleNext(status: "correct" | "incorrect" | "skipped"){

        setResult((prev) => [
            ...prev,
            {
                questionId: currentQuestion.id,
                status,
            },
        ]);

        if(currentIndex < deck.questions.length -1){
            setCurrentIndex((prev) => prev + 1);
        } else {
            
        }
    }



  return (
     <div className="mx-auto max-w-4xl p-6">

     <div className="flex items-center mb-8">
        <button
            onClick={() => navigate(-1)}
            className="rounded-md border p-2 transition hover:bg-muted"
        >
            <ArrowLeft className="h-5 w-5" />
        </button>
        </div>

            <h1 className="text-3xl font-bold">
                {deck.subject}
            </h1>

            <p className="mt-2 mb-2 text-sm text-muted-foreground">
                Question {currentIndex + 1} / {deck.questions.length}
            </p>
            <Flashcard 
                key={currentQuestion.id}
                current={currentIndex + 1} 
                onNext={handleNext}
                total={deck.questions.length} 
                answer ={currentQuestion.answer}
                question={currentQuestion.question}/>
    </div>
  )
}

export default StudySessionPage
