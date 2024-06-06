import { useState, ChangeEvent, FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FaUser, FaKey } from "react-icons/fa";
import user from "/public/user.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FcDepartment } from "react-icons/fc";

const Login = () => {

  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    department: "",
    password: "",
  });

  const handleShowPass = () => {
    setActive(!active);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success("Login Successful");

    navigate("/")
  };

  return (
    <div className="auth_container">
      <div className="auth_upper">
        <div>
          <img src={user} alt="user" />
        </div>
        <h1>Student Login</h1>
      </div>
      <form className="auth_form" onSubmit={handleSubmit}>
        <div className="group">
          <FcDepartment color="black" />
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">--- Select Depart ---</option>
            <option value="bsse">BSSE</option>
            <option value="bscs">BSCS</option>
            <option value="bsit">BSIT</option>
          </select>
        </div>

        <div className="group">
          <FaUser size={15} />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>

        <div className="group">
          <FaKey size={15} />
          <input
            type={active ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className="eye" onClick={handleShowPass}>
            {active ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit">Login</button>
      </form>
      <p className="forget">
        Forgot Password ? <Link to="/forget">click here</Link>
      </p>
      <p className="forget">
        Don't have an account ? <Link to="/register">register here</Link>
      </p>
    </div>
  );
};

export default Login;
