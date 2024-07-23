import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./src/features/components/login";
import MainLayout from "./src/features/components/main-layout";
import Profile from "./src/features/components/pages/profile";
import BuyPackage from "./src/features/components/pages/buyPackage";
import Transactions from "./src/features/components/pages/Transactions";
import ReservedPackage from "./src/features/components/pages/reservedPackage";

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
        },{
            path:'buyPackage',
            element:<BuyPackage/>
        },{
            path:'reservedPackage',
            element:<ReservedPackage/>
        },{
            path:'transactions',
            element:<Transactions/>
        }]
    }
])

export default router;