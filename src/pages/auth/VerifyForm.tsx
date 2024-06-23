import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { useHandleAxiosError } from "../../hooks";

const VerifyForm = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const token = searchParams.get("token");

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      setLoading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/verify-email?token=${token}`
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
        <h1>Email Verification</h1>
      </div>
      <form className="auth_form" onSubmit={handleSubmit}>
        <button type="submit">
          {loading ? (
            <ClipLoader color="white" loading={loading} size={10} />
          ) : (
            "Verify"
          )}
        </button>
      </form>
      <p className="forget">Click this button to verify your account</p>
    </div>
   </main>
  );
};

export default VerifyForm;
