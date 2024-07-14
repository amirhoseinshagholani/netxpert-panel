import { createBrowserRouter } from "react-router-dom";
import Login from "./src/features/components/login";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    }
])

export default router;