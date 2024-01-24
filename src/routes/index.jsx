import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Logout from "@/pages/Logout/Logout";
import Profile from "@/pages/Profile/Profile";
import Login from "@/pages/Login/Login";
import Signup from "@/pages/Signup/Signup";

import constants from "@/helpers/constants";


import { ProtectedRoute } from "./ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";

const Routes = () => {
  const { token } = useAuth();

  const publicRoutes = [
    {
      path: constants.ROUTE_PATHS.HOME,
      element: <Home></Home>,
    },
  ];

  const protectRoutes = [
    {
      path: constants.ROUTE_PATHS.DEFAULT,
      element: <ProtectedRoute></ProtectedRoute>,
      children: [
        {
          path: constants.ROUTE_PATHS.LOGOUT,
          element: <Logout></Logout>,
        },
        {
          path: constants.ROUTE_PATHS.PROFILE,
          element: <Profile></Profile>,
        },
      ],
    },
  ];

  const notAuthenRoutes = [
    {
      path: constants.ROUTE_PATHS.LOGIN,
      element: <Login></Login>,
    },
    {
      path: constants.ROUTE_PATHS.SIGNUP,
      element: <Signup></Signup>,
    },
  ];

  const routers = createBrowserRouter([
    ...publicRoutes,
    ...(!token ? protectRoutes : []),
    ...notAuthenRoutes,
  ]);

  return <RouterProvider router={routers}></RouterProvider>;
};

export default Routes;
