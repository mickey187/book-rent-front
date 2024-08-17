import { useEffect, useState } from "react";
import { GridActionsCellItem } from "@mui/x-data-grid";
import Switch from "@mui/material/Switch";
import Navbar from "./../../components/navbar/Navbar";
import DataTable from "./../../components/table/DataTable";
import { fetchAllBooks } from "./../../api/AdminApi";
import EditIcon from "@mui/icons-material/Edit";
import Handshake from "@mui/icons-material/Handshake";
import { fetchBooksForRent, rentBookApi } from "../../api/RenterApi";
import Alert from "@mui/material/Alert";

const label = { inputProps: { "aria-label": "Switch demo" } };

function BookList() {
  const [showAlert, setShowAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const handleClick = async (book) => {
    try {
      

      const bookData = {
        bookId: book.id,
        ownerId: book.owner.id,
      };
      const response = await rentBookApi(bookData);
      if (response.success) {
        setShowAlert({
          type: "success",
          status: true,
          message: "congrats you have rented the book",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const columns = [
    { field: "id", headerName: "No", flex: 1 },
    // { field: "author", headerName: "Author", width: 150 },
    {
      field: "owner",
      headerName: "Owner",
      width: 200,
      valueGetter: (params) => `${params.firstName} ${params.lastName}`,
    },
    { field: "name", headerName: "Book Name", flex: 1 },
    { field: "quantity", headerName: "Quantity", flex: 1 },

    { field: "status", headerName: "Status", type: "number", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      flex: 1,
      renderCell: (params) => (
        <>
          <GridActionsCellItem
            icon={<Handshake />}
            onClick={() => handleClick(params.row)}
            label="Rent"
          />
        </>
      ),
    },
  ];

  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      console.log("test");

      try {
        const allbooks = await fetchBooksForRent();
        console.log("ownerBooks", allbooks);

        setBooks(allbooks);
      } catch (error) {
        console.error("error fetching books", error);
      }
    };
    fetchBooks();
    // return () => {};
  }, []);

  return (
    <>
      {showAlert.status && (
        <Alert
          severity={showAlert.type}
          onClose={() => setShowAlert({ status: false, type: "" })}
        >
          {showAlert.message}
        </Alert>
      )}
      <div className="">
        <div className="mx-3">
          <Navbar role={"Admin"} title={"Dashboard"} />
        </div>

        <div className="mt-5 mx-2 bg-white">
          <DataTable columns={columns} rows={books} />
        </div>
      </div>
    </>
  );
}

export default BookList;
