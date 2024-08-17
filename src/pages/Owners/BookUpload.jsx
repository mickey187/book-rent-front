import { useState } from "react";
import { z } from "zod";
import { Button, TextField } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import Alert from "@mui/material/Alert";

import { createBookApi } from "./../../api/OwnerApi";



// Define the validation schema
const schema = z.object({
  bookName: z.string().min(1, "Book name must be at least one character"),
  bookQuantity: z.number().min(1, "Quantity must be at least one"),
  rentPrice: z.number().min(1, "Rent price must be at least 1"),
});


function BookUpload() {
  const [bookCover, setBookCover] = useState(null);
  const [bookData, setBookData] = useState({
    bookName: "",
    bookQuantity: "",
    rentPrice: "",
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState({
    status: false,
    type: "",
     message: ""
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setBookCover(files[0]);
      return;
    }

    // Convert numeric fields to numbers
    setBookData({
      ...bookData,
      [name]: type === "number" ? parseFloat(value) || "" : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert form data to proper types for validation
      const formData = {
        bookName: bookData.bookName,
        bookQuantity: parseFloat(bookData.bookQuantity),
        rentPrice: parseFloat(bookData.rentPrice),
      };

      // Validate the data
      const parsedData = schema.parse(formData);

      console.log("Form submitted:", parsedData);

      // Prepare FormData for submission
      const data = new FormData();
      data.append("bookName", parsedData.bookName);
      data.append("bookQuantity", parsedData.bookQuantity.toString());
      data.append("rentPrice", parsedData.rentPrice.toString());
      

      if (bookCover) {
        data.append("bookCover", bookCover);
      }
      console.log("data", data);

      const response = await createBookApi(data);

      if (response.success) {
        setShowAlert({ type: "success", status: true, message: "congrats you have successfully uploaded the book. Wait until it is approved" });
        setBookData({ bookName: "", bookQuantity: "", rentPrice: "" });
      }
      setBookCover(null);

      setErrors({});
    } catch (error) {
      // Handle Zod validation errors
      setErrors(error.errors || {});
    }
  };

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
      <div className="w-full h-full mx-5">
        <Navbar role={"Owner"} title={"Book "} />
        <div className="mt-5 h-full bg-white">
          <h1 className="text-center">Book Upload</h1>
          <div className="mx-auto mt-5 w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col my-5">
                <TextField
                  id="bookName"
                  label="Book Name"
                  variant="outlined"
                  className="w-full"
                  type="text"
                  name="bookName"
                  value={bookData.bookName}
                  onChange={handleChange}
                />
                <small className="text-sm ml-2 text-red-500">
                  {errors.bookName && <span>{errors.bookName}</span>}
                </small>
              </div>

              <div className="flex flex-col my-5">
                <TextField
                  id="bookQuantity"
                  label="Quantity"
                  variant="outlined"
                  className="w-full"
                  type="number"
                  name="bookQuantity"
                  value={bookData.bookQuantity}
                  onChange={handleChange}
                />
                <small className="text-sm ml-2 text-red-500">
                  {errors.bookQuantity && <span>{errors.bookQuantity}</span>}
                </small>
              </div>

              <div className="flex flex-col my-5">
                <TextField
                  id="rentPrice"
                  label="Rent Price for 2 Weeks"
                  variant="outlined"
                  className="w-full"
                  type="number"
                  name="rentPrice"
                  value={bookData.rentPrice}
                  onChange={handleChange}
                />
                <small className="text-sm ml-2 text-red-500">
                  {errors.rentPrice && <span>{errors.rentPrice}</span>}
                </small>
              </div>

              <div className="mt-5">
                <input
                  id="bookCover"
                  type="file"
                  name="bookCover"
                  onChange={handleChange}
                />
              </div>

              <div className="mt-5">
                <Button
                  variant="contained"
                  className="text-center w-full"
                  type="submit"
                >
                  UPLOAD
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookUpload;
