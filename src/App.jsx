import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserAuth } from "@redux/actions/main";
import LoadingSpinner from "@components/LoadingSpinner";

export default function App() {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.userState);

  useEffect(() => {
    dispatch(getUserAuth());
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        {!user ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<Navigate to="/home" />} />
        )}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
