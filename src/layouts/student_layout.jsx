import Sidebar from "../components/sidebar/sidebar";
import AdminHeader from "../components/adminHeader/adminHeader.jsx";

// Data
import { Studentflow } from "../Data/Data.js";

export default function StudentLayout({ children }) {
  return (
    <>
      <div className="flex flex-row items-stretch">
        <Sidebar flow={Studentflow} />
        <div className="w-11/12 p-6 bg-black">
          <AdminHeader />
          {children}
        </div>
      </div>
    </>
  );
}
