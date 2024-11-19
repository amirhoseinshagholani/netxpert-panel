import { Outlet, useNavigate } from "react-router-dom";
import logo from '@public/img/profile-img.png';
import { useEffect } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const MainLayout = () => {
    const access_token = Cookies.get('access_token');
    
    const navigate = useNavigate();  

    useEffect(()=>{
        if(!access_token){     
            navigate('/');
            toast("Your session has expired, please login again");
            return false;
        }
    },[]);

    return(
        <>
            <div className="absolute grid grid-cols-6 h-full w-full font-semibold">
                <div className="col-span-1 bg-gradient-to-b from-blue-500 to-slate-800 h-full ">
                    <div>
                        <div className="pt-12 pb-12"><img src={logo} className="w-48 mx-auto justify-center" alt="" /></div>
                        <div>
                            <a href="/panel">
                                <div className="p-3 pt-4 pb-4 pl-8 text-sm font-semibold text-white hover:bg-gradient-to-r from-transparent to-slate-200">
                                    Profile
                                </div>
                            </a>
                            <a href="/panel/buyPackage">
                                <div className="p-3 pt-4 pb-4 pl-8 text-sm font-semibold text-white hover:bg-gradient-to-r from-transparent to-slate-200">
                                    Buy Packages
                                </div>
                            </a>
                            <a href="/panel/reservedPackage">
                                <div className="p-3 pt-4 pb-4 pl-8 text-sm font-semibold text-white hover:bg-gradient-to-r from-transparent to-slate-200">
                                    Reserved packages
                                </div>
                            </a>
                            <a href="/panel/transactions">
                                <div className="p-3 pt-4 pb-4 pl-8 text-sm font-semibold text-white hover:bg-gradient-to-r from-transparent to-slate-200">
                                    History
                                </div>
                            </a>



                            <a href="/">
                                <div className="p-3 pt-4 pb-4 pl-8 text-sm font-semibold text-white hover:bg-gradient-to-r from-transparent to-slate-200">
                                    Log out
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 bg-white h-full flex flex-col">
                    <div className="bg-slate-800 h-9 p-1 pl-2 shadow-lg rounded-b-xl">
                        <span className="text-white text-xs font-bold">Hi, Welcome to NetXpert!</span>
                    </div>
                    <div className="flex-grow p-4">
                        <div className="h-full">
                            <Outlet/>
                        </div>
                    </div>
                    <div id="footer" className="bg-slate-800 h-9 p-2 rounded-t-xl">
                        <span className="flex mx-auto text-white justify-end font-normal text-xs">Copyright © 2021 NetXpert</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MainLayout;
