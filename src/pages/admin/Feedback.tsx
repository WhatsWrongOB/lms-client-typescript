import FeedbackCard from "../../components/FeedbackCard";
import { useStore } from "../../context";

const Feedback = () => {
  const { feedback } = useStore();

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
