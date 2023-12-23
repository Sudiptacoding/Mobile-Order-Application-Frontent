import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Addnewcourses from "../pages/Addnewcourses/Addnewcourses";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Details from "../pages/Details/Details";
import About from "../pages/About/About";
import AllPhoneList from "../pages/AllPhoneList/AllPhoneList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
            {
                path: "/moredetails/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/api/update/${params.id}`),
                element: <ProtectedRoute><Details></Details></ProtectedRoute>,
            },
            {
                path: "/addCourse",
                element: <ProtectedRoute><Addnewcourses></Addnewcourses></ProtectedRoute>,
            },
            {
                path: "/allphonelist",
                element: <ProtectedRoute><AllPhoneList></AllPhoneList></ProtectedRoute>,
            },
            {
                path: "/about",
                element: <ProtectedRoute><About></About></ProtectedRoute>,
            }
        ],
    },
]);
export default router;