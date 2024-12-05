function Select({ text = "test", icon, onClick, smallText }) {
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
            {!smallText ? (
              <p>{text}</p>
            ) : (
              <div className="flex w-full items-center justify-between">
                <p>{text}</p>
                <p>{smallText}</p>
              </div>
            )}
          </>
        )}
      </button>
    </>
  );
}

export default Select;
