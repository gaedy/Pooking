import { current } from "@reduxjs/toolkit";
import { useRef, useState } from "react";

function Dialog({ children }) {
  const dialogRef = useRef(null);

  const [isShow, setIsShow] = useState(false);

  const openDialog = () => {};

  const closeDialog = () => {};

  return (
    <>
      <div className="relative">
        <div>{children}</div>

        <dialog ref={dialogRef} className="absolute top-0 w-36 h-28 opacity-25">
          <p>test</p>
        </dialog>
      </div>
    </>
  );
}

export default Dialog;
