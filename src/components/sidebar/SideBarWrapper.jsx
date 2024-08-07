import { Divider } from "@mui/material";

const SidebarWrapper = ({ children }) => {
  return (
    <div className="h-screen bg-blue-950 lg:w-[300px] py-3 flex flex-col">
      <div className="flex flex-row space-x-5 mb-10 px-5">
        <h2 className="text-white">logo</h2>
        <h1 className="text-white text-xl">Book Rent</h1>
      </div>
      <Divider variant="middle" className="bg-slate-50 my-2" />
      {children}
    </div>
  );
};

export default SidebarWrapper;
