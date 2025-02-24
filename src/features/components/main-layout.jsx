import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import logo from '@public/img/profile-img.png';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import "@public/css/spinner.css";
import RightButton from "./svg/right";
import LeftJsx from "./svg/left";

const MainLayout = () => {
    const session_Name = Cookies.get('session_Name');
    const navigate = useNavigate();
    const [isShowSidebar, setIsShowSidebar] = useState(false);
    const [currentRoute, setCurrentRoute] = useState();

    useEffect(() => {
        if (!session_Name) {
            navigate('/login');
            // toast("Your session has expired, please login again");
        }
    }, [session_Name, navigate]);

    const logout = () => {
        Cookies.remove("session_Name");
        Cookies.remove("username");
        setIsShowSidebar(false);
        navigate('/login');
    };

    const showSideBar = () => {
        setIsShowSidebar(true);
    }

    const hideSideBar = () => {
        setIsShowSidebar(false);
    }

    const location = useLocation();

    useEffect(() => {
        setCurrentRoute(location.pathname);
    }, [location.pathname])

    return (
        <>
            <div className="absolute grid grid-cols-6 h-full w-full font-semibold">
                <div id="sidebar" className={`md:col-span-1 z-10 bg-gradient-to-b from-blue-500 to-slate-800 h-full absolute w-full ${!isShowSidebar ? 'hidden' : ''} md:relative md:block`}>

                    <div>
                        <div onClick={hideSideBar} className="flex justify-end">
                            <div className="p-5 md:hidden text-gray-800"><LeftJsx /></div>
                        </div>
                        <div className="pt-12 pb-12">
                            <Link to="/panel"><img src={logo} className="w-48 mx-auto justify-center" alt="Logo" /></Link>
                        </div>
                        <div className="">
                            <Link to="/panel">
                                <div onClick={hideSideBar} className={`p-3 flex pt-4 pb-4 pl-8 text-lg md:text-sm font-semibold text-white hover:bg-gradient-to-r from-transparent to-slate-200 ${currentRoute == '/panel' && 'bg-gradient-to-r from-transparent to-slate-200'}`}>
                                    <div>Profile</div>
                                </div>
                            </Link>
                            <Link to="/panel/buyPackage">
                                <div onClick={hideSideBar} className={`p-3 pt-4 pb-4 pl-8 text-lg md:text-sm font-semibold text-white hover:bg-gradient-to-r from-transparent to-slate-200 ${currentRoute == '/panel/buyPackage' && 'bg-gradient-to-r from-transparent to-slate-200'}`}>
                                    Buy Packages
                                </div>
                            </Link>
                            <Link to="/panel/reservedPackage">
                                <div onClick={hideSideBar} className={`p-3 pt-4 pb-4 pl-8 text-lg md:text-sm font-semibold text-white hover:bg-gradient-to-r from-transparent to-slate-200 ${currentRoute == '/panel/reservedPackage' && 'bg-gradient-to-r from-transparent to-slate-200'}`}>
                                    Reserved packages
                                </div>
                            </Link>
                            <Link to="/panel/transactions">
                                <div onClick={hideSideBar} className={`p-3 pt-4 pb-4 pl-8 text-lg md:text-sm font-semibold text-white hover:bg-gradient-to-r from-transparent to-slate-200 ${currentRoute == '/panel/transactions' && 'bg-gradient-to-r from-transparent to-slate-200'}`}>
                                    History
                                </div>
                            </Link>
                            <div
                                className="p-3 pt-4 pb-4 pl-8 text-lg md:text-sm font-semibold text-white hover:bg-gradient-to-r from-transparent to-slate-200 cursor-pointer"
                                onClick={logout}
                            >
                                Log out
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-6 md:col-span-5 bg-white h-full flex flex-col">

                    <div className="bg-slate-800 h-9 p-1 pl-2 shadow-lg rounded-b-xl">
                        <span className="text-white text-xs font-bold">Hi, Welcome to NetXpert!</span>
                    </div>
                    <div className="flex flex-grow md:p-4 pt-4 pr-4">
                        <div onClick={showSideBar} className="md:hidden p-1 text-green-700"><RightButton /></div>
                        <div className="flex-grow md:p-4">
                            <div className="h-full">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                    <div id="footer" className="bg-slate-800 h-9 p-2 rounded-t-xl">
                        <span className="flex mx-auto text-white justify-end font-normal text-xs">Copyright © 2021 NetXpert</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainLayout;
