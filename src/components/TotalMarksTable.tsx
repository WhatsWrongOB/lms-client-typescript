import { MarksTypes } from "../types";

interface MarksTableProps {
  heading: string;
  tableHeading: string[];
  tableMarks: MarksTypes | null;
}

const TotalMarksTable = ({
  heading,
  tableHeading,
  tableMarks,
}: MarksTableProps) => {



  return (
    <div className="container_marks">
      <div className="card_markd">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <div className="heading">{heading}</div>
            </div>
            <div className="col-12">
              <table className="table">
                <thead>
                  <tr>
                    {tableHeading.map((heading, i) => (
                      <th key={i}>{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {tableMarks?.totalAssignmentMarks ?? "null"}
                    </td>
                    <td>
                      {tableMarks?.presentationMarks ?? "null"}
                    </td>
                    <td>
                      {"null"}
                    </td>
                    <td>
                      {tableMarks?.midMarks ?? "null"}
                    </td>
                    <td>
                      {tableMarks
                        ? tableMarks.totalAssignmentMarks +
                          tableMarks.presentationMarks +
                          tableMarks.totalAcademicsMarks +
                          tableMarks.midMarks
                        : "null"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalMarksTable;
