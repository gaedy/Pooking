// eslint-disable-next-line react/prop-types
function Button({ type = "default", children, text = "test" }) {
  const types = {
    default: "bg-button hover:bg-buttonHover text-slate-50",
    outline: "border text-blue-700 hover:bg-hover active:bg-hover2",
  };
  return (
    <>
      <button
        className={`select-none transition-all duration-200 text-sm w-28 h-8 rounded-md m-28 ${types[type]}`}
      >
        <p>{text}</p>
        {children}
      </button>
    </>
  );
}

export default Button;
