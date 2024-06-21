import { useState, ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { useGetToken, useGetUserId } from "../../hooks";

interface UserDetails {
  curPass: string;
  newPass: string;
  confirmPass: string;
}

const UpdatePassForm = () => {
  const token = useGetToken();
  const id = useGetUserId();
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

    if (newPass !== confirmPass) {
      toast.error("New password does not match with confirm password.");
      return;
    }

    if (newPass === curPass) {
      toast.error("New password cannot be the same as the current password.");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/update-password/${id}`,
        { curPass, newPass },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (data?.success) {
        toast.success(data.message);
        setFormData({ curPass: "", newPass: "", confirmPass: "" });
      }
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error("Server not responding. Please try again later.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth">
      <div className="auth_container">
        <div className="auth_upper auth_reg_upper">
          <h1>Change Password</h1>
        </div>
        <form className="auth_form" onSubmit={handleSubmit}>
          <div className="group">
            <FaKey size={15} />
            <input
              type="password"
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
              type="password"
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
              type="password"
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
          Already have an account? <Link to="/">login</Link>
        </p>
      </div>
    </main>
  );
};

export default UpdatePassForm;
