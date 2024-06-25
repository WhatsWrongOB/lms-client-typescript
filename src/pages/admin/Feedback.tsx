import { useEffect, useState } from "react";
import { useGetToken, useHandleAxiosError } from "../../hooks";
import axios from "axios";
import FeedbackCard from "../../components/FeedbackCard";

export interface FeedbackType {
  _id: string;
  rating: number;
  description: string;
  suggestion?: string;
  user: {
    _id: string;
    username: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const Feedback = () => {
  const [feedback, setFeedback] = useState<FeedbackType[]>([]);

  useEffect(() => {
    const token = useGetToken();

    if (!token) return;

    const fetchFeedback = async (): Promise<void> => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/feedback`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (data) setFeedback(data.feedback);
      } catch (error: any) {
        useHandleAxiosError(error);
      }
    };
    fetchFeedback();
  }, []);

  return (
    <div className="dashboard">
      <div className="feedback-list">
        {feedback.map((item) => (
          <FeedbackCard key={item._id} feedback={item} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
