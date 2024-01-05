import googLogo from "../../assets/img/google-logo.png";
import facebookLogo from "../../assets/img/facebooklogo.png";
import logo from "../../assets/img/logo.jpg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center mx-8">
      <img src={logo} alt="logo" className="w-16 h-16 mt-7 mb-4" />
      <div className="font-ubuntu text-gray-800 text-xl font-bold">Sign Up</div>
      <div className="font-ubuntu mt-2 mb-10 text-lg">
        Already a member?
        <Link to="/Login" className="ml-1 text-violet-800">
          Log In
        </Link>
      </div>
      <div className="w-full">
        <div className="flex ">
          <div className="mr-4">
            <Input text="Firstname" placeholder="Firstname" type="text" />
          </div>
          <div>
            <Input text="Lastname" placeholder="Lastname" type="text" />
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <Input text="Email" placeholder="host@gmail.com" type="email" />
          </div>
          <div className="flex flex-col">
            <Input text="Password" placeholder="Password" type="password" />
          </div>
          <div className="flex flex-col">
            <Input
              text="Confirm password"
              placeholder="Confirm password"
              type="password"
            />
          </div>
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
  );
};

export default SignUp;
