// eslint-disable-next-line react/prop-types
function Button({
  type = "default",
  children,
  text,
  className,
  onClick,
  onSubmit,
  onKeyDown,
}) {
  const types = {
    default:
      "bg-button hover:bg-buttonHover active:bg-buttonHover2 text-slate-50 p-2 px-4",
    outline: "border text-blue-700 hover:bg-hover2 active:bg-hover p-2 px-4",
    circle:
      "rounded-full bg-button hover:bg-buttonHover active:bg-buttonHover2",
  };
  return (
    <>
      <button
        onClick={onClick}
        onSubmit={onSubmit}
        onKeyDown={onKeyDown}
        className={`${className} select-none transition-all duration-200 text-sm rounded-full ${types[type]}`}
      >
        <p>{text}</p>
        {children}
      </button>
    </>
  );
}

export default Button;
