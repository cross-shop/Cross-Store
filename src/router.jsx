import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import MenuExpansion from "./pages/MenuExpansion";
import ONas from "./pages/oNas";
import Notfound from "./pages/Notfound";
import Konserj from "./pages/Konserj";

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
            },
            {
                path: "onas",
                element: <ONas />
            },
            {
                path: "konserj",
                element: <Konserj/>
            }
         
           
          
        ]
    }
])

