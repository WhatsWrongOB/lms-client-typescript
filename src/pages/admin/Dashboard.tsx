import { useEffect, useState } from "react";
import axios from "axios";
import { useGetToken, useHandleAxiosError } from "../../hooks";

const Dashboard = () => {
  const [feedbackCount, setFeedbackCount] = useState<number | null>(null);
  const [complaintsCount, setComplaintsCount] = useState<number | null>(null);
  const [studentsCount, setStudentsCount] = useState<number | null>(null);
  const [courseCount, setCourseCount] = useState<number | null>(null);
  const token = useGetToken();

  useEffect(() => {
    if (!token) return;

    const fetchDashboardData = async () => {
      try {
        const [
          feedbackResponse,
          complaintsResponse,
          studentsResponse,
          courseResponse,
        ] = await Promise.all([
          axios.get(`${import.meta.env.VITE_SERVER}/api/feedback`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(`${import.meta.env.VITE_SERVER}/api/complain`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(`${import.meta.env.VITE_SERVER}/api/users`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(`${import.meta.env.VITE_SERVER}/api/course`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setFeedbackCount(feedbackResponse.data.feedback.length);
        setComplaintsCount(complaintsResponse.data.complain.length);
        setStudentsCount(studentsResponse.data.length);
        setCourseCount(courseResponse.data.course.length);
      } catch (error: any) {
        useHandleAxiosError(error);
      }
    };

    fetchDashboardData();
  }, [token]);

  return (
    <div className="dashboard">
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Feedbacks</h3>
          <p>{feedbackCount !== null ? feedbackCount : "Loading..."}</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Complaints</h3>
          <p>{complaintsCount !== null ? complaintsCount : "Loading..."}</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Students</h3>
          <p>{studentsCount !== null ? studentsCount : "Loading..."}</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Courses</h3>
          <p>{courseCount !== null ? courseCount : "Loading..."}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
