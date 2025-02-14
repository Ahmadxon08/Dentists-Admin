import DeleteAppointment from "@/components/DeleteAppoinment";
import EditAppointment from "@/components/EditAppointment";
import HeaderTitle from "@/components/HeaderTitle";
import QarzTableComponent from "@/components/QarzTableComponent";
import SearchItems from "@/components/SearchItems";
export const generateMetadata = () => {
  return {
    title: "Qarzdorlar | Teeth",
  };
};
const BemorlarPage = () => {
  return (
    <div className="ContentContainer">
      <HeaderTitle title={"Qarzdorlar"} />
      <div className="headerActions">
        <SearchItems />
      </div>
      <QarzTableComponent />
      <EditAppointment />
      <DeleteAppointment />
    </div>
  );
};

export default BemorlarPage;
