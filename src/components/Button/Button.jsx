// eslint-disable-next-line react/prop-types
function Button({
  type = "default",
  children,
  text = "test",
  className,
  onClick,
  onSubmit,
}) {
  const types = {
    default:
      "bg-button hover:bg-buttonHover active:bg-buttonHover2 text-slate-50",
    outline: "border text-blue-700 hover:bg-hover2 active:bg-hover",
  };
  return (
    <>
      <button
        onClick={onClick}
        onSubmit={onSubmit}
        className={`${className} select-none transition-all duration-200 text-sm w-28  rounded-full ${types[type]}`}
      >
        <p>{text}</p>
        {children}
      </button>
    </>
  );
}

export default Button;
