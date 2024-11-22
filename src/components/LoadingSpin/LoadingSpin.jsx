import { LoaderIcon } from "lucide-react";

function LoadingSpin({ className }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <LoaderIcon className="animate-spin" />
    </div>
  );
}

export default LoadingSpin;
