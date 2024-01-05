import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";

const ForgotPssword = () => {
  const [formData, setFormData] = useState({
    email: "",
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
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex mx-8 flex-col items-center">
        <img src={logo} alt="logo" className="w-16 h-16 mt-7 mb-4" />
        <div className="font-ubuntu text-gray-800 text-lg font-bold">
          Reset your password
        </div>
        <div className="my-5">
          <div className="my-5 font-ubuntu text-gray-800 text-lg ">
            Check your email! we'll email you instructions to reset your
            password.
          </div>
          <div className="flex w-full flex-col">
            <Input
              text="Email"
              placeholder="host@gmail.com"
              type="email"
              name="email"
              errors={errors.email}
              onInputChange={handleChange}
            />
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/3">
              <Button text="Reset password" className="flex-1" />
            </div>
            <Link to="/Login" className="w-1/3 underline mx-2 text-violet-800">
              Return to login?
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ForgotPssword;
