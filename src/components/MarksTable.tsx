interface MarksTableProps {
  heading: string;
  tableHeading: string[];
  tableMarks: string[];
}

const MarksTable = ({ heading, tableHeading, tableMarks }: MarksTableProps) => {
  let totalMarks = 0;

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
                    {tableMarks.map((num, i) => {
                      totalMarks += parseInt(num);
                      return <td key={i}>{num}</td>;
                    })}
                    <td>{totalMarks}</td>;
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

export default MarksTable;
