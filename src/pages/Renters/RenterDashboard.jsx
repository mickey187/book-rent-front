import { useEffect, useState } from "react";
import Donut from "./../../components/charts/Donut";
import Navbar from "./../../components/navbar/Navbar";
import AdminEarnings from "./../../components/stats/AdminEarnings";
import MainStatBar from "./../../components/stats/MainStatBar";
import DataTable from "./../../components/table/DataTable";
import { fetchRentedBooks } from "../../api/RenterApi";

const columns = [
  {
    field: 'bookName',
    headerName: "Book Name",
    width: 150,
   
  },
  {
    field: "owner",
    headerName: "Owner",
    width: 200,
    valueGetter: (params) => `${params.firstName} ${params.lastName}`,
  },
  { field: "bookStatus", headerName: "Status", width: 150,
    
   },
   {
    field: 'rentedOn',
    headerName: "Rented On",
    width: 200,
    // type: 'dateTime', // Optional for date/time formatting
  },
  {
    field: "bookRentPrice",
    headerName: "Price",
    type: "number",
    width: 150,
   
  },
];


function RenterDashboard() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      console.log("test");

      try {
        const allbooks = await fetchRentedBooks();
        const transformedBooks = allbooks.map((book) => ({
          ...book,
          bookName: book.book.name, // Extract values from nested object
          bookRentPrice: book.book.rentPrice,
          bookStatus: book.book.status
        }));
        setBooks(transformedBooks);

        // setBooks(allbooks);
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
        <Navbar role={"Renter"} title={"Dashboard"} />
        <div className="flex flex-col mt-5 ml-5">
          {/* <MainStatBar>
          <AdminEarnings />
          <Donut />
        </MainStatBar> */}
          <div className="p-4 bg-white mx-3 my-2">
            <h1>Rented Books</h1>
          </div>
          <div className="flex flex-col">
            <div className="ml-3 bg-white mx-5">
              <DataTable columns={columns} rows={books} />
            </div>
            <div className="ml-3 bg-white">{/* <LineChart/> */}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RenterDashboard;
