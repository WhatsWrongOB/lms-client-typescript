import React from "react";
import { ComplainTypes } from "../pages/admin/Complain";

interface ComplainCardProps {
  complain: ComplainTypes;
}

const ComplainCard: React.FC<ComplainCardProps> = ({ complain }) => {
  return (
    <div className="complain-card">
      <div className="complain-header">
        <h3>{complain.user.username}</h3>
        <span>Topic: {complain.topic}</span>
      </div>
      <div className="complain-body">
        <p>{complain.description}</p>
        {complain.file && (
          <div className="complain-file">
            <strong>Attached File: </strong>
            <a href={complain.file} target="_blank" rel="noopener noreferrer">
              View File
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplainCard;
