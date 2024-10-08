import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaKey } from "react-icons/fa";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { useHandleAxiosError } from "../../hooks";

const Reset = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const token = searchParams.get("token");

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>("");

  const handleShowPass = (): void => {
    setActive(!active);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      setLoading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/reset-password`,
        { token, newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data?.success) {
        toast.success(data.message);
        navigate("/");
      }
    } catch (error: any) {
      useHandleAxiosError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
   <main className="auth">
     <div className="auth_container">
      <div className="auth_upper auth_reg_upper">
        <h1>Reset Password</h1>
      </div>
      <form className="auth_form" onSubmit={handleSubmit}>
        <div className="group">
          <FaKey size={15} />
          <input
            type={active ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <span className="eye" onClick={handleShowPass}>
            {active ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button type="submit">
          {loading ? (
            <ClipLoader color="white" loading={loading} size={10} />
          ) : (
            "Reset"
          )}
        </button>
      </form>
      <p className="forget">
        Not Found ? <Link to="/">Go Back</Link>
      </p>
    </div>
   </main>
  );
};

export default Reset;
