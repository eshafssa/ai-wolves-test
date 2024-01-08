import googLogo from "../../assets/img/google-logo.png";
import facebookLogo from "../../assets/img/facebooklogo.png";
import logo from "../../assets/img/logo.PNG";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.firstname.trim()) {
      validationErrors.firstname = "firstname is required";
    }
    if (!formData.lastname.trim()) {
      validationErrors.lastname = "lastname is required";
    }
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
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "password not matched";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/TwoStepVerification");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center mx-8">
        <img src={logo} alt="logo" className=" w-20 h-20 mt-7 mb-4" />
        <div className="font-ubuntu text-gray-800 text-xl font-bold">
          Sign Up
        </div>
        <div className="font-ubuntu mt-2 mb-10 text-lg">
          Already a member?
          <Link to="/Login" className="ml-1 text-violet-800">
            Log In
          </Link>
        </div>
        <div className="w-full">
          <div className="sm:flex ">
            <div className="sm:mr-4 flex flex-col">
              <Input
                text="Firstname"
                placeholder="Firstname"
                type="text"
                name="firstname"
                errors={errors.firstname}
                onInputChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <Input
                text="Lastname"
                placeholder="Lastname"
                type="text"
                name="lastname"
                errors={errors.lastname}
                onInputChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <Input
              text="Email"
              placeholder="host@gmail.com"
              type="email"
              name="email"
              errors={errors.email}
              onInputChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <Input
              text="Password"
              placeholder="Password"
              type="password"
              name="password"
              errors={errors.password}
              onInputChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <Input
              text="Confirm password"
              placeholder="Confirm password"
              type="password"
              name="confirmPassword"
              errors={errors.confirmPassword}
              onInputChange={handleChange}
            />
          </div>

          <Button text="Sign Up" />

          <div className="flex w-full  justify-center items-center">
            <span className="h-0.5 ml-4 w-full bg-gray-200" />
            <span className="font-ubuntu w-full mx-4">Or sign up with</span>
            <span className="h-0.5 mr-4 w-full bg-gray-200" />
          </div>
          <div className="flex py-8 items-center justify-center">
            <button>
              <img src={googLogo} alt="goog Logo" className="w-7 h-7 " />
            </button>
            <button>
              <img
                src={facebookLogo}
                alt="facebook Logo"
                className="w-7 h-7 mx-4"
              />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
