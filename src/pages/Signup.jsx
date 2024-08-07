import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import book from "../assets/img/book.png";
import { z } from "zod";
import { useState } from "react";

const phoneRegex = /^[0-9]{10}$/;
const schema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "password lenght must be at least 8 characters"),
    confirmPassword: z.string(),
    location: z.string().min(2, "location string must be at least two characters"),
    phone: z.string().regex(phoneRegex, "Invalid phone number"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function Signup() {
  const [formData, setFormData] = useState({
    email: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsedData = schema.parse(formData);
      console.log("Form submitted:", parsedData);
      setErrors({});
    } catch (error) {
      setErrors(error.formErrors.fieldErrors);
    }
  };

  return (
    <>
      <div className="flex flex-row mr-10">
        <div className=" lg:w-1/2">
          <img src={book} alt="" className=" w-full" />
        </div>
        <div className=" lg:w-1/2 lg:py-20 px-10">
          <div className="flex flex-row space-x-5">
            <div>logo</div>
            <Divider />
            <div>
              <h1 className=" text-2xl font-semi-bold">Book Rent</h1>
            </div>
          </div>
          <div>
            <h2 className=" text-xl font-semibold mt-5">Signup as Owner</h2>
          </div>
          <div className="lg:mt-10 pr-10">
            <form onSubmit={handleSubmit}>
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
                  LOGIN
                </Button>
              </div>
            </form>

            <span className=" text-center">
              <h4>
                Already have an account?{" "}
                <a href="#" className=" text-blue-400">
                  Signin
                </a>
              </h4>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
