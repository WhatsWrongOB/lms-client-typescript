import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";

const Timetable = () => {
  return (
    <>
      <Navbar />
      <Navigation title="Timetable" />
      <main className="timetable"></main>
      <Footer />
    </>
  );
};

export default Timetable;
