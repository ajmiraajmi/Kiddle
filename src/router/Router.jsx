import Home from "@/components/home/Home";
import Login from "@/components/login/Login";
import Register from "@/components/register/Register";
import RootLayout from "@/root/RootLayout";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
    
        ],
    },
]);
export default Router



