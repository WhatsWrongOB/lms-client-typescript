import { useStore } from "../../context";

const Dashboard = () => {
  const { feedback, courses, complain, students } = useStore();

  return (
    <div className="dashboard">
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Feedbacks</h3>
          <p>{feedback !== null ? feedback.length : "Loading..."}</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Complaints</h3>
          <p>{complain !== null ? complain.length : "Loading..."}</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Students</h3>
          <p>{students !== null ? students.length : "Loading..."}</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Courses</h3>
          <p>{courses !== null ? courses.length : "Loading..."}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
