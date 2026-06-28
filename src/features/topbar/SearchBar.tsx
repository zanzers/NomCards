import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";


function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(isOpen){
            inputRef.current?.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent){
            if(
                searchRef.current && !searchRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        function handleKeyboard(event: globalThis.KeyboardEvent){
            if(
                event.key === "Escape"
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("keydown", handleKeyboard);

        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        };
    }, []);

   

  return (
  <div className="flex items-center" ref={searchRef}>
    <div
      className={` flex items-center overflow-hidden rounded-lg border border-(--border) bg-(--surface)
        transition-all duration-300
        ${
          isOpen
            ? "mr-2 w-64 px-3 opacity-100"
            : "w-0 border-0 px-0 opacity-0"
        }
      `}
    >
      <Search className="h-5 w-5 shrink-0 text-(--text-secondary)" />

      <input
        ref={inputRef}
        type="text"
        placeholder="Search cards..."
        className=" w-full bg-transparent px-3 py-2 text-(--text-primary) placeholder:text-(--text-muted) outline-none"
      />
    </div>

    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className=" rounded-lg p-2 transition-colors hover:bg-(--surface-hover)">
      <Search className="h-5 w-5 text-(--text-primary)" />
    </button>
  </div>
);
}

export default SearchBar
