import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import MenuExpansion from "./pages/MenuExpansion";


export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "*",
                element: <Notfound />
            },
            {
                path: "menuexpansion",
                element: <MenuExpansion />
            }
         
           
          
        ]
    }
])

