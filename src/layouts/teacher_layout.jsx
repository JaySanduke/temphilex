// Components
import TdashHeader from "../components/header/tdashHeader.jsx"
import Sidebar from "../components/sidebar/sidebar";

// Data
import { Teachersflow } from "../Data/Data.js";

export default function TeacherLayout({ children }) {
  return (
    <>
      <div className="flex flex-row items-stretch">
        <Sidebar flow={Teachersflow} />
        <div className="w-full p-6">
          <TdashHeader />
          {children}
        </div>
      </div>
    </>
  )
}