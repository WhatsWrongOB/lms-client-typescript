import { useState, ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

interface UserDetails {
  curPass: string;
  newPass: string;
  confirmPass: string;
}

const UpdatePassForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserDetails>({
    curPass: "",
    newPass: "",
    confirmPass: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const { curPass, newPass, confirmPass } = formData;

    if (newPass !== confirmPass)
      toast.error(" New password not match with confirm password");
    else if (newPass == curPass)
      toast.error("Set New Password don't set existing password again");
    else {
      try {
        setLoading(true);
        const { data } = await axios.post(
          `${
            import.meta.env.VITE_SERVER
          }/api/update-password/666a9433edfaa20e1c299a38`,
          { curPass, newPass },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (data?.success) toast.success(data.message);
      } catch (error: any) {
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="auth_container">
      <div className="auth_upper auth_reg_upper">
        <h1>Change Password</h1>
      </div>
      <form className="auth_form" onSubmit={handleSubmit}>
        <div className="group">
          <FaKey size={15} />
          <input
            type={"password"}
            name="curPass"
            placeholder="Current Password"
            value={formData.curPass}
            onChange={handleChange}
            required
          />
        </div>

        <div className="group">
          <FaKey size={15} />
          <input
            type={"password"}
            name="newPass"
            placeholder="New Password"
            value={formData.newPass}
            onChange={handleChange}
            required
          />
        </div>

        <div className="group">
          <FaKey size={15} />
          <input
            type={"password"}
            name="confirmPass"
            placeholder="Re-Type Password"
            value={formData.confirmPass}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">
          {loading ? (
            <ClipLoader color="white" loading={loading} size={10} />
          ) : (
            "Change"
          )}
        </button>
      </form>
      <p className="forget">
        Already have an account ? <Link to="/">login</Link>
      </p>
    </div>
  );
};

export default UpdatePassForm;
