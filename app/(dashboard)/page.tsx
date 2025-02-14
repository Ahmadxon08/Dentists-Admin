import AddModal from "@/components/AddModal";
import ExistingAppointmentModal from "@/components/ExistModal";
import HomeComponent from "@/components/HomeComponent";

const Home = () => {
  return (
    <div className="p-6 mx-auto">
      <HomeComponent />
      <AddModal />
      <ExistingAppointmentModal />
    </div>
  );
};

export default Home;
