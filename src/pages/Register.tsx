import { useState, ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUser, FaKey, FaUserAstronaut } from "react-icons/fa";
import { FcDepartment } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({
    department: "",
    username: "",
    roll: "",
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success("Registeration Successfull");
    navigate("/");
  };

  return (
    <div className="auth_container">
      <div className="auth_upper auth_reg_upper">
        <h1>Student Registration</h1>
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
          <FaUserAstronaut size={15} />
          <input
            type="text"
            name="roll"
            placeholder="Roll number"
            value={formData.roll}
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
        <button type="submit">Register</button>
      </form>
      <p className="forget">
        Already have an account ? <Link to="/">login</Link>
      </p>
    </div>
  );
};

export default Register;
