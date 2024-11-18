function Select({ text = "trest", icon, onClick }) {
  return (
    <>
    
      <button
        className="flex flex-row w-full justify-start gap-2 items-center rounded-md hover:bg-background p-2"
        onClick={onClick}
      >
        <div>{icon}</div>
        <div>{text}</div>
      </button>
    </>
  );
}

export default Select;
