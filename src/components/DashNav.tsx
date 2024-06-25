import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

const DashNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = (): void => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav className="parent_nav">
      <nav className="nav_bar dash_nav">
        <div className="logo">
          <img src="https://lms.giccl.edu.pk/img/logo.png" alt="giccl" />
          <Link to={"/lms"} className="logo_text dash_logo">
            <h3>GIGCCL</h3>
            <p>Student Portal</p>
          </Link>
        </div>

        <ul className={toggleMenu ? "menu_active" : ""}>
          <Link to={"/lms"}>
            <li onClick={() => setToggleMenu(false)}>Home</li>
          </Link>

          <Link to="/lms/admin/students">
            <li onClick={() => setToggleMenu(false)}>Students</li>
          </Link>

          <Link to="/lms/admin/attendance">
            <li onClick={() => setToggleMenu(false)}>Attendancs</li>
          </Link>

          <Link to={"/lms/admin/courses"}>
            <li onClick={() => setToggleMenu(false)}>Course</li>
          </Link>

          <Link to={"/lms/admin/feedbacks"}>
            <li onClick={() => setToggleMenu(false)}>Feedback</li>
          </Link>

          <Link to={"/lms/admin/complains"}>
            <li onClick={() => setToggleMenu(false)}>Complain</li>
          </Link>
        </ul>
        <div className="hamburger" onClick={handleMenuToggle}>
          <Hamburger color="black" size={16} toggled={toggleMenu} />
        </div>
      </nav>
    </nav>
  );
};

export default DashNav;
