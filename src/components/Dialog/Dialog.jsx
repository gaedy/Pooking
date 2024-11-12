import { CircleXIcon, SidebarClose } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Dialog({ children }) {
  const dialogRef = useRef(null);

  const openDialog = () => {
    if (dialogRef.current && !dialogRef.current.hasAttribute("open")) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (!dialogRef.target && dialogRef.current.hasAttribute("open")) {
      dialogRef.current.close();
    }
  };

  const closeOutside = (e) => {
    if (e.currentTarget === e.target) {
      closeDialog();
    }
  };

  return (
    <>
      <div className="relative">
        <div onClick={openDialog}>{children}</div>

        <dialog
          ref={dialogRef}
          onClick={(e) => {
            closeOutside(e);
          }}
          className="fixed w-full h-full rounded-lg bg-hover backdrop:bg-black backdrop:opacity-50 shadow-lg outline-none"
        >
          <div className="h-full w-full flex justify-between p-6">
            <p>test</p>
            <CircleXIcon
              className="cursor-pointer hover:stroke-alternateText"
              onClick={closeDialog}
            />
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Dialog;
