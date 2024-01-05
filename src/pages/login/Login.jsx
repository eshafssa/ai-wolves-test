import "./login.css";
import logo from "../../assets/img/logo.jpg";
import googLogo from "../../assets/img/google-logo.png";
import facebookLogo from "../../assets/img/facebooklogo.png";
import { Link } from "react-router-dom";
// import IconSection from "../../components/iconsSection/IconSection";
const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="logo" className="w-16 h-16 mt-7 mb-4" />
      <div className="fontFam text-gray-800 text-lg font-bold">
        Sign up or Login with
      </div>
      <div className="flex flex-col w-full my-6">
        <button className="flex bg-gray-100  p-2 mx-8 mb-2  border rounded-lg hover:shadow-lg">
          <img src={googLogo} alt="google-logo" className="w-7 h-7 mx-4" />
          <span className="fontFam  text-lg ">Google</span>
        </button>
        <button className="flex bg-gray-100  p-2 mx-8 mt-2  border rounded-lg hover:shadow-lg">
          <img
            src={facebookLogo}
            alt="facebook-logo"
            className="w-7 h-7 mx-4"
          />
          <span className="fontFam text-lg">Facebook</span>
        </button>
      </div>

      <div className="flex w-full  justify-center items-center">
        <span className="h-0.5 ml-8 w-full bg-gray-100" />
        <span className="fontFam p-2 border rounded-full text-center">OR</span>
        <span className="h-0.5 mr-8 w-full bg-gray-100" />
      </div>
      <div className="flex px-8 w-full flex-col">
        <label htmlFor="" className="fontFam text-lg m-2 ">
          Email
        </label>
        <input
          type="text"
          className="bg-gray-100 outline-none  p-2 mb-2  border rounded-lg hover:shadow-lg"
          placeholder="name@host.com"
        />
        <label htmlFor="" className="fontFam  text-lg  m-2 ">
          Password
        </label>
        <input
          type="password"
          className="bg-gray-100 p-2 outline-none border rounded-lg hover:shadow-lg"
          placeholder="****"
        />
        <Link to="/Login" className="fontFam text-base text-violet-800">
          Forgot your password?
        </Link>
        <div className="flex flex-col mt-5 mb-20">
          <button className="bg-gradient fontFam text-white font-semibold p-2 outline-none border rounded-lg hover:shadow-lg">
            Sign In
          </button>
          <Link
            to="/SignUp"
            className="fontFam text-base text-center text-violet-800"
          >
            Need an account? Sign Up
          </Link>
        </div>
      </div>
      <div className="flex px-8 flex-col w-full">
        <span className="h-0.5 bg-gray-100" />
        <div className="fontFam flex my-5 items-center justify-between">
          <Link to="/Login" className="text-base text-center text-violet-800">
            Terms of services
          </Link>
          <Link to="/Login" className="text-base text-center text-violet-800">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
