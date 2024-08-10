import { Divider } from "@mui/material";
import Doughnut from "../charts/Donut";

function AdminEarnings() {
  return (
    <>
      <div className="w-full mt-3 mx-auto py-3  bg-white rounded-lg shadow-md flex flex-col">
        <div className="flex flex-row justify-between p-4">
          <h3 className="ml-3 mt-2">Income</h3>
          <div className="p-1 bg-slate-200 text-black">This Month</div>
        </div>

        <Divider variant="middle" className="bg-slate-50 my-2" />
        <div className="mt-4 px-4">
          <h1 className="text-3xl text-black font-bold">ETB 9644.00</h1>
        </div>
        <div className="text-slate-400 px-4 mt-2">Compared to ETB 9788 last month</div>
        <div className="flex flex-row justify-between px-4 mt-2">
            <h2 className="text-black "> Last Month Income</h2>
            <h2 className="text-black font-semibold">ETB 26555.00</h2>
           
            </div>
            
      </div>
      
    </>
  );
}

export default AdminEarnings;
