import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/hackerimage.jpg";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Login successful");
        setError("");
        // Handle successful login
        console.log("Login successful", data);
      } else {
        setSuccess("");
        setError(data.message || "Login failed");
        // Handle login failure
        console.error("Login failed", data);
      }
    } catch (error) {
      setSuccess("");
      setError("An error occurred");
      console.error("An error occurred", error);
    }
  };
  return (
    <>
      {/* <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-30 object-cover"
          />
        </div> */}
      <div className="max-w-md w-full space-y-8 p-8 bg-black rounded-lg shadow-lg">
        <div>
          <h2 className="text-3xl font-extrabold text-center text-red-600">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <p className="text-left text-white">Email:</p>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none  relative block rounded-md w-full px-3 py-2 border-3 border-gray-300  text-gray-900  "
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="text-left text-white">Password:</p>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border-30 "
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent  font-medium rounded-md text-white bg-red-600 hover:bg-black "
            >
              Login
            </button>
            <p className="text-white font-bold">
              Don't have an account?{" "}
              <span className="text-red-600 cursor-pointer">Register</span>
            </p>
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default UserLogin;
