import { useLocation, useNavigate } from "react-router-dom"


function StudyResultPage() {

    console.log(useLocation().state);

    const { state } = useLocation();
    const navigate = useNavigate();

    const { deck, results} = state;

    const correct = results.filter(
        (r: any) => r.status === "correct"
    ).length

  return (
        <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center space-y-8 p-6">

            <h1 className="text-3xl font-bold">
                🎉 Session Complete
            </h1>

            <p className="text-lg text-muted-foreground">
                {deck.subject}
            </p>

            <div className="rounded-2xl border px-10 py-8 text-center">
                <p className="text-5xl font-bold">
                    {correct} / {deck.questions.length}
                </p>

                <p className="mt-2 text-muted-foreground">
                    Correct Answers
                </p>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={() => navigate(`/studys/${deck.id}`)}
                    className="rounded-lg border px-6 py-3"
                >
                    Study Again
                </button>

                <button
                    onClick={() => navigate("/")}
                    className="rounded-lg bg-primary px-6 py-3 text-primary-foreground"
                >
                    Home
                </button>
            </div>

        </div>
    );

}

export default StudyResultPage
