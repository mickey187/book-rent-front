import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import book from "../assets/icons/book-logo-2.svg";
import bookSvg from "../assets/icons/book-logo-2.svg";
import { z } from "zod";
import { useState } from "react";
import { signupApi } from "../api/AuthApi";
import { InputLabel, MenuItem, Select } from "@mui/material";

const path = "/test";
const phoneRegex = /^[0-9]{10}$/;
const schema = z
  .object({
    firstName: z.string().min(2, "first name must be at least two characters"),
    lastName: z.string().min(2, "last name must be at least two characters"),
    email: z.string().email(),
    role: z.enum(["bookOwner", "bookRenter"]),
    password: z
      .string()
      .min(8, "password lenght must be at least 8 characters"),
    confirmPassword: z.string(),
    location: z
      .string()
      .min(2, "location string must be at least two characters"),
    phone: z.string().regex(phoneRegex, "Invalid phone number"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
    location: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedData = schema.parse(formData);
      console.log("Form submitted:", parsedData);
      const response = await signupApi(parsedData);
      if (response.success) {
        localStorage.setItem("bookApiKey", response.token);
        localStorage.setItem("user", JSON.stringify(response.data));
        // navigate('/owner/dashboard');
        if (formData.role == 'bookOwner') {
          navigate('/owner/dashboard');
        }
        if (formData.role == 'bookRenter') {
          navigate('/renter/dashboard');
        }
        console.log(response);
      }else{
        setErrors({});
      }
      
    } catch (error) {
      // setErrors(error.formErrors.fieldErrors);
      console.error("error submitting signup form ", error);
      
    }
  };

  return (
    <>
     
        <div className="flex flex-row mr-10">
          <div className=" lg:w-1/2 bg-blue-950 flex items-center justify-center h-screen">
            <img src={book} alt="" className=" lg:w-60 lg:h-60 mx-auto" />
          </div>
          <div className=" lg:w-1/2 lg:py-20 px-10">
            <div className="flex flex-row space-x-5">
              <img src={bookSvg} alt="" className="h-20 w-20" />
              <Divider />
              <div>
                <h1 className=" text-2xl font-semi-bold mt-5">Book Rent</h1>
              </div>
            </div>
            <div>
              <h2 className=" text-xl font-semibold mt-5">Signup as Owner</h2>
            </div>
            <div className="lg:mt-10 pr-10">
              <form onSubmit={handleSubmit}>
                <div className="my-5 w-full flex flex-row space-x-2">
                  <div className="flex-col w-1/2">
                    <TextField
                      id="firstName-input"
                      label="First Name"
                      variant="outlined"
                      className="w-full"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <small className=" text-sm ml-2 text-red-500">
                      {errors.firstName && <span>{errors.firstName}</span>}
                    </small>
                  </div>
                  <div className="flex-col w-1/2">
                    <TextField
                      id="lastName-input"
                      label="Last Name"
                      variant="outlined"
                      className="w-full"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    <small className=" text-sm ml-2 text-red-500">
                      {errors.lastName && <span>{errors.lastName}</span>}
                    </small>
                  </div>
                </div>
                <div className="my-5">
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
                  <InputLabel id="select-role-label">Select Role</InputLabel>
                  <Select
                    labelId="select-role-label"
                    id="select-role"
                    name="role"
                    value={formData.role}
                    label="signup as"
                    fullWidth
                    onChange={handleChange}
                  >
                    <MenuItem value={"bookOwner"}>Book Owner</MenuItem>
                    <MenuItem value={"bookRenter"}>Book Renter</MenuItem>
                  </Select>
                  <small className=" text-sm ml-2 text-red-500">
                    {errors.role && <span>{errors.role}</span>}
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
                <div className="my-5">
                  <TextField
                    id="confirm-password-input"
                    label="Confirm Password"
                    variant="outlined"
                    className="w-full"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <small className=" text-sm ml-2 text-red-500">
                    {errors.confirmPassword && (
                      <span>{errors.confirmPassword}</span>
                    )}
                  </small>
                </div>
                <div className="my-5">
                  <TextField
                    id="location-input"
                    label="Location"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                  <small className=" text-sm ml-2 text-red-500">
                    {errors.location && <span>{errors.location}</span>}
                  </small>
                </div>
                <div className="my-5">
                  <TextField
                    id="phone-input"
                    label="Phone"
                    variant="outlined"
                    className="w-full"
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <small className=" text-sm ml-2 text-red-500">
                    {errors.phone && <span>{errors.phone}</span>}
                  </small>
                </div>
                <span>
                  <Checkbox {...label} />I accept the Terms and Conditions
                </span>

                <div className="my-5">
                  <Button
                    variant="contained"
                    className=" text-center w-full"
                    type="submit"
                  >
                    SIGNUP
                  </Button>
                </div>
              </form>

              <span className=" text-center">
                <h4>
                  Already have an account? <Link to={"/signin"} className="text-blue-500 underline">Signin</Link>
                </h4>
              </span>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Signup;
