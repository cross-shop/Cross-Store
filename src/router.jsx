import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Catalog from "./pages/Catalog";
import Istoria from "./pages/Istoria";
import Help from "./pages/Help";
import Obuv from "./pages/Obuv";
import Wishlist from "./pages/Wishlist";
import Proleved from "./pages/Proleved";
import Istoriarenda from "./pages/Istoriarenda";
import Oferzakaz from "./pages/Oferzakaz";
import ONas from "./pages/ONas";
import Notfound from "./pages/Notfound";
import Konserj from "./pages/Konserj";
import Basket from "./pages/Cart";
import AuthForm from "./auth/AuthForm";
import AdminLogin from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Access from "./pages/Access";
import Bags from "./pages/Bags";
import AddProduct from "./admin/Less";
import ProductList from "./admin/View";
import Profile from "./components/Profile";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/*",
        element: <Notfound />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/istoria",
        element: <Istoria />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/obuv/:id",
        element: <Obuv />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },

      {
        path: "/proleved",
        element: <Proleved />,
      },
      {
        path: "/istoriabrenda",
        element: <Istoriarenda />,
      },
      {
        path: "/oferzakaz",
        element: <Oferzakaz />,
      },
      {
        path: "/onas",
        element: <ONas />,
      },
      {
        path: "/konserj",
        element: <Konserj />,
      },
      {
        path: "/register",
        element: <AuthForm />,
      },
      {
        path: "accessories",
        element: <Access />,
      },
      {
        path: "bags",
        element: <Bags />,
      },
    ],
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: <Dashboard />,
  },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/productlist",
    element: <ProductList />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
