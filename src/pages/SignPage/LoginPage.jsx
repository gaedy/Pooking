import { Outlet, useLocation } from "react-router-dom";

function LoginPage() {
  const locate = useLocation();

  const currentPageTitles = {
    "/login/signin": "Sign in",
    "/login/signup": "Sign up",
  };
  const currentPageTitle = currentPageTitles[locate.pathname] || "Welcome";
  return (
    <>
      <div className="flex flex-col items-ce justify-center p-4 py-8 gap-2 h-full max-w-xl mx-auto">
        <p className="px-4 text-xl font-bold">{currentPageTitle}</p>

        <Outlet />
      </div>
    </>
  );
}

export default LoginPage;
