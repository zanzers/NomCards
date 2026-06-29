import { useEffect, useRef, useState } from "react";
import { MoreHorizontal, Download, ArrowUpToLine, ArrowDownToLine, Wrench, Upload  } from "lucide-react"



function RecentMenu() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent){
            if(
                menuRef.current && !menuRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={menuRef} className="relative">

            <button onClick={() => setOpen((prev) => !prev)}
                className="rounded-md p-2 transition hover:bg-muted"
                >
                    <MoreHorizontal className="h-5 w-5" />
            </button>

            {open && (
                <div className="absolute right-0 z-50 w-48 rounded-lg border bg-(--surface-hover)  p-1 shadow-lg">
                    
                    <button disabled className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted- disable:cursor-not-allowed">
                        <Download className="h-4 w-4"  />
                         Import Deck

                    </button>
                    <button disabled className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted- disable:cursor-not-allowed">
                        <Upload className="h-4 w-4"  />
                         Export Deck

                    </button>
                    <button disabled className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted- disable:cursor-not-allowed">
                        <Wrench className="h-4 w-4"  />
                         Coming Soon

                    </button>
                </div>
            )}
        </div>
    )
}

export default RecentMenu
