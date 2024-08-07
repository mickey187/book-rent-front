import { Divider } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SidebarWrapper from "./SideBarWrapper";
import SidebarMenu from "./SideBarMenu";

const menuItems = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Another Menu Item",
    link: "/another-link",
    icon: DashboardIcon, // Replace with the actual icon
  },
  // Add more menu items here
];
const SideBar = () => {
  return (
    <SidebarWrapper>
      <SidebarMenu menuItems={menuItems} />
    </SidebarWrapper>
  );
};

export default SideBar;
