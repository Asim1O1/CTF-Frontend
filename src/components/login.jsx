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
      const response = await axios.post("", formData);

      if (response.status === 200) {
        setSuccess("Login successful");
        setError("");
        // Handle successful login
        console.log("Login successful", response.data);
      } else {
        setSuccess("");
        setError("Login failed");
        // Handle login failure
        console.error("Login failed", response.data);
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
      alt="Guy Fawkes Mask"
      className="w-full h-full object-cover rounded-lg ml-30"
    />
  </div>
  <div className="w-1/2 flex flex-col justify-center p-4">
    <div>
      <h2 className="text-4xl font-extrabold text-left text-red-600">
        Login
      </h2>
    </div>
    <form className="-90 mb-4 mt-8 space-y-6" onSubmit={handleSubmit}>
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
          className="appearance-none relative block w-64 h-8 px-3 py-2 border-3 border-gray-300 text-gray-900"
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
          className="appearance-none rounded-md relative block w-64 h-8 px-3 py-2 border-30"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-start">
        <button
          type="submit"
          className="py-2 px-4 border border-transparent font-medium rounded-md text-white bg-red-600 hover:bg-black"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</div>

      <p className="text-white font-bold ml-40">
                Don't have an account?{" "}
                <span className="text-red-600 cursor-pointer">Register</span>
              </p>
              {error && <p className="text-red-600">{error}</p>}
              {success && <p className="text-green-600">{success}</p>}
    </>
  );
};

export default UserLogin;
