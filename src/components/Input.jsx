const Input = ({ placeholder, type, text }) => {
  return (
    <>
      <label htmlFor="" className="font-ubuntu  text-lg  my-2 ">
        {text}
      </label>
      <input
        type={type}
        className="bg-gray-100 p-2 outline-none border rounded-lg hover:shadow-lg"
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
