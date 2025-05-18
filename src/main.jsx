import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'animate.css';
import ReactDOM from "react-dom/client";
import Root from "./Components/Root.jsx";
import DontaionDeatils from "./Components/Home/DontaionDeatils.jsx";
import DonationCampagins from "./Components/Home/DonationCampagin.jsx";
import DonationForm from "./Components/Home/DonationForm.jsx";
import Home from "./Components/Home_Two/Home.jsx";
import Login from "./Components/Authentication/Login.jsx";
import AuthProvider from "./Components/Authentication/AuthProvider.jsx";
import Register from "./Components/Authentication/Register.jsx";
import PrivateRoute from "./Components/Authentication/PrivateRoute.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Forget from "./Components/Authentication/Forget.jsx";
import UpdateProfile from "./Components/Dashboard/UpdateProfile.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'campaigns',
        element:<DonationCampagins></DonationCampagins>

      },
      {
        path:"details/:id",
        element:<PrivateRoute><DontaionDeatils></DontaionDeatils></PrivateRoute>,
        loader:()=>fetch('/winter.json')
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path:'forget',
        element:<Forget></Forget>
      },
      {
        path:'update',
        element:<UpdateProfile></UpdateProfile>
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