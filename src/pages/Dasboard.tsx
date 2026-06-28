import DashboardHeader from "../components/dashboard/DashboardHeader";
import RecentSection from "../components/dashboard/RecentSection";

function Dashboard() {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <RecentSection />
  
    </div>
  );
}

export default Dashboard;