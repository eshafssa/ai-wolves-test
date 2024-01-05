import "./login.css";
import logo from "../../assets/img/logo.jpg";
import googLogo from "../../assets/img/google-logo.png";
import facebookLogo from "../../assets/img/facebooklogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Input";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should be at least 6 char";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" className="w-16 h-16 mt-7 mb-4" />
        <div className="font-ubuntu text-gray-800 text-lg font-bold">
          Sign up or Login with
        </div>
        <div className="flex flex-col w-full my-6">
          <button className="flex bg-gray-100  p-2 mx-8 mb-2  border rounded-lg hover:shadow-lg">
            <img src={googLogo} alt="google-logo" className="w-7 h-7 mx-4" />
            <span className="font-ubuntu  text-lg ">Google</span>
          </button>
          <button className="flex bg-gray-100  p-2 mx-8 mt-2  border rounded-lg hover:shadow-lg">
            <img
              src={facebookLogo}
              alt="facebook-logo"
              className="w-7 h-7 mx-4"
            />
            <span className="font-ubuntu text-lg">Facebook</span>
          </button>
        </div>

        <div className="flex w-full  justify-center items-center">
          <span className="h-0.5 ml-8 w-full bg-gray-100" />
          <span className="font-ubuntu p-2 border rounded-full text-center">
            OR
          </span>
          <span className="h-0.5 mr-8 w-full bg-gray-100" />
        </div>
        <div className="flex px-8 w-full flex-col">
          <Input
            text="Email"
            placeholder="name@host.com"
            type="email"
            className="my-2"
            name="email"
            errors={errors.email}
            onInputChange={handleChange}
          />
          <Input
            text="Password"
            placeholder="Password"
            type="password"
            className="my-2"
            name="password"
            errors={errors.password}
            onInputChange={handleChange}
          />
          <Link
            to="/ForgotPssword"
            className="font-ubuntu text-base text-violet-800"
          >
            Forgot your password?
          </Link>
          <div className="flex flex-col mt-5 mb-20">
            <button className="bg-gradient font-ubuntu text-white font-semibold p-2 outline-none border rounded-lg hover:shadow-lg">
              Sign In
            </button>
            <div className="font-ubuntu text-violet-800  text-base text-center">
              Need an account?
              <Link to="/SignUp" className="ml-2">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="flex px-8 flex-col w-full">
          <span className="h-0.5 bg-gray-100" />
          <div className="font-ubuntu flex my-5 items-center justify-between">
            <Link to="/Login" className="text-base text-center text-violet-800">
              Terms of services
            </Link>
            <Link to="/Login" className="text-base text-center text-violet-800">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
