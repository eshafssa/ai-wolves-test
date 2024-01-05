const Button = ({ text }) => {
  return (
    <div>
      <button className="w-full bg-gradient font-ubuntu text-white font-semibold p-2 my-5 outline-none border rounded-lg hover:shadow-lg">
        {text}
      </button>
    </div>
  );
};
export default Button;
