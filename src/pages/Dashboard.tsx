import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Navigation title="Dashboard" />
      <main className="dashboard"></main>
      <Footer />
    </>
  );
};

export default Dashboard;
