import { useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const ForgetForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      setLoading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/forget-password`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data?.success) {
        toast.success(data.message);
        navigate("/forget");
      }
    } catch (error: any) {
      if (error.response) toast.error(error.response.data.message);
      else if (error.request)
        toast.error("Server not responding. Please try again later.");
      else toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <main className="auth">
      <div className="auth_container">
      <div className="auth_upper auth_reg_upper">
        <h1>Forget Password</h1>
      </div>
      <form className="auth_form" onSubmit={handleSubmit}>
        <div className="group">
          <FaUserAstronaut size={15} />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
          />
        </div>
        <button type="submit">
          {loading ? (
            <ClipLoader color="white" loading={loading} size={10} />
          ) : (
            "Submit"
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

export default ForgetForm;
