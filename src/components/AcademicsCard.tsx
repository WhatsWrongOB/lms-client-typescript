import { CourseType } from "../types";
import { Link } from "react-router-dom";

const AcademicsCard = ({ course }: { course: CourseType }) => {
  return (
    <div className="academics_card">
      <div className="academics_card_left">
        <p>100%</p>
      </div>
      <div className="academics_card_right">
        <h5>
          {course.courseName} ({course.courseCode})
        </h5>
        <p>{course.teacherName}</p>
        <Link to={`/lms/subject-academics?courseCode=${course.courseCode}&courseName=${course.courseName}`}>
          Explore
        </Link>
      </div>
    </div>
  );
};

export default AcademicsCard;
