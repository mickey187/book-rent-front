import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Signin from './pages/Signin';
import Signup from "./pages/Signup";
import SideBar from "./components/sidebar/SideBar";
import AdminDashboard from "./pages/Admin/AdminDasboard";
import AdminMenu from "./pages/Admin/AdminMenu";
import OwnersMenu from "./pages/Owners/OwnersMenu";

function App() {
  return (
    <>
      {/* <AdminMenu /> */}
      <OwnersMenu/>
    </>
  );
}

export default App;
