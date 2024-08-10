import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/table/DataTable";

function Owners(){
    const columns = [
        { field: "id", headerName: "No", width: 50 },
        { field: "author", headerName: "Author", width: 150 },
        { field: "category", headerName: "Owner", width: 200 },
        { field: "bookName", headerName: "Book Name", width: 150 },
        { field: "status", headerName: "Status", type: "number", width: 150 },
      ];
      const rows = [
        {
          id: 1,
          author: "Colleen Hoover",
          category: "Jon Jones",
          bookName: "rented",
          status: 21.99,
        },
        {
          id: 1,
          author: "Colleen Hoover",
          category: "Fiction",
          bookName: "verity",
          status: 21.99,
        },
        {
          id: 1,
          author: "Colleen Hoover",
          category: "Fiction",
          bookName: "verity",
          status: 21.99,
        },
        {
          id: 1,
          author: "Colleen Hoover",
          category: "Fiction",
          bookName: "verity",
          status: 21.99,
        },
        {
          id: 1,
          author: "Colleen Hoover",
          category: "Fiction",
          bookName: "verity",
          status: 21.99,
        },
      ];
      
return(<>
<>
      <div className=" ">
        <Navbar role={"Admin"} title={"Dashboard"} />
        <div className="mt-5 mx-5 bg-white">
          <DataTable columns={columns} rows={rows} />
        </div>
      </div>
    </>
</>);
}

export default Owners;