import { useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { FcDepartment } from "react-icons/fc";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Forget = () => {
  const [formData, setFormData] = useState({
    department: "",
    roll: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success(formData.roll);
  };

  return (
    <div className="auth_container">
      <div className="auth_upper auth_reg_upper">
        <h1>Forget Password</h1>
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
            <option value="">-- Select Department --</option>
            <option value="bsse">BSSE</option>
            <option value="bscs">BSCS</option>
            <option value="bsit">BSIT</option>
          </select>
        </div>

        <div className="group">
          <FaUserAstronaut size={15} />
          <input
            type="text"
            name="roll"
            placeholder="Your University Roll no *"
            value={formData.roll}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p className="forget">
        Not Found? <Link to="/">Go Back</Link>
      </p>
    </div>
  );
};

export default Forget;
