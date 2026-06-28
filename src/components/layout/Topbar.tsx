import { useLocation } from "react-router-dom"
import { navigation } from "../../features/sidebar/navigation"

import SearchBar from "../../features/topbar/SearchBar";
import ThemeToggle from "../../features/theme/ThemeToggle";
import UserMenu from "../../features/topbar/UserMenu";


function Topbar() {
  const location = useLocation();

  const currentPage = navigation.find(
    (item) => item.path === location.pathname
  );

  return (
    <header className="flex h-16 items-center justify-between  bg-(--surface) px-6">

      {/* Left */}
      <h1 className="text-xl font-semibold text-(--text-primary)">
        {currentPage?.title ?? "NomCards"}
      </h1>

      {/* Right */}
      <div className="flex items-center gap-2">

         <SearchBar />
        <ThemeToggle />
        <UserMenu />
      </div>

    </header>
  )
}

export default Topbar
