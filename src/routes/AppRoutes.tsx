import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dasboard"; 
import SettingsPage from "../pages/SettingsPage";
import StudyPage from "../pages/StudyPage";
import StatisticsPage from "../pages/StatisticsPage";
import NotFoundPage from "../pages/NotFoundPage";


export default function AppRoutes(){
    return(
        <Routes>    

            <Route element={<MainLayout />}>

                <Route index element={<Dashboard />} />
                <Route path="/studys" element={<StudyPage />} />
                <Route path="/statisitics" element={<StatisticsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                
                
            </Route>
                <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}









