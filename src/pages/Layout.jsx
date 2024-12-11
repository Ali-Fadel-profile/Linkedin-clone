import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Layout() {
  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
      return;
    }
  }, [user]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
