import React from "react";
import { CourseDetails } from "../pages/admin/Course";

interface TableProps {
  columns: string[];
  data: CourseDetails[];
}

const CourseTable: React.FC<TableProps> = ({ columns, data }) => {
  const columnKeys: { [key: string]: keyof CourseDetails } = {
    "Course Name": "courseName",
    "Course Code": "courseCode",
    "Teacher Name": "teacherName",
  };

  return (
    <div className="table-container">
      <table className="beautiful-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{user[columnKeys[col]]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
