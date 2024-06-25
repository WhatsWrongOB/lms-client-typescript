import {
  FaUser,
  FaFreebsd,
  FaCodepen,
  FaSatellite,
  FaCocktail
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
         <Link className="header" to={"/lms/admin"}>
         <img src="https://lms.giccl.edu.pk/img/logo.png" />
          <h1>Dashboard</h1>
        </Link>
        <Link to="/lms/admin/students">
          <FaUser />
          <p>Students</p>
        </Link>
        <Link to="/lms/admin/attendance">
          <FaSatellite />
          <p>Attendance</p>
        </Link>
        <Link to="/lms/admin/courses">
          <FaCocktail />
          <p>Courses</p>
        </Link>
        <Link to={"/lms/admin/feedbacks"}>
          <FaFreebsd />
          <p>Feedbacks</p>
        </Link>
        <Link to={"/lms/admin/complains"}>
          <FaCodepen />
          <p>Complains</p>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
