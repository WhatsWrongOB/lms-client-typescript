import Footer from "../components/Footer";
import Navbar, { User } from "../components/Navbar";
import Navigation from "../components/Navigation";
import { useGetUser } from "../hooks";

const Profile = () => {
  const user: User | null = useGetUser();

  const name: string | undefined = user?.username;

  return (
    <>
      <Navbar />
      <Navigation title={`${name}"s  Profile`} />
      <main className="profile_page"></main>
      <Footer />
    </>
  );
};

export default Profile;
