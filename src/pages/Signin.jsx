import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import book from "../assets/icons/book-logo-2.svg";
import { z } from "zod";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signinApi } from "../api/AuthApi";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Please enter your password"),
});
function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const parsedData = schema.parse(formData);
      const response = await signinApi(parsedData);
      if (response.success) {
        // navigate("")
        localStorage.setItem("bookApiKey", response.data.token);
        // console.log(response);
        if (response.data.user.role.name == 'bookOwner') {
          navigate('/owner/dashboard');
        }
        if (response.data.user.role.name == 'admin') {
          navigate('/admin/dashboard');
        }
        if (response.data.user.role.name == 'bookRenter') {
          navigate('/renter/dashboard');
        }
      }
      // console.log("Form submitted:", parsedData);

      setErrors({});
    } catch (error) {
      setErrors(error.formErrors.fieldErrors);
    }
  };

  return (
    <>
      <div className="flex flex-row ">
        <div className=" lg:w-1/2  bg-blue-950 flex items-center justify-center h-screen">
          <img src={book} alt="" className=" lg:w-60 lg:h-60 mx-auto" />
        </div>
        <div className=" lg:w-1/2 md:w-full sm:w-full lg:py-20 px-10">
          <div className="flex flex-row space-x-5">
            <div><img src={book} alt="" className="w-20 h-20" /></div>
            <Divider />
            <div>
              <h1 className=" text-2xl font-semi-bold mt-5">Book Rent</h1>
            </div>
          </div>
          <div>
            <h2 className=" text-xl font-semibold mt-5">Login</h2>
          </div>
          <div className="lg:mt-10 lg:pr-10 md:w-full sm:w-full">
            <form onSubmit={handleSubmit}>
              <div className="my-5  ">
                <TextField
                  id="email-input"
                  label="Email Address"
                  variant="outlined"
                  className="w-full"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <small className=" text-sm ml-2 text-red-500">
                  {errors.email && <span>{errors.email}</span>}
                </small>
              </div>

              <div className="my-5">
                <TextField
                  id="password-input"
                  label="Password"
                  variant="outlined"
                  className="w-full"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <small className=" text-sm ml-2 text-red-500">
                  {errors.password && <span>{errors.password}</span>}
                </small>
              </div>

              <span>
                <Checkbox {...label} />
                Remember me
              </span>

              <div className="my-5">
                <Button variant="contained" className=" text-center w-full" type="submit">
                  LOGIN
                </Button>
              </div>
              <span className=" text-center">
                <h4>
                  Don't have an account?{" "}
                  <Link to="/signup" className=" text-blue-500 underline">SIGNUP</Link>
                </h4>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
