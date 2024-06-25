import { useEffect, useState } from "react";
import { useGetToken, useHandleAxiosError } from "../../hooks";
import axios from "axios";
import ComplainCard from "../../components/ComplainCard";

export interface ComplainTypes {
  _id: string;
  topic: number;
  description: string;
  file?: string;
  user: {
    _id: string;
    username: string;
  };
}

const Complain = () => {
  const [complain, setComplain] = useState<ComplainTypes[]>([]);

  useEffect(() => {
    const token = useGetToken();

    if (!token) return;

    const fetchComplain = async (): Promise<void> => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/complain`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (data) setComplain(data.complain);
      } catch (error: any) {
        useHandleAxiosError(error);
      }
    };
    fetchComplain();
  }, []);


  return (
    <div className="dashboard">
      <div className="feedback-list">
        {complain.map((item) => (
          <ComplainCard key={item._id} complain={item} />
        ))}
      </div>
    </div>
  );
};

export default Complain;
