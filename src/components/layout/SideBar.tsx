import { Menu, PanelLeftClose, PanelTopOpen } from "lucide-react";
import { navigation } from "../../features/sidebar/navigation"
import SidebarItems from "../../features/sidebar/SidebarItems"
import useSidebar from "../sidebar/useSidebar"


function SideBar() {
  const { collapsed, toggleSidebar} = useSidebar();


  return (
    <aside  className={`${
      collapsed ? "w-20" : "w-64"
    } bg-(--surface) transition-all duration-300`}>

        <div className="h-16 flex items-center px-6 justify-between">
          

          <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 transition hover:bg-(--border-hover)"
          >
            {collapsed ? (
              <Menu size={20} />
            ) : (
              <Menu size={20} />
            )}

          </button>

          {!collapsed && (
            <h1 className="text-xl font-bold pr-8">
              NomCards
            </h1>
          )}

        </div>

        <nav className="flex flex-col p-4 gap-2">
          {navigation.map((item) => (
            <SidebarItems 
              key={item.path}
              title={item.title}
              path={item.path}
              icon={item.icon}
              collapsed={collapsed}

            />
          ))}
        </nav>


    </aside>
  )
}

export default SideBar
