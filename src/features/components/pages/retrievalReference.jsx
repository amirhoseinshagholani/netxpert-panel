import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cookies from 'js-cookie';
import done from '@public/img/done.png';
import faild from '@public/img/faild.png';

const RetrievalReference = () => {
    
    // const currentUrl = window.location.href;
    // const urlObj = new URL(currentUrl);

    const location = useLocation();

    const [trackingCode,setTrackingCode] = useState();
    const [transactionStatus,setTransactionStatus] = useState();

    // useEffect(()=>{ 
    //     setTrackingCode(urlObj.searchParams.get("tracking_code"));
    //     setTransactionStatus(urlObj.searchParams.get("status"));
    // },[currentUrl])

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setTrackingCode(params.get("tracking_code"));
        setTransactionStatus(params.get("status"));
    }, [location.search]); 

    const token = Cookies.get('token');
    // console.log(currentUrl);
    
    return (
        <>
            <div className="p-3">
                <div className="mt-5">
                    <div className="flex mx-auto justify-center">{transactionStatus == "success" ? (<img src={done} alt="" />):(<img src={faild} alt="" />) }</div>
                    <div className="flex mx-auto justify-center text-gray-700 text-xl font-bold">Tracking Code: {trackingCode}</div>
                    <div className="flex mx-auto justify-center mt-5   text-xl font-bold"><a className="bg-green-600 p-3 pr-4 pl-4 rounded rounded-lg text-white shadow-lg" href="/#/panel">Homepage</a></div>
                </div>
            </div>
        </>
    )
}

export default RetrievalReference;