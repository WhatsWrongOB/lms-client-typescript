import AcademicsCard from "../../components/AcademicsCard";
import Navigation from "../../components/Navigation";
import { useStore } from "../../context";

const Academics = () => {

  const {courses} = useStore()
  return (
    <>
      <Navigation title="Academics" />
      <main className="academics">
        <div className="academics_container">
          <div className="academics_heading">Attendance Months</div>
          <div className="academics_inner_container">
           {
            courses && courses.map((course) => (
              <AcademicsCard key={course._id} course={course} />
            ))
           }


            <div className="overall_percent">
              <h3>Overall Percentage</h3>
              <p>Total attendance percentage of all subjects</p>
              <strong>71.2%</strong>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Academics;
