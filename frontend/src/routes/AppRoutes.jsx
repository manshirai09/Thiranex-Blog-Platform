import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BlogDetails from "../pages/BlogDetails";
import CreateBlog from "../pages/CreateBlog";
import EditBlog from "../pages/EditBlog";
import MyBlogs from "../pages/MyBlogs";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />
          <Route path="/my-blogs" element={<MyBlogs />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRoutes;