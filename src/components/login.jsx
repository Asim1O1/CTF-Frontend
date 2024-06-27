import { useState } from "react";
import axios from "axios";
import logo from "../assets/hacker.jpg";
import { useNavigate, Link } from "react-router-dom";

const UserLogin = () => {
  const apiUrl = "http://localhost:5300";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
      const response = await axios.post(`${apiUrl}/api/users/login`, formData);

      if (response.status === 200) {
        console.log("Login successful", response.data);
        setSuccess("Login successful");
        setError("");
        setTimeout(() => {
          navigate("/");
        }, 3000);
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
      <div className="flex bg-black w-full h-screen">
        <div className="w-1/2">
          <img
            src={logo}
            alt="hacker theme image"
            className="w-full h-full object-cover ml-30"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center p-4">
          <div>
            <h2 className="text-6xl font-extrabold text-left text-red-600">
              Login
            </h2>
          </div>
          <form className="w-2/3  mb-4 mt-8 space-y-6" onSubmit={handleSubmit}>
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
                className="bg-white appearance-none rounded-md relative block w-full h-9 px-3 py-2 border-3 border-gray-300 text-gray-900"
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
                className="bg-white appearance-none rounded-md relative block w-full h-9 px-3 py-2 border-3 border-gray-300 text-gray-900"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="w-full py-2 px-4 mt-1 border border-transparent font-medium rounded-md text-white bg-red-600 hover:bg-red-800"
              >
                Login
              </button>
            </div>
            <p className="text-white font-bold mr-80">
              Dont have an account?{" "}
              <span className="text-red-600 cursor-pointer">
                <Link to="/register"> Register</Link>
              </span>
            </p>
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
