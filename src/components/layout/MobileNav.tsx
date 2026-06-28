import { NavLink } from "react-router-dom";
import { navigation } from "../../features/sidebar/navigation";

function MobileNav() {
  return (
    <nav
      className=" fixed bottom-0 left-0 right-0 z-50 border-t border-(--border) bg-(--surface) pb-[env(safe-area-inset-bottom)]">
      
      <div className="flex h-16">

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative flex flex-1 items-center justify-center transition-colors
                ${
                  isActive
                    ? "text-(--primary)"
                    : "text-(--text-secondary) hover:text-(--text-primary)"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className="h-6 w-6" />

                  {isActive && (
                    <span className=" absolute top-0 h-1 w-8 rounded-full bg-(--primary)"/>
                  )}
                </>
              )}
            </NavLink>
          );
        })}

      </div>
    </nav>
  );
}

export default MobileNav;