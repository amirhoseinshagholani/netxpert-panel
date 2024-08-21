import { useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import Grid from "../../../core/grid";
import { httpService } from "../../../core/http-service";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



const ReservedPackage = () => {

    const simcardNumber = Cookies.get('simcardNumber');
    const [userServices, setUserServices] = useState();

    const getRezerved = async () => {
        if (simcardNumber) {
            const response_getAllServicesOfUser = await httpService.get(`/deltaSib/getAllServicesOfUser?Api_User=netxpert&Api_Pass=12345678aA*&username=${simcardNumber}`);
            const response_getServices = await httpService.get(`/deltaSib/getServices?Api_User=netxpert&Api_Pass=12345678aA*`);

            const serviceMap = new Map();
            response_getServices.data.forEach(service => {
                serviceMap.set(service.Service_Id, service.ServiceName);
            });

            const updatedServicesOfUser = response_getAllServicesOfUser.data.map(service => {
                return {
                    ...service,
                    Service_name: serviceMap.get(service.Service_Id) || 'Unknown'
                };
            });
 
            const latestUpdate = updatedServicesOfUser.filter(res=>{
                return res.ServiceStatus == 'Pending';
            })

            console.log(latestUpdate);

            setUserServices(latestUpdate);
        }
    }
    useEffect(() => {
        getRezerved();
    }, []);

    const getway_token = async () => {

        const formData = new FormData();
        formData.append("amount", 17000);
        formData.append("passPhrase", "0D7566C195C8B5B9");
        formData.append("acceptorId", "992180008175424");

        try {
            const response_getway = await httpService.post('/getway/payment', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response_getway.data);
            // setGetWayToken(response_getway.data.token);
            // Cookies.set('token',response_getway.data.token,{expires:1});
            // navigate('/reserveProccess');


        } catch (err) { 
            console.log(err);
        }

        return;
    };




    useEffect(() => {
        getway_token();
    }, [])


    const data = userServices && userServices.map(service => (
        {
            Service_id: service.Service_Id,
            Service_name: service.Service_name,
            Reservation_date: service.CDT.split(' ')[0],
        }
    ));

    const columns = useMemo(
        () => [
            {
                accessorKey: 'Service_id',
                header: 'Service Id',
                size: 150,
            },
            {
                accessorKey: 'Service_name',
                header: 'Service Name',
                size: 150,
            },
            {
                accessorKey: 'Reservation_date',
                header: 'Reservation Date',
                size: 150,
            }
        ],
        [],
    );
    return (
        <>
            <div className="h-full pb-5 pt-0 pl-0 pr-0 bg-slate-200 shadow-lg rounded rounded-lg">
                <div className="bg-gradient-to-l from-blue-400 to-slate-600 h-14 p-2 rounded-tr-lg rounded-tl-lg">
                    <span className="text-white text-xl">Reserved packages</span>
                </div>
                <div>
                    {/* <form onSubmit={handleSubmit(getway_token)}>
                        <input type="submit" value={"payment"}/>
                    </form> */}
                    {/* {
                        getWayToken && (
                            <form method="post" action="https://ikc.shaparak.ir/iuiv3/IPG/Index/" enctype="multipart/form-data">
                                <input type="hidden" name="tokenIdentity" value={getWayToken} />
                                <input type="submit" value="DoPayment"></input>
                            </form>
                        )
                    } */}

                </div>
                <div className="px-3 py-4">
                    {
                        <Grid columns={columns} data={data} />
                    }
                </div>
            </div>
        </>
    )
}

export default ReservedPackage;