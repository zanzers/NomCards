import { useNavigate, useParams } from "react-router-dom";
import { getDecks } from "../lib/localStorage";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Flashcard from "../components/study/Flashcard";


function StudySessionPage() {
    const { deckId } = useParams();
    const navigate = useNavigate();



    const [result, setResult] = useState<{ questionId: number; status: "correct" | "incorrect" | "skipped";}[]>([]);
    
    const deck = getDecks().find(
        (deck: { id: number; }) => deck.id === Number(deckId)
    );
    
    if(!deck){return (<div className="p-6"> Deck not found.</div>)}
    
    const [studyQueue, setStudyQueue] = useState(deck.questions);
    const currentQuestion = studyQueue[0];
    const questionNumber = deck.questions.findIndex((q: { id: any; }) => q.id === currentQuestion.id) + 1;
    



    function handleNext(status: "correct" | "incorrect" | "skipped") {

        const newResults = [
            ...result,
            {
                questionId: currentQuestion.id,
                status,
            },
        ];

        setResult(newResults);

        if (status === "skipped") {
            setStudyQueue((prev: string | any[]) => [
                ...prev.slice(1),
                prev[0],
            ]);
        } else {
            const nextQueue = studyQueue.slice(1);

            setStudyQueue(nextQueue);

            if (nextQueue.length === 0) {
                navigate("/study-results", {
                    state: {
                        deck,
                        results: newResults,
                    },
                });
            }
        }
    }
    


  return (
     <div className="mx-auto max-w-4xl p-6">

     <div className="flex items-center mb-8">
        <button
            onClick={() => navigate("/")}
            className="rounded-md border p-2 transition hover:bg-muted"
        >
            <ArrowLeft className="h-5 w-5" />
        </button>
        </div>

            <h1 className="text-3xl font-bold">
                {deck.subject}
            </h1>

            <Flashcard 
                key={currentQuestion.id}
                number={questionNumber}
                current={deck.questions.length - studyQueue.length + 1} 
                onNext={handleNext}
                total={deck.questions.length} 
                answer ={currentQuestion.answer}
                question={currentQuestion.question}/>
    </div>
  )
}

export default StudySessionPage
