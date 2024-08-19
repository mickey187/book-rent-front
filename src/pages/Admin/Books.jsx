import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/table/DataTable";
import { approveBook, fetchAllBooks, unApproveBook } from "../../api/AdminApi";
import { GridActionsCellItem } from "@mui/x-data-grid";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      console.log("test");

      try {
        const allbooks = await fetchAllBooks();
        console.log("ownerBooks", allbooks);

        setBooks(allbooks);
      } catch (error) {
        console.error("error fetching books", error);
      }
    };
    fetchBooks();
    // return () => {};
  }, []);

  const handleApproval = async (book) => {
    try {
      let result;
      if (book.isApprovedByAdmin) {
        result = await unApproveBook(book.id); // Unapprove if currently approved
      } else {
        result = await approveBook(book.id); // Approve if currently unapproved
      }

      if (result.success) {
        alert(`Book ${book.isApprovedByAdmin ? 'unapproved' : 'approved'} successfully!`);
        // Re-fetch books to update the table
        const updatedBooks = await fetchAllBooks();
        setBooks(updatedBooks);
      } else {
        alert(`${book.isApprovedByAdmin ? 'Unapproval' : 'Approval'} failed!`);
      }
    } catch (error) {
      console.error("Error toggling approval:", error);
    }
  };

  const columns = [
    { field: "id", headerName: "No", width: 50 },
    // { field: "author", headerName: "Author", width: 150 },
    {
      field: "owner",
      headerName: "Owner",
      width: 200,
      valueGetter: (params) => `${params.firstName} ${params.lastName}`,
    },
    { field: "name", headerName: "Book Name", width: 150 },

    { field: "status", headerName: "Status", type: "number", width: 150 },
    
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 180,
      renderCell: (params) => (
        <>
          <Switch
          
            {...label}
            checked={params.row.isApprovedByAdmin}
            onClick={() => handleApproval(params.row)}
          />
        </>
      ),
    },
  ];
  return (
    <>
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

export default Books;
