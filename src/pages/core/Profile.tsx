import { User } from "../../components/Navbar";
import Navigation from "../../components/Navigation";
import { useGetUser } from "../../hooks";


const Profile = () => {
  const user: User | null = useGetUser();

  const name: string | undefined = user?.username;

  return (
    <>
      <Navigation title={`${name}"s  Profile`} />
      <main className="profile_page"></main>
    </>
  );
};

export default Profile;
