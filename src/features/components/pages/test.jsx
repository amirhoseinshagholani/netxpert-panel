import { useState } from "react";
import { useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

const Test = () => {
    
    const location = useLocation();
    const token = Cookies.get('token');
    // setGetWayToken(location.state);
    return (
        <>
            <form method="post" action="https://ikc.shaparak.ir/iuiv3/IPG/Index/" enctype="multipart/form-data">
                <input type="hidden" name="tokenIdentity" value={token} />
                <input type="submit" value="تایید سفارش"></input>
            </form>
        </>
    )
}

export default Test;