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
import { fetchBooksForRent } from './../../api/RenterApi';


const columns = [
  { field: "id", headerName: "Book No", width: 150 },
  { field: "owner", headerName: "Owner", width: 200 },
  { field: "status", headerName: "Status", width: 150 },
  { field: "price", headerName: "Price", type: "number", width: 150 },
];
const rows = [
  {
    id: 1,
    bookNum: 6433,
    owner: "Jon Jones",
    status: "rented",
    price: 21.99,
  },
  {
    id: 2,
    bookNum: 6434,
    owner: "Connor McCregor",
    status: "rented",
    price: 21.99,
  },
  {
    id: 3,
    bookNum: 6435,
    owner: "Khabib Nurmamagedov",
    status: "rented",
    price: 21.99,
  },
  {
    id: 4,
    bookNum: 6436,
    owner: "Rampage Jackson",
    status: "rented",
    price: 21.99,
  },
];
function AdminDashboard() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      console.log("test");

      try {
        const ownerBooks = await fetchBooksForRent();
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
        <div className="mx-5">
          <Navbar role={"Admin"} title={"Dashboard"} />
        </div>

        <div className=" flex flex-col lg:flex-row xl:flex-row 2xl:flex-row  mt-5 lg:ml-3 sm:mx-1">
        <div className="w-full lg:w-1/4 md:1/4 xl:w-1/4 ">
            <MainStatBar>
              <AdminEarnings />
              <Donut />
            </MainStatBar>
          </div>
          <div className="flex flex-col">
            <div className="ml-3 bg-white mx-5">
              <DataTable columns={columns} rows={rows} />
            </div>
            <div className="ml-3 bg-white">{/* <LineChart/> */}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
