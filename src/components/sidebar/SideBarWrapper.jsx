import { Divider } from "@mui/material";
import bookSvg from "../../assets/icons/book-logo-3.svg";
import { Link } from "react-router-dom";

const SidebarWrapper = ({ children }) => {
  return (
    <div className="h-full top-2 left-2 bg-blue-950 lg:w-1/5  flex flex-col  fixed rounded-lg">
      <div className="flex flex-row space-x-5 mb-10 px-2">
        <img src={bookSvg} alt="" className="w-20 h-20" />
        <h1 className="text-white text-xl mt-5">Book Rent</h1>
      </div>
      <Divider variant="middle" className="bg-slate-50 my-2" />
      {children}
      <div className="mt-auto mb-4 px-2">
        <Link to="/signin" className="w-full text-white bg-gray-600 py-2 px-3 rounded">SIGNOUT</Link>
      </div>
    </div>
  );
};

export default SidebarWrapper;
