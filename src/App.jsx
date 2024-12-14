import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Welcome from "./pages/auth/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserAuth } from "@redux/actions/main";
import LoadingSpinner from "@components/LoadingSpinner";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";

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
        {!user ? (
          <Route path="/" element={<Welcome />} />
        ) : (
          <Route path="/" element={<Navigate to="/home" />} />
        )}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
