import { useState, useEffect } from "react";
import { fetchBooksByOwnerIdApi } from "../../api/OwnerApi";
import Donut from "../../components/charts/Donut";
import Navbar from "../../components/navbar/Navbar";
import AdminEarnings from "../../components/stats/AdminEarnings";
import MainStatBar from "../../components/stats/MainStatBar";
import DataTable from "../../components/table/DataTable";
import { GridActionsCellItem } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const columns = [
  { field: "id", headerName: "Book No", flex: 1 },
  { field: "name", headerName: "Book Name", flex: 1 },
  {
    field: "owner",
    headerName: "Owner",
    flex: 1,
    valueGetter: (params) => `${params.firstName} ${params.lastName}`,
  },
  { field: "status", headerName: "Status", flex: 1 },
  { field: "rentPrice", headerName: "Price", type: "number", flex: 1 },
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    flex: 1,
    renderCell: (params) => (
      <>
        <GridActionsCellItem
          icon={<EditIcon />}
          onClick={() => handleEdit(params.row.id)}
          label="Edit"
        />
        <GridActionsCellItem
          icon={<DeleteIcon />}
          onClick={() => handleDelete(params.row.id)}
          label="Delete"
        />
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          onClick={() => handleView(params.row.id)}
          label="View"
        />
      </>
    ),
  },
];

function OwnerDashboard() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      console.log("test");

      try {
        const ownerBooks = await fetchBooksByOwnerIdApi();
        console.log("ownerBooks", ownerBooks);

        setBooks(ownerBooks);
      } catch (error) {
        console.error("error fetching books", error);
      }
    };
    fetchBooks();
    // return () => {};
  }, []);
  return (
    <>
      <div>
        <div className="mx-2">
          <Navbar role={"Owner"} title={"Dashboard"} />
        </div>

        <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row  mt-5 lg:ml-3 sm:mx-1">
          <div className="w-full lg:w-1/4 md:1/4 xl:w-1/4 ">
            <MainStatBar>
              <AdminEarnings />
              <Donut />
            </MainStatBar>
          </div>

          <div className="flex-grow ">
            <div className="ml-1 flex-col">
              <div className="ml-1 bg-white ">
                <DataTable columns={columns} rows={books} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerDashboard;
