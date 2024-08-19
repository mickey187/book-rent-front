import { useEffect, useState } from "react";
import SidebarWrapper from "../../components/sidebar/SideBarWrapper";
import SidebarMenu from "../../components/sidebar/SideBarMenu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import Navbar from "../../components/navbar/Navbar";
import AdminEarnings from "../../components/stats/AdminEarnings";
import MainStatBar from "../../components/stats/MainStatBar";
import Donut from "../../components/charts/Donut";
import DataTable from "../../components/table/DataTable";
import LineChart from "../../components/charts/LineChart";
import { fetchBooksForRent } from "./../../api/RenterApi";
import { fetchAllBooks } from "./../../api/AdminApi";

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
];

function AdminDashboard() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      console.log("test");

      try {
        const allBooks = await fetchAllBooks();
        console.log("ownerBooks", allBooks);

        setBooks(allBooks);
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
        <div className="mx-3">
          <Navbar role={"Admin"} title={"Dashboard"} />
        </div>

        <div className=" flex flex-col lg:flex-row xl:flex-row 2xl:flex-row  mt-5 lg:ml-3 sm:mx-1">
          <div className="w-full lg:w-1/4 md:1/4 xl:w-1/4 ">
            <MainStatBar>
              <AdminEarnings />
              <Donut />
            </MainStatBar>
          </div>
          <div className="flex-grow">
            <div className="ml-1 flex-col">
              <div className="ml-1 bg-white">
                <DataTable columns={columns} rows={books} />
              </div>
            </div>
            <div className="ml-3 bg-white">{/* <LineChart/> */}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
