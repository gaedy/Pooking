import { LoaderIcon } from "lucide-react";

function LoadingSpin({ className }) {
  return (
    <div className={`flex flex-1 justify-center ${className}`}>
      <LoaderIcon className="animate-spin" />
    </div>
  );
}

export default LoadingSpin;
