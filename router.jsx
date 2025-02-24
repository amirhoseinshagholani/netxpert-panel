import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Login from "./src/features/components/login";
import MainLayout from "./src/features/components/main-layout";
import Profile from "./src/features/components/pages/profile";
import BuyPackage from "./src/features/components/pages/buyPackage";
import Transactions from "./src/features/components/pages/transactionsPage"
import ReservedPackage from "./src/features/components/pages/reservedPackage";
import TransactionPage from "./src/transactions/mypage";
import RetrievalReference from "./src/features/components/pages/retrievalReference";
import Homepage from "./src/features/components/pages/homepage";

const router = createHashRouter([

    {
        path: '/',
        element:<Homepage/>
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/transactions/:id',
        element: <TransactionPage />,
    },
    {
        path: '/reserveProccess',
        element: <RetrievalReference />
    },
    {
        path: '/panel',
        element: <MainLayout />,
        children: [
            {
                element: <Profile />,
                index: true,
            },
            {
                path: 'buyPackage',
                element: <BuyPackage />,
            },
            {
                path: 'reservedPackage',
                element: <ReservedPackage />,
            },
            {
                path: 'transactions',
                element: <Transactions />,
            },
        ],
    },
]);

export default router;