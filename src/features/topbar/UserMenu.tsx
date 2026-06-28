import { ChevronDown, CircleUserRound, Info } from "lucide-react"
import { Link } from "react-router-dom"


function UserMenu() {
  return (
    <div className="relative group z-50">

      <button className="flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-(--primary-hover)">
        <CircleUserRound className="h-5 w-5"/>
        <span className="hidden sm:block">
            Guest
        </span>

        <ChevronDown className="h-4 w-4 hidden sm:block" />
    </button>

    <div className="absolute right-0 mt-2 w-56 rounded-xl  border-(--border) shadow-lg opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
      <div className="border-b boder-(--border) px-4 py-3">
        <p className="font-medium text-(--text-primary)">
          Guest
        </p>

         <p className="text-sm text-(--text-secondary)">
          Your data is stored locally.
          </p> 
      </div>

      <div className="p-2">

       <div className="border-t border-(--border) p-3">

      <h3 className="font-medium text-(--text-primary)">
        ✨ Sync your progress
      </h3>

  <p className="mt-1 text-sm text-(--text-secondary)">
    Sign in to sync your decks, study history, and statistics across devices.
  </p>

  <button className=" mt-3 w-full rounded-lg bg-(--primary) px-3 py-2 text-sm font-medium text-(--text-inverse) transition-colors hover:bg-(--primary-hover)">
    🔑 Sign In
  </button>

</div>

        <Link to="/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-(--surface-hover)">
        <Info className="h-4 w-4"/>
        
        <span>About</span>
        </Link>
      </div>
    </div>
    </div>

  )
}

export default UserMenu
