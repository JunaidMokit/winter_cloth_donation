import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './index.css'
import ReactDOM from "react-dom/client";
import Login from "./AnotherComponent/Login";
import Register from "./AnotherComponent/Register";
import Root from "./AnotherComponent/Root";
import AuthProvider from "./AnotherComponent/AuthProvider";
import Order from "./AnotherComponent/Order";
import PrivateRoute from "./AnotherComponent/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'login',
        element:<Login></Login>

      },
      {
        path:'signup',
        element:<Register></Register>

      },
      {
        path:'order',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      }
    ]
    
  },
  
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
 <AuthProvider>
   <RouterProvider router={router} />
 </AuthProvider>
);
