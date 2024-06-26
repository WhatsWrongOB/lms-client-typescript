interface AttendanceTableProps {
  courseName: string | null;
  courseCode: string | null;
}

const AttendanceTable = ({ courseName, courseCode }: AttendanceTableProps) => {
  return (
    <div className="custom-container">
      <div className="custom-card">
        <div className="custom-card-body">
          <div className="custom-row">
            <div className="custom-col-12">
              <div className="custom-heading">
                {courseName} <small>~ {courseCode}</small>
              </div>
            </div>
            <div className="custom-col-12">
              <div className="custom-table-responsive">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>May</th>
                      <th>June</th>
                      <th>Overall</th>
                    </tr>
                    <tr>
                      <th>23</th>
                      <th>24</th>
                      <th>27</th>
                      <th>30</th>
                      <th>31</th>
                      <th>%</th>
                      <th>01</th>
                      <th>06</th>
                      <th>08</th>
                      <th>13</th>
                      <th>14</th>
                      <th>20</th>
                      <th>21</th>
                      <th>22</th>
                      <th>%</th>
                      <th>TLD</th>
                      <th>TLA</th>
                      <th>%LA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="custom-text-red">A</td>
                      <td className="custom-text-red">A</td>
                      <td className="custom-text-red">A</td>
                      <td className="custom-text-green">P</td>
                      <td className="custom-text-green">P</td>
                      <td>40%</td>
                      <td className="custom-text-green">P</td>
                      <td className="custom-text-green">P</td>
                      <td className="custom-text-green">P</td>
                      <td className="custom-text-green">P</td>
                      <td className="custom-text-red">A</td>
                      <td className="custom-text-green">P</td>
                      <td className="custom-text-green">P</td>
                      <td className="custom-text-green">P</td>
                      <td>87.5%</td>
                      <td>13</td>
                      <td>9</td>
                      <td>69.2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;
