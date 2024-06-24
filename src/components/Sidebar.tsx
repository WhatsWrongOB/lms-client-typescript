import {
  FaUser,
  FaGavel,
  FaFreebsd,
  FaCodepen,
  FaSatellite,
  FaHome,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <a>
          <FaHome />
          <p>Home</p>
        </a>
        <a>
          <FaUser />
          <p>Students</p>
        </a>

        <a>
          <FaSatellite />
          <p>Attendance</p>
        </a>
        <a>
          <FaFreebsd />

          <p>Feedbacks</p>
        </a>
        <a>
          <FaCodepen />

          <p>Complains</p>
        </a>
        <a>
          <FaGavel />

          <p>Settings</p>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
