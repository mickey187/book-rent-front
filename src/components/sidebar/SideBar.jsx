import { Divider } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SidebarWrapper from "./SideBarWrapper";
import SidebarMenu from "./SideBarMenu";
import BookIcon from '@mui/icons-material/Book';

const menuItems = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Books",
    link: "/another-link",
    icon: BookIcon, // Replace with the actual icon
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
