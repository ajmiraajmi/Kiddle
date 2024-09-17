import AddToy from "@/components/addtoy/AddToy";
import AllToys from "@/components/alltoys/AllToys";
import ToyDetails from "@/components/alltoys/ToyDetails";
import Blogs from "@/components/blogs/Blogs";
import Home from "@/components/home/Home";
import Login from "@/components/login/Login";
import MyToy from "@/components/mytoy/MyToy";
import Register from "@/components/register/Register";
import UpdateToy from "@/components/updatetoy/UpdateToy";
import PrivateRoute from "@/privateroute/PrivateRoute";
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
                path: "/add-a-toy",
                element: <PrivateRoute element={<AddToy />}/>,
            },   
            {
                path: "/toy/:id",
                element: <PrivateRoute element={<ToyDetails />}/>,
                loader:({params})=>fetch(`http://localhost:5000/toy/${params?.id}`)
            },   
            {
                path: "/update-toy/:id",
                element: <UpdateToy />,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
              },
              

            {
                path: "/blogs",
                element: <Blogs />,
            },
            {
                path: "/my-toys",
                element: <PrivateRoute  element={<MyToy />}/>,
            },
            
            {
                path: "/all-toys",
                element: <AllToys />,
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



