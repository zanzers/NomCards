import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface SidebarItemsprops {
  title: string;
  path: string;
  icon: LucideIcon;
  collapsed: boolean
}

function SidebarItems({ title, path, icon: Icon, collapsed, }: SidebarItemsprops) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center rounded-lg py-3 transition-all duration-300
      ${collapsed ? "px-3" : "px-4 gap-3"}
      ${
          isActive
        ? "border-l-4 border-(--primary) bg-(--surface-hover) text-(--primary)"
        : "border-l-4 border-transparent text-(--text-secondary) hover:bg-(--surface-hover) hover:text-(--text-primary)"
        }`
      }
    >
      <div className="flex h-5 w-5 items-center justify-center">
        <Icon className="h-5 w-5 shrink-0" />
      </div>
      {!collapsed && (
        <span className={`
          overflow-hidden whitespace-nowrap transition-all duration-300
        ${collapsed ? "w-0 opacity-0" : "w-32 opacity-100"}`}
        >
          {title}
        </span>
      )}

    </NavLink>
  );
}

export default SidebarItems;
