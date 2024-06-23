import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import { useGetUser } from "../../hooks";
import { User } from "../../types";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  const user: User | null = useGetUser();

  const navigate = useNavigate();

  return (
    <>
      <Navigation title={`${user?.username}'s Profile`} />
      <main className="profile_page">
        <div className="card">
          <div
            className="edit"
            onClick={() => navigate(`/lms/update-profile/${user?.username}`)}
          >
            <FaEdit size={23} />
          </div>
          <img src={user?.profilePicture} alt="Profile" />
          <div>
            <h2>{user?.username}</h2>
            <h3>{user?.department.toUpperCase()} Department</h3>
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="profile_modal"></div>
      </main>
    </>
  );
};

export default Profile;
