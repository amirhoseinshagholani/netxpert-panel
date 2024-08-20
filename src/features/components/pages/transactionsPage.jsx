import { useEffect, useMemo, useState } from "react";
import Grid from "../../../core/grid";
import Cookies from "js-cookie";
import { httpService } from "../../../core/http-service";

const TransactionsPage = () => {
    const simcardNumber = Cookies.get('simcardNumber');
    const [userServices, setUserServices] = useState();
    const getHistory = async () => {
        if (simcardNumber) {
            const response_getAllServicesOfUser = await httpService.get(`/deltaSib/getAllServicesOfUser?Api_User=netxpert&Api_Pass=12345678aA*&username=${simcardNumber}`);
            const response_getServices = await httpService.get(`/deltaSib/getServices?Api_User=netxpert&Api_Pass=12345678aA*`);

            const serviceMap = new Map();
            response_getServices.data.forEach(service=>{
                serviceMap.set(service.Service_Id,service.ServiceName);
            });

            
            

            const updatedServicesOfUser = response_getAllServicesOfUser.data.map(service => {
                return {
                    ...service,
                    Service_name: serviceMap.get(service.Service_Id) || 'Unknown' 
                };
            });
            console.log(updatedServicesOfUser.reverse());
            setUserServices(updatedServicesOfUser); 
        }
    }

    useEffect(() => {
        getHistory();
    }, []);



    const data = userServices && userServices.map(service => (
        {
            Service_id: service.Service_Id,
            Service_name: service.Service_name,
            StartDate: service.StartDate,
            EndDate: service.EndDate,
            ServiceStatus: service.ServiceStatus,
        }
    ));

    const columns = useMemo(
        () => [
            {
                accessorKey: 'Service_id',
                header: 'Service Id',
                size: 200,
            },
            {
                accessorKey: 'Service_name',
                header: 'Service Name',
                size: 200,
            },
            {
                accessorKey: 'StartDate',
                header: 'Start Date',
                size: 150,
            },
            {
                accessorKey: 'EndDate',
                header: 'End Date',
                size: 150,
            },
            {
                accessorKey: 'ServiceStatus',
                header: 'Status',
                size: 150,
            },
        ],
        [],
    );
    return (
        <>
            <div className="h-full pb-5 pt-0 pl-0 pr-0 bg-slate-300 shadow-lg rounded rounded-lg">
                <div className="bg-gradient-to-l from-blue-400 to-slate-600 h-14 p-2 rounded-tr-lg rounded-tl-lg">
                    <span className="text-white text-xl">History</span>
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

export default TransactionsPage;