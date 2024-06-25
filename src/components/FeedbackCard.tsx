
import React from "react";
import { FeedbackType } from "../pages/admin/Feedback";

interface FeedbackItemProps {
  feedback: FeedbackType;
}

const FeedbackCard: React.FC<FeedbackItemProps> = ({ feedback }) => {
  return (
    <div className="feedback-card">
      <div className="feedback-header">
        <h3>{feedback.user.username}</h3>
        <span>{new Date(feedback.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="feedback-body">
        <p><strong>Rating:</strong> {feedback.rating}</p>
        <p>{feedback.description}</p>
        {feedback.suggestion && <p><strong>Suggestion:</strong> {feedback.suggestion}</p>}
      </div>
    </div>
  );
};

export default FeedbackCard;
