import { useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const Forget = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/reset-password`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data?.success) {
        toast.success(data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
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
        <button type="submit">Submit</button>
      </form>
      <p className="forget">
        Not Found ? <Link to="/">Go Back</Link>
      </p>
    </div>
  );
};

export default Forget;
