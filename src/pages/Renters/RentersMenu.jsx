import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SidebarWrapper from "./../../components/sidebar/SideBarWrapper";
// import OwnerDashboard from "./OwnerDashboard";
// import Books from "../Admin/Books";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
// import BookUpload from './../Owners/BookUpload';
import SidebarMenu from "./../../components/sidebar/SideBarMenu";
import RenterDashboard from "./RenterDashboard";
import BookList from "./BookList";

const menuItems = [
  {
    label: "Dashboard",
    link: "dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Books",
    link: "book-list",
    icon: BookIcon,
  },
  // {
  //   label: "Owners",
  //   link: "/books",
  //   icon: PersonIcon,
  // },
  // Add more menu items here
];

function RentersMenu() {
  return (
    <>
      {/* <Router> */}
      <div className="flex flex-row bg-slate-100 h-lvh w-full  overflow-x-hidden">
        <div>
          <SidebarWrapper>
            <SidebarMenu menuItems={menuItems} />
          </SidebarWrapper>
        </div>

        {/* <div className="ml-[20%] "> */}
        <div className="ml-[20%]  w-[80%]  mt-3 ">
          {/* content goes here */}
          <div className="ml-3">
            <Routes>
              <Route path="dashboard" element={<RenterDashboard />} />
              <Route path="book-list" element={<BookList />} />
            </Routes>
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default RentersMenu;
