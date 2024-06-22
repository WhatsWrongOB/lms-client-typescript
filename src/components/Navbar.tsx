import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useGetUser } from "../hooks";
import { User } from "../types";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleToogle = (): void => {
    setToggleDropDown((prev) => !prev);
  };

  const handleMenuToggle = (): void => {
    setToggleMenu((prev) => !prev);
  };

  useEffect(() => {
    const storedUser = useGetUser();
    if (storedUser) setCurrentUser(storedUser);
  }, []);

  useEffect(() => {
    const closeMenuOnOutsideClick = (event: MouseEvent) => {
      if (toggleMenu) {
        const target = event.target as HTMLElement;
        if (!target.closest(".nav_bar")) {
          setToggleMenu(false);
        }
      }
      if (toggleDropDown) {
        const target = event.target as HTMLElement;
        if (!target.closest(".profile") && !target.closest(".dropdown_menu")) {
          setToggleDropDown(false);
        }
      }
    };

    document.body.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.body.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [toggleMenu]);

  const logout = async (): Promise<void> => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/logout`
      );

      if (data?.success) {
        localStorage.removeItem("token");
        localStorage.removeItem("CurrentUser");
        toast.success(data.message);
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <nav className="parent_nav">
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
            className={
              toggleDropDown ? "dropdown_menu active" : "dropdown_menu"
            }
          >
            <ul>
              <Link to={"/lms/profile"}>
                <li>
                  <i
                    className="fa fa-user fa-sm fa-fw me-2 text-gray-400"
                    style={{
                      color: "#d1d3e2",
                    }}
                  ></i>
                  Profile
                </li>
              </Link>
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
          <Link to={"/lms"} className="logo_text">
            <h3>GIGCCL</h3>
            <p>Student Portal</p>
          </Link>
        </div>

        <ul className={toggleMenu ? "menu_active" : ""}>
          <Link to={"/lms"}>
            <li onClick={() => setToggleMenu(false)}>Home</li>
          </Link>

          {currentUser?.isAdmin ? (
            <Link to={"/lms/dashboard"}>
              <li onClick={() => setToggleMenu(false)}>Dashboard</li>
            </Link>
          ) : null}

          <Link to="/lms/academics">
            <li onClick={() => setToggleMenu(false)}>Academics</li>
          </Link>

          <Link to={"/lms/timetable"}>
            <li onClick={() => setToggleMenu(false)}>Timetable</li>
          </Link>

          <Link to={"/lms/feedback"}>
            <li onClick={() => setToggleMenu(false)}>Feedback</li>
          </Link>
        </ul>
        <div className="hamburger" onClick={handleMenuToggle}>
          <Hamburger color="white" size={16} toggled={toggleMenu} />
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
