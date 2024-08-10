import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SidebarWrapper from "../../components/sidebar/SideBarWrapper";
import OwnerDashboard from "./OwnerDashboard";
import Books from "../Admin/Books";
import  DashboardIcon  from '@mui/icons-material/Dashboard';
import BookIcon  from '@mui/icons-material/Book';
import SidebarMenu from "../../components/sidebar/SideBarMenu";
import BookUpload from "./BookUpload";

const menuItems = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Book Upload",
    link: "/book-upload",
    icon: BookIcon,
  },
  // {
  //   label: "Owners",
  //   link: "/books",
  //   icon: PersonIcon,
  // },
  // Add more menu items here
];

function OwnersMenu(params) {
  return (
    <>
      <Router>
        <div className="flex flex-row bg-slate-100 h-lvh w-full  overflow-x-hidden">
          <div>
            <SidebarWrapper>
              <SidebarMenu menuItems={menuItems} />
            </SidebarWrapper>
          </div>

          {/* <div className="ml-[20%] "> */}
            <div className="ml-[20%]  w-[80%]  mt-3">
              {/* content goes here */}

              <Routes>
                <Route path="/dashboard" element={<OwnerDashboard />} />
                <Route path="/book-upload" element={<BookUpload />} />
              </Routes>
            </div>
          {/* </div> */}
        </div>
      </Router>
    </>
  );
}

export default OwnersMenu;
