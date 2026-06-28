import { Sun, Moon } from "lucide-react";
import useTheme from "./useTheme";


function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

  return (
    <button 
        onClick={toggleTheme}
        className="rounded-lg p-2 transition hover:bg-(--border-hover)"
        >
        {theme === "light" ? (
            <Moon className="h-5 w-5" />
        ) : (
            <Sun className="h-5 w-5" />
        )}
    </button>
  )
}

export default ThemeToggle
