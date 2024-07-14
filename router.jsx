import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./src/features/components/login";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>,
        action:loginAction
    }
])

export default router;