import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import SideBar from "./components/sidebar/SideBar";
import AdminDashboard from "./pages/Admin/AdminDasboard";
import AdminMenu from "./pages/Admin/AdminMenu";
import OwnersMenu from "./pages/Owners/OwnersMenu";
import RentersMenu from './pages/Renters/RentersMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/owner/*" element={<OwnersMenu />} />
        <Route path="/renter/*" element={<RentersMenu />} />
        <Route path="/admin/*" element={<AdminMenu />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
