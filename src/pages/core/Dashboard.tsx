import Navigation from "../../components/Navigation";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Navigation title="Dashboard" />
      <main className="dashboard">
        <Sidebar />
      </main>
    </>
  );
};

export default Dashboard;
