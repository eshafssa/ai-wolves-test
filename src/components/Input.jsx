import { useState } from "react";

const Input = ({ placeholder, type, text, name, onInputChange, errors }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(name, value);
  };
  return (
    <>
      <label
        htmlFor=""
        className={`${errors && "text-red-500"} font-ubuntu text-lg my-2 `}
      >
        {text}
      </label>
      <input
        value={inputValue}
        type={type}
        name={name}
        className={`${
          errors && " border-red-500 bg-red-100 placeholder:text-red-500"
        } bg-gray-100 p-2 outline-none border rounded-lg hover:shadow-lg invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 `}
        placeholder={`${errors ? errors : placeholder}`}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
