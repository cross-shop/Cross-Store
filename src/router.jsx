import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Header from "./pages/Header";

export const myRouter = createBrowserRouter ([
    {
        path: "/",
        element: <Layout />,
        children:[
           {
            path: "/",
            element:<Home />
           },
           {
            path: "/header",
            element: <Header />
           }
        ]
    }
])