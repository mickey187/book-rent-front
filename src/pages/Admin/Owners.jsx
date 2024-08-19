import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/table/DataTable";
import { fetchBookOwners } from "../../api/AdminApi";

function Owners(){
  const [owners, setOwners] = useState([]);
  useEffect(() => {
    const fetchOwners = async () => {
      console.log("test");

      try {
        const allOwners = await fetchBookOwners();
        console.log("ownerBooks", allOwners);

        setOwners(allOwners);
      } catch (error) {
        console.error("error fetching books", error);
      }
    };
    fetchOwners();
    // return () => {};
  }, []);
    const columns = [
        { field: "id", headerName: "No", width: 50 },
        { field: "firstName", headerName: "First Name", flex: 1 },
        { field: "lastName", headerName: "Last Name", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        // { field: "status", headerName: "Status", type: "number", width: 150 },
      ];
 
      
return(<>
<>
      <div className=" ">
        <Navbar role={"Admin"} title={"Dashboard"} />
        <div className="mt-5 mx-5 bg-white">
          <DataTable columns={columns} rows={owners} />
        </div>
      </div>
    </>
</>);
}

export default Owners;