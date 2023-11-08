import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import AllAssignment from "../Components/Assignment-Pages/AllAssignment";
import CreateAssignments from "../Components/Assignment-Pages/CreateAssignments";
import PrivateRoutes from "./PrivateRoutes";
import MyAssignments from "../Components/Assignment-Pages/MyAssignments";
import Submissions from "../Components/Assignment-Pages/Submissions";
import UpdateAssignment from "../Components/Assignment-Pages/UpdateAssignment";
import SingleDetailAssignment from "../Components/Assignment-Pages/SingleDetailAssignment";
import MySubmitedAssignments from "../Components/Assignment-Pages/MySubmitedAssignments";



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {path:'/' ,element:<Home></Home>},
            {path:'/assignments' ,element:<AllAssignment></AllAssignment>},
            {path:'/register' ,element:<Register></Register>},
            {path:'/login' ,element:<Login></Login>},
            {path:'/createAssignments' ,element:<PrivateRoutes><CreateAssignments></CreateAssignments></PrivateRoutes>},
            {path:'/myAssignment' ,element:<PrivateRoutes><MyAssignments></MyAssignments> </PrivateRoutes>},
            {path:'/submissions' ,element:<PrivateRoutes><Submissions></Submissions></PrivateRoutes>},
            {path:'/mySubmissions' ,element:<PrivateRoutes> <MySubmitedAssignments></MySubmitedAssignments></PrivateRoutes>},
            {path:'/singleDetailAssignment/:id' ,element:<PrivateRoutes><SingleDetailAssignment></SingleDetailAssignment> </PrivateRoutes>},
            {path:'updateAssignment/:id' ,element:<PrivateRoutes> <UpdateAssignment></UpdateAssignment></PrivateRoutes>},
        ]
    },
]);



export default Routes;