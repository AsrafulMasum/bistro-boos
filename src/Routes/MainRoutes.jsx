import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Menus from "../Pages/Menus/Menus";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";


const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: 'menus',
        element: <Menus></Menus>
      }
    ]
  },
  {
    path: '/logIn',
    element: <LogIn></LogIn>
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  }
])

export default MainRoutes;