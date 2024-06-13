import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/users`,
          {
            withCredentials: true,
          }
        );
        console.log(data);
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    };
    getUsers();
  }, []);

  const logout = async (): Promise<void> => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/logout`,
        {
          withCredentials: true,
        }
      );

      if (data?.success) {
        toast.success(data.message);
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section>
      <nav className="pre_nav">
        <ul>
          <li>
            <i className="fa-solid fa-bullhorn"></i>
            Notices
          </li>
          <li>
            <i className="fa-regular fa-circle-dot"></i>
            Updates
          </li>
        </ul>
        <div className="profile" onClick={logout}>
          <p>Obaid</p>|
          <div className="profile_circle">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACUCAMAAAC3HHtWAAAAMFBMVEXMzMz////Jycn8/Pzp6en19fXPz8/4+Pjx8fHT09Pj4+Pb29vX19ff39/t7e3m5uaURh7+AAADTElEQVR4nO2bzdbrIAhFFY2JxqTv/7a3trdf2zQ/SgQzYM86OwsIopwqJQiCIAiCIAiCIAiCIAiCIAjC9QCA1hKWgHI+jiHcQhijd+oqAsGFuTP6henm4K6gzY2Dfsv6L04Po2stbOr0Ot3UUhaM/YauRD+2yik4q38S+ZlSbRvVm99K5EdKfQNd+5lsmdG4ncevnEZmaTCZnRL7EKYNb9TA50XsIc5zSvM5NfaiZ/wMYCgQpvXAF7Qpq8b+0qknLmnuuJF90zEdomALhd0PA56gQbEwrVmU3UNWUmUJwxO04ipLsFTaiBCm9UgvDGaUspk+ndCXVlnC9AyFhgqZ1uS6YEIqIz8HICCV3ciV4T4Ajk8A080SHbWw6yoDtDLyOruusrJx9g35YHthZeVj4xPyOQjdaQO5Ml88NyaMpr91AlIZ/RsudChl5E0DXWjkZaayH4EWMYv0wpTCdLSBQxhgrig8T1VQnk7DdEcfi2/CbK97pZXGUmUPXKEyvn1KYU/j6GV/5L+6GG0ZdRWNaYxvoQ98rrSBf42SJ43vs3zj5sNaM3pusuZMe5QDZWyP2kvi/hWvYxkw1oHNlXBaCjddpoMLvV7uX9OvvvmWHxREu3iGNL2NcAVrBICLk+1MkmdMZ6formUpuYtx6gqREgThG1BX+zTh0dCmYO1sbZge7ewCCkG50XZfh4DpOzs2tseB8mFrgByCbycOxmFvQjNDG5sXxHB8fTKB2xZ0z5PNdCxZ1pyCL7kKBz5jUJ717A2XCQ3SVbPMfXO/dDJog4zCX1FHvw5w5T6SZ9yI3ZiQ4brcoifNaKaHcD1qhs77i945vaAqNridFEZlQEDvDz8h2SXuWqHzSIbp6rqqRCxRPWq3s/F6YW5VdaHdQGvUfCOCiO9jS0xNK3eJFzpLXLXTAO0e2aLagvh8h11S6SuI1YVpXecFt2yAzaOvoOv0Mb5OhcMdtdA/5vzKH37/AVZF2OlFGVCU/5Oz/RZr6jrm3K4M5YDI5dwtlC5kJ4PmCYVpfWInW21cXOfEEFn0t6Zy8H+EqjovroGfIbEe7VxmrDBFczC9MVhhdP3/BfLwJP4yE8ivs/qQ/Qty7K58L1kD1zfKDXDl7Fnm/gG8xyGaZWDRqgAAAABJRU5ErkJggg=="
              alt="obaid"
            />
          </div>
          <div className="dropdown_menu">
            <ul>
              <li>
                <i
                  className="fa fa-user fa-sm fa-fw me-2 text-gray-400"
                  style={{
                    color: "#d1d3e2",
                  }}
                ></i>
                Profile
              </li>
              <li>
                <i
                  className="fa fa-cogs fa-sm fa-fw me-2 text-gray-400"
                  style={{
                    color: "#d1d3e2",
                  }}
                ></i>
                Security
              </li>
              <li>
                <i
                  className="fa fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"
                  style={{
                    color: "#d1d3e2",
                  }}
                ></i>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="nav_bar">
        <div className="logo">
          <img src="https://lms.giccl.edu.pk/img/logo.png" alt="giccl" />
          <div className="logo_text">
            <h3>GIGCCL</h3>
            <p>Student Portal</p>
          </div>
        </div>

        <ul>
          <li>Home</li>
          <li>Academics</li>
          <li>Application</li>
          <li>Timetables</li>
          <li>Learning</li>
          <li>Feedback</li>
        </ul>
      </nav>

      <main className="main">
        <div className="main_container">
          <div className="status">
            <ul className="flex">
              <li>Apl Status</li>
              <li>Attendance OV</li>
              <li>Assignments</li>
              <li>Complains</li>
              <li>WA Group Links</li>
              <li>Shared Sheets</li>
            </ul>
          </div>
          <div className="codex">
            <img
              src="https://lms.giccl.edu.pk/img/CodeX%20Logo%20copy%20l.png"
              alt="codex"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
