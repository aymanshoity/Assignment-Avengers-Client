import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {path:'/' ,element:<Home></Home>},
            // {path:'/' ,element:<Home></Home>},
            {path:'/register' ,element:<Register></Register>},
            {path:'/login' ,element:<Login></Login>},
        ]
    },
]);



export default Routes;