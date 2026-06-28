
function DashboardHeader() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 18  ? "Good afternoon" : "Good evening";
    const today  = new Date().toLocaleDateString("en-US", { weekday : "long", month: "long", day: "numeric", year: "numeric"});


  return (
    <section className="rounded-2xl border bg-muted p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

            <div className="flex flex-col gap-6 md:flex md:items-center md:justify-between">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">
                        {greeting} 👋
                    </p>

                    <h2 className="text-2xl font-bold tracking-light">
                    Ready for your next study session? 
                    </h2>

                    <p className="max-w-2xl text-xs text-muted-foreground">
                            Create new flashcard decks, review your existing ones, and
                        keep building your knowledge one card at a time.
                    </p>
            
                </div>
            </div>

            <div className="rounded-sm border bg-background px-4 py-2 text-sm text-muted-foreground">
                {today}
            </div>
        </div>

    </section>
  )
}

export default DashboardHeader
