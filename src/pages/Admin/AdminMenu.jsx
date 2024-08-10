import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import SidebarMenu from "../../components/sidebar/SideBarMenu";
import SidebarWrapper from "../../components/sidebar/SideBarWrapper";
import AdminDashboard from "./AdminDasboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import Books from "./Books";
import Owners from "./Owners";
import PersonIcon from "@mui/icons-material/Person";

const menuItems = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Books",
    link: "/books",
    icon: BookIcon,
  },
  {
    label: "Owners",
    link: "/books",
    icon: PersonIcon,
  },
  // Add more menu items here
];

function AdminMenu() {
  return (
    <Router>
      <div className="flex flex-row bg-slate-100 h-lvh w-screen overflow-x-hidden">
        <div>
          <SidebarWrapper>
            <SidebarMenu menuItems={menuItems} />
          </SidebarWrapper>
        </div>

        <div className="ml-[20%] ">
          <div className="mx-5 mt-5 w-full">
            {/* content goes here */}

            <Routes>
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/books" element={<Books />} />
              <Route path="/owners" element={<Owners/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default AdminMenu;
