import HeaderTitle from "@/components/HeaderTitle";
import ProfileBody from "@/components/ProfileBody";
import ProfileHead from "@/components/ProfileHead";
export const generateMetadata = () => {
  return {
    title: "Profile | Teeth",
  };
};

const Profile = () => {
  return (
    <div className="ContentContainer">
      <HeaderTitle title={"Shaxsiy hisobingiz"} />
      {/* ** top section of the profile page*** */}

      <ProfileHead />

      {/* ** bottom section of the profile page*** */}
      <ProfileBody />
    </div>
  );
};

export default Profile;
