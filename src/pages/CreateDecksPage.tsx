import { ArrowLeft, Plus} from "lucide-react";
import { useState } from "react";
import { getDecks, saveDecks } from "../lib/localStorage";

import { useNavigate } from "react-router-dom";


function CreateDecksPage() {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [question, setQuestion] = useState("");
    const [subject, setSubject] = useState("");
    const [answer, setAnswer] = useState("");
    const [questions, setQuestions] = useState<
    {
        id: number;
        question: string;
        answer: string;
    }[]
    >([]);


        
    function handleSaveQuestion(){
        if(!question.trim() || !answer.trim()) return;

        setQuestions((prev) => [
            {
                id: Date.now(),
                question,
                answer,
            },
            ...prev,
        ]);

        setQuestion("");
        setAnswer("");
        setShowForm(false);
    }


    function handleSaveDeck(){

        console.log("HandleSavedDeck")
        try{
            if(!subject.trim()){
                throw new Error("Subject is required");
            }
            if(questions.length === 0){
                throw new Error("Add questions");
            }

            const decks = getDecks();

            const newDeck = {
                id: Date.now(),
                subject,
                questions,
                createdAt: new Date().toISOString(),
            };

            saveDecks([...decks, newDeck]);

            console.log("Saved success");
            
            setSubject("");
            setQuestions([]);
            setQuestion("");
            setAnswer("");
            setShowForm(false);
            navigate("/");


        } catch (error){
            console.error("❌ Failed to save deck:", error);

            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("An unexpected error occurred.");
            }
        }
    }

  return (
  <div className="mx-auto max-w-4xl space-y-8 p-6">
    {/* Header */}
    <div className="flex items-center gap-4">
      <button
        onClick={() => navigate(-1)}
        className="rounded-md border p-2 transition hover:bg-muted"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <div>
        <h1 className="text-2xl font-bold">Create Cards</h1>
        <p className="text-sm text-muted-foreground">
          Create a subject and start adding questions.
        </p>
      </div>
    </div>

    {/* Main Content */}
    <div className="mx-auto w-full max-w-2xl space-y-8">
      {/* Subject */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Subject Name
        </label>

        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. Biology"
          className="w-full border-b px-4 py-3 outline-none"
        />
      </div>

      {/* Questions */}
      <section className="space-y-4">
        <div className="flex items-center justify-end">
          

          <span className="text-sm text-muted-foreground text-left">
            {questions.length} Questions
          </span>
        </div>

        {questions.length === 0 ? (
          <div className="rounded-xl  py-16 text-center">
            <p className="text-muted-foreground">
              No questions yet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {questions.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border p-4"
              >
                <h3 className="font-medium">
                  {item.question}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Answer: {item.answer}
                </p>
              </div>
            ))}
          </div>
        )}

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="flex w-full items-center justify-center gap-2 rounded-xl border py-4 transition hover:bg-muted"
          >
            <Plus className="h-5 w-5" />
            Add Question
          </button>
        ) : (
          <div className="space-y-4 rounded-xl border p-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Question
              </label>

              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={3}
                placeholder="Enter your question..."
                className="w-full rounded-lg border p-3 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Answer
              </label>

              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                rows={3}
                placeholder="Enter the answer..."
                className="w-full rounded-lg border p-3 outline-none"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowForm(false)}
                className="rounded-lg border px-4 py-2"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveQuestion}
                className="rounded-lg bg-primary px-4 py-2 text-primary-foreground"
              >
                Save
              </button>
            </div>
          </div>
        )}

        <button
          onClick={handleSaveDeck}
          className="w-full rounded-lg bg-primary py-3 text-primary-foreground"
        >
          Save Deck
        </button>
      </section>
    </div>
  </div>
);
}

export default CreateDecksPage
