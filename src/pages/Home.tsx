import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useGetToken } from "../hooks";
import { toast } from "react-hot-toast";

const Home = () => {
  const token = useGetToken();

  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <Navbar />
      <section className="home_section">
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
