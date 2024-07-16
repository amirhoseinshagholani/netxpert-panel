import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./src/features/components/login";
import MainLayout from "./src/features/components/main-layout";
import Profile from "./src/features/components/pages/profile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>,
        action:loginAction
    },
    {
        path:'/panel',
        element:<MainLayout/>,
        children:[{
            element:<Profile/>,
            index:true
        }]
    }
])

export default router;