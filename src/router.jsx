import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Catalog from "./pages/Catalog";
import Obuv from "./pages/Obuv";
import Wishlist from "./pages/Wishlist";
import Oferzakaz from "./pages/Oferzakaz";
import Notfound from "./pages/Notfound";
import Basket from "./pages/Cart";
import AuthForm from "./auth/AuthForm";
import AdminLogin from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import AddProduct from "./admin/Less";
import ProductList from "./admin/View";
import Profile from "./components/Profile";
import ProtectedRoute from "./admin/Login/ProtectedRoute"; 

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/*", element: <Notfound /> },
      { path: "/basket", element: <Basket /> },
      { path: "/search", element: <Search /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/obuv/:id", element: <Obuv /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/payment", element: <Oferzakaz /> },
      { path: "/register", element: <AuthForm /> },
    ],
  },
  { path: "/adminlogin", element: <AdminLogin /> },
  {
    path: "/admin",
    element: (
      <ProtectedRoute requiredRole="admin">
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      { path: "/admin", element: null }, // Dashboard main content
      { path: "/admin/stats", element: <div>Статистика бет</div> },
      { path: "/admin/users", element: <div>Клиенттер бет</div> },
      { path: "/admin/orders", element: <div>Заказдар бет</div> },
      { path: "/admin/settings", element: <div>Сынактар бет</div> },
    ]
  },
  { 
    path: "/addproduct",
    element: (
      <ProtectedRoute requiredRole="admin">
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      { path: "/addproduct", element: <AddProduct /> }
    ]
  },
  { 
    path: "/productlist",
    element: (
      <ProtectedRoute requiredRole="admin">
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      { path: "/productlist", element: <ProductList /> }
    ]
  },
  {path: "/profile",
    element: (
      <ProtectedRoute requiredRole="client">
        <Profile />
      </ProtectedRoute>
    ),},
]);