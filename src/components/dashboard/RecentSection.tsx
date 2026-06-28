import { MoreHorizontal } from "lucide-react";
import RecentCard from "./RecentCard";


function RecentSection() {
  return (
    <section className="space-y-4">

        <div className=" border-b flex items-center justify-between">
            <h2 className="text-lg font-semibold">
                Recent
            </h2>

        

        <button className="text-sm text-muted-foreground transition hover:text-foreground">
            <MoreHorizontal className="h-5 w-5" />

        </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">

            <RecentCard isCreate title="" subtitle="" />
            <RecentCard  title="Biology" subtitle="20 cards  • Yesterday " />
            <RecentCard  title="Japanese" subtitle="35 cards  • 2 days ago " />
            <RecentCard  title="Networking" subtitle="18 cards  • last week " />
            
        </div>



    </section>
  )
}

export default RecentSection
