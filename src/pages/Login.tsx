import { useState, ChangeEvent, FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FaUser, FaKey, FaUserAstronaut } from "react-icons/fa";
import user from "/public/user.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    roll: "",
    password: "",
  });

  const handleShowPass = () => {
    setActive(!active);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {  password } = formData;

    if (password.length <= 5) toast.error("Password must be 6 characters");

    toast.success("Login Successful");
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
          <FaUser size={15} />
          <input
            type="text"
            name="username"
            placeholder="Username *"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="group">
          <FaUserAstronaut size={15} />
          <input
            type="text"
            name="roll"
            placeholder="University Roll no *"
            value={formData.roll}
            onChange={handleChange}
            required
          />
        </div>

        <div className="group">
          <FaKey size={15} />
          <input
            type={active ? "text" : "password"}
            name="password"
            placeholder="Password *"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className="eye" onClick={handleShowPass}>
            {active ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit">Login</button>
        <div className="remember">
          <input type="checkbox" />
          <span>Remember Me (30 days)</span>
        </div>
      </form>
      <p className="forget">
        Forgot Password? <Link to="/register">click here</Link>
      </p>
    </div>
  );
};

export default Login;
