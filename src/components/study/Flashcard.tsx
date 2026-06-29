import { useState } from "react";

interface FlashcardProps{
  question: string;
  number: number
  current: number;
  total: number;
  answer: string;
  onNext: (status: "correct" | "incorrect" | "skipped") => void;
}

function Flashcard({ question, current, total, answer, onNext, number } : FlashcardProps ) {
  const [userAnswer, setUserAnswer ] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);


  
  function handleNext(status: "correct" | "incorrect" | "skipped"){
    setUserAnswer("");
    setShowAnswer(false);
    setIsCorrect(false);

    onNext(status);
  }

  function handleCheckAnswer(){
    const correct  = userAnswer.trim().toLowerCase() ===
      answer.trim().toLowerCase();

      setIsCorrect(correct);
      setShowAnswer(true);
  }

  return (

    <div className="perspective">
      <div className={`relative min-h-105 transform-style-3d transition-transform duration-700 ${
        showAnswer ? "rotate-y-180" : ""
      }`}>

        <div className="absolute inset-0 backface-hidden rounded-2xl border bg-card p-8">
          
          <p className="mb-2 text-sm text-muted-foreground">
            Question {number}
          </p>

          <h2 className="text-2xl font-semibold">
            {question}
          </h2>

          <div className="mt-8 space-y-2">
            <label className="text-sm font-medium">
              Your Answer
            </label>

            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              rows={4}
              placeholder="your answer..." 
              className="w-full rounded-xl border p-3 outline-none"/>
          </div>
        <div className="mt-6 flex justify-between">
            <button onClick={() => handleNext("skipped")} className="rounded-lg bg-(--primary) px-6 py-2 text-primary-foreground"> 
            Skip 
            </button>
          <button 
            onClick={handleCheckAnswer}
            className="mt-6 rounded-lg bg-(--primary) px-6 py-2 text-primary-foreground">
            Check Answer
          </button>
        </div>
    
        </div>

        <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl border bg-card p-8">

          <p className={`text-sm font-medium ${
            isCorrect  ? "text-green-600" : "text-red-600"
          }`}>
            {isCorrect ? "✅ Correct" : "❌ Incorrect"}
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Review Answer
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Correct Answer
              </p>

              <div className="mt-2 rouded-xl border bg-muted/40 p-4">
                {answer}
              </div>
            </div>

            <div>
               <p className="text-sm text-muted-foreground">
                Your Answer
               </p>

               <div className="mt-2 rounded-lg  bg-muted/40 p-4" />
                {userAnswer || (
                  <span className="italic text-muted-foreground">
                    No answer Provided
                  </span>
                )}
               
            </div>
          </div>
      <div className="mt-8 flex justify-end">
        <button onClick={() => handleNext(isCorrect ?"correct" : "incorrect")} className="rounded-lg bg-(--primary) px-6 py-2 text-primary-foreground">
              Next
        </button>
      </div>
      </div>

      </div>
    </div>
  )
}

export default Flashcard
