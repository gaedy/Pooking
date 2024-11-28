import { Outlet } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="flex flex-col items-ce justify-center p-4 py-8 gap-2 h-full max-w-xl mx-auto">
        <p className="px-4 text-xl font-bold">Sign in</p>

        <Outlet />
      </div>
    </>
  );
}

export default LoginPage;
