import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

export interface User {
  id: string;
  email: string;
  username: string;
  department: string;
  isAdmin: boolean;
  profilePicture: string;
}

const Home = () => {
  const navigate = useNavigate();
  const { removeAuthToken } = useAuth();

  const [toogleMenu, setToogleMenu] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleToogle = (): void => {
    setToogleMenu((prev) => !prev);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("CurrentUser");
    if (storedUser) setCurrentUser(JSON.parse(storedUser));
  }, []);

  const logout = async (): Promise<void> => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/logout`,
        {
          withCredentials: true,
        }
      );

      if (data?.success) {
        removeAuthToken();
        localStorage.removeItem("CurrentUser");
        toast.success(data.message);
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };


  return (
    <section>
      <nav className="pre_nav">
        <ul>
          <li>
            <i className="fa-solid fa-bullhorn"></i>
            Notices
          </li>
          <li>
            <i className="fa-regular fa-circle-dot"></i>
            Updates
          </li>
        </ul>
        <div className="profile" onClick={handleToogle}>
          <p>{currentUser?.username} </p>|
          <div className="profile_circle">
            <img src={currentUser?.profilePicture} alt="obaid" />
          </div>
          <div
            className={toogleMenu ? "dropdown_menu active" : "dropdown_menu"}
          >
            <ul>
              <li>
                <i
                  className="fa fa-user fa-sm fa-fw me-2 text-gray-400"
                  style={{
                    color: "#d1d3e2",
                  }}
                ></i>
                Profile
              </li>
              <Link to="/update-password">
                <li>
                  <i
                    className="fa fa-cogs fa-sm fa-fw me-2 text-gray-400"
                    style={{
                      color: "#d1d3e2",
                    }}
                  ></i>
                  Security
                </li>
              </Link>
              <li onClick={logout}>
                <i
                  className="fa fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"
                  style={{
                    color: "#d1d3e2",
                  }}
                ></i>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="nav_bar">
        <div className="logo">
          <img src="https://lms.giccl.edu.pk/img/logo.png" alt="giccl" />
          <div className="logo_text">
            <h3>GIGCCL</h3>
            <p>Student Portal</p>
          </div>
        </div>

        <ul>
          <li>Home</li>
          <li>Academics</li>
          <li>Application</li>
          <li>Timetables</li>
          <li>Learning</li>
          <li>Feedback</li>
        </ul>
      </nav>

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
  );
};

export default Home;
