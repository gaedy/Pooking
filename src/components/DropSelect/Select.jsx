
function Select({ text = "test", icon, onClick }) {
  return (
    <>
      <button
        className="flex flex-row w-full justify-start gap-2 transition-all items-center rounded-md hover:bg-input active:bg-border p-2"
        onClick={onClick}
      >
        {!icon ? (
          <p>{text}</p>
        ) : (
          <>
            <div>{icon}</div>
            
            <p>{text}</p>
          </>
        )}
      </button>
    </>
  );
}

export default Select;
