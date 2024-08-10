import { Button, TextField } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";

function BookUpload() {
  return (
    <>
      <div className="w-full h-full  mx-5">
        <div className="">
          <Navbar role={"Owner"} title={"Book "} />
        </div>

        <div className="mt-5 h-full  bg-white">
          <h1 className="text-center">Book Upload</h1>
          <div className="mx-auto mt-5 w-1/2">
            <form action="">
              <div className="flex flex-row space-x-4">
                
              <TextField
                    id="quantity-input"
                    label="Book Name"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    name="bookName"
                    //   value={formData.email}
                    //   onChange={handleChange}
                  />

                  <TextField
                    id="quantity-input"
                    label="Quantity"
                    variant="outlined"
                    className="w-full"
                    type="number"
                    name="book-quantity"
                    //   value={formData.email}
                    //   onChange={handleChange}
                  />
                  <small className=" text-sm ml-2 text-red-500">
                    {/* {errors.email && <span>{errors.email}</span>} */}
                  </small>
            
                <TextField
                    id="quantity-input"
                    label="rent price for 2 weeks"
                    variant="outlined"
                    className="w-full"
                    type="number"
                    name="book-quantity"
                    //   value={formData.email}
                    //   onChange={handleChange}
                  />
              </div>
              <div className="mt-10">
              <TextField
              id="quantity-input"
              label=""
              variant="outlined"
              className="w-full"
              type="file"
              name="book-quantity"
              />
              </div>
              <div className="mt-5">
              <Button variant="contained" className=" text-center w-full " type="submit">
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
