import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

interface User {
  _id: string;
  username: string;
  email: string;
  profilePicture: string;
  department: string;
  isVerified: boolean;
  isAdmin: boolean;
}

const Home = () => {
  const navigate = useNavigate();
  const { removeAuthToken } = useAuth();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/users`,
          {
            withCredentials: true,
          }
        );
        setUsers(data);
      } catch (error: any) {
        toast.error(error.response?.data.message);
      }
    };
    getUsers();
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
        <div className="profile" onClick={logout}>
          <p>{users && users[0]?.username} </p>|
          <div className="profile_circle">
            <img src={users && users[0]?.profilePicture} alt="obaid" />
          </div>
          <div className="dropdown_menu">
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
              <li>
                <i
                  className="fa fa-cogs fa-sm fa-fw me-2 text-gray-400"
                  style={{
                    color: "#d1d3e2",
                  }}
                ></i>
                Security
              </li>
              <li>
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
