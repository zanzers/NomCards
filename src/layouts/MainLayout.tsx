import type { ReactNode } from "react";
import { Outlet } from "react-router-dom"

import SideBar from "../components/layout/SideBar";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";
import MobileNav from "../components/layout/MobileNav";


function MainLayout() {
  return (
    <div className="flex min-h-screen">

      <div className="hidden lg:block">
        <SideBar />
      </div>

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6 pb-24 lg:pb-6">
          <Outlet />
        </main>

        <div className="hidden lg:block">
          <Footer />
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>

    
    </div>
  );
}

export default MainLayout


