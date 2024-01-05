// import { LockOutlined } from "@mui/icons-material";
import logo from "../../assets/img/logo.jpg";
import Button from "../../components/Button";

const TwoStepVerification = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Email verified!");
      }}
    >
      {/* <LockOutlined /> */}
      <div className="flex mx-8 flex-col items-center">
        <img src={logo} alt="logo" className="w-16 h-16 mt-7 mb-4" />
        <div className="font-ubuntu text-gray-800 text-lg font-bold">
          2-step verification
        </div>
        <div className="my-5">
          <div className="my-5 font-ubuntu text-center text-gray-800 text-lg ">
            We sent a verification code to your email. Please enter the code in
            the field below.
          </div>
          <div className="flex flex-wrap justify-between items-center">
            <input
              className="bg-gray-200 text-center w-20 h-20 outline-none focus:ring-2 focus:ring-inset  focus:ring-blue-400 rounded-xl  "
              type="text"
              maxlength="1"
            />
            <input
              className="bg-gray-200 text-center w-20 h-20 outline-none focus:ring-2 focus:ring-inset  focus:ring-blue-400 rounded-xl  "
              type="text"
              maxlength="1"
            />
            <input
              className="bg-gray-200 text-center w-20 h-20 outline-none focus:ring-2 focus:ring-inset  focus:ring-blue-400 rounded-xl  "
              type="text"
              maxlength="1"
            />
            <input
              className="bg-gray-200 text-center w-20 h-20 outline-none focus:ring-2 focus:ring-inset  focus:ring-blue-400 rounded-xl  "
              type="text"
              maxlength="1"
            />
          </div>
          <Button text="Verify my account" className="w-full " />
        </div>
      </div>
    </form>
  );
};

export default TwoStepVerification;
