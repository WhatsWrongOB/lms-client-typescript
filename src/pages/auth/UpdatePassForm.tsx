import { useState, ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import {
  useAxiosConfiguration,
  useGetUser,
  useHandleAxiosError,
} from "../../hooks";
import Navigation from "../../components/Navigation";

interface UserDetails {
  curPass: string;
  newPass: string;
  confirmPass: string;
}

const UpdatePassForm = () => {
  const user = useGetUser();
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

    const id = user?.id;

    if (newPass !== confirmPass) {
      toast.error("New password does not match with confirm password.");
      return;
    }

    if (newPass === curPass) {
      toast.error("New password cannot be the same as the current password.");
      return;
    }

    if (!id) {
      toast.error("Id no given in update password");
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/update-password/${id}`,
        { curPass, newPass },
        useAxiosConfiguration()
      );

      if (data?.success) {
        toast.success(data.message);
        setFormData({ curPass: "", newPass: "", confirmPass: "" });
      }
    } catch (error: any) {
      useHandleAxiosError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation title="Update Password" />
      <main className="auth lms_auth">
        <div className="auth_container lms_auth_container">
          <form className="auth_form lms_form" onSubmit={handleSubmit}>
            <div className="group">
              <FaKey size={15} color="gray" />
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
              <FaKey size={15} color="gray" />
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
              <FaKey size={15} color="gray" />
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
            Not need back to home ? <Link to="/lms">home</Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default UpdatePassForm;
