import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layouts/Mainlayouts";
import Error from "../Pages/Error/Error";
import Home from "../Home/Home";
import Addnewcoffee from "../Pages/Addnewcoffee/Addnewcoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import Coffee_Details from "../Pages/Coffee_details/Coffee_Details";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayouts></Mainlayouts>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/add_new_coffee",
                element:<Addnewcoffee></Addnewcoffee>
            },
            {
                path:"/update_coffee",
                element:<UpdateCoffee></UpdateCoffee>
            },
            {
                path:"/coffee/:id",
                element:<Coffee_Details></Coffee_Details>,
                loader: ({ params }) => fetch(`http://localhost:3000/coffee/${params.id}`)
            },
        ]
    }
])