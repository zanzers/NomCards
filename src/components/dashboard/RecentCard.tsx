import { Plus } from "lucide-react";

interface RecentCardProps{
    title: string;
    subtitle: string;
    isCreate?: boolean;
}

function RecentCard({title, subtitle, isCreate} : RecentCardProps) {

    if(isCreate){
        return (
            <button className="flex h-28 w-52 flex-col items-center justify-center rounded-2xl border border-dashed transition hover:border-primary hover:bg-muted/50">

                <Plus className="mb-3 h-8 w-8 text-primary" />
               
            </button>
            
        );

    }

    return(
        <button className="flex h-28 w-52 flex-col justify-between rounded-2xl border bg-card p-5 text-left transition hover:shadow-md">
            <h3 className="font-semibold text-(--info)">
                {title}
            </h3>

            <p className="mt-1 text-xs  text-muted-foregground">
                {subtitle}
            </p>
        </button>
    )
 
 
 
 
    return (
    <div>
      
    </div>
  )
}

export default RecentCard
