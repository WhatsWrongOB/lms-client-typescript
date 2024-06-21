import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <section>

        <main className="main">
          <div className="main_container">
            <div className="status">
              <ul className="flex">
                <li>Apl Status</li>
                <li>Attendance OV</li>
                <li>Assignments</li>
                <li>Complains</li>
                <li>WA Group Links</li>
                <li>Shared Sheets</li>
              </ul>
            </div>
            <div className="codex">
              <img
                src="https://lms.giccl.edu.pk/img/CodeX%20Logo%20copy%20l.png"
                alt="codex"
              />
            </div>
          </div>
        </main>


      </section>
      <Footer />

    </>
  );
};

export default Home;
