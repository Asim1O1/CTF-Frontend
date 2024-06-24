import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/1000014770 (2).jpg";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
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
      const response = await axios.post("http://10.50.0.212:5300/api/users/register", formData);

      if (response.status === 200) {
        setSuccess("Registration successful");
        setError("");
        // Handle successful registration
        console.log("Registration successful", response.data);
      } else {
        setSuccess("");
        setError("Registration failed");
        // Handle registration failure
        console.error("Registration failed", response.data);
      }
    } catch (error) {
      setSuccess("");
      setError("An error occurred");
      console.error("An error occurred", error);
    }
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/2">
          <img
            src={logo}
            alt="hacker theme image"
            className="w-full h-full object-cover rounded-lg ml-30"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center p-4 bg-black">
          <div>
            <h2 className="text-5xl font-extrabold text-left text-red-600">
              Register
            </h2>
          </div>
          <form className="w-2/3  mb-4 mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <p className="text-left text-white">Full Name:</p>
              <label htmlFor="full-name" className="sr-only">
                Full Name
              </label>
              <input
                id="full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className="bg-white appearance-none relative block w-full h-8 px-3 py-2 border-3 border-gray-300 text-gray-900 "
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-left text-white">Username:</p>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="bg-white appearance-none relative block w-full h-8 px-3 py-2 border-3 border-gray-300 text-gray-900"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
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
                className="bg-white appearance-none relative block w-full h-8 px-3 py-2 border-3 border-gray-300 text-gray-900"
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
                className="bg-white appearance-none rounded-md relative block w-full h-8 px-3 py-2 border-30 text-gray-900"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent font-medium rounded-md text-white bg-red-600 hover:bg-red-800"
              >
                Register
              </button>
            </div>
            <p className="text-white font-bold text-left">
              Already have an account?{" "}
              <span className="text-red-600 cursor-pointer">Login</span>
            </p>
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
