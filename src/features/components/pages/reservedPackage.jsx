import { useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import Grid from "../../../core/grid";
import { httpService } from "../../../core/http-service";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



const ReservedPackage = () => {
    const [userServices, setUserServices] = useState();
    const access_token = Cookies.get('access_token');
    const [terminals, setTerminals] = useState([]);
    const [reservedService, setReservedService] = useState([]);
    const [simcardNumber, setSimcardNumber] = useState(null);
    const [serviceName,setServiceName] = useState(null);

    const getTerminals = async () => {
        try {
            const response_getTerminals = await httpService.get("/v1/api/neka/terminals", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + access_token
                }
            });


            if (response_getTerminals.data.result.length > 0) {
                setTerminals(response_getTerminals.data.result);
            }
        } catch (err) {
            toast("There is a network problem, please try again later");
            return false;
        }
    }

    useEffect(() => {
        getTerminals();
    }, []);

    const getReservedServices = async (simNumber) => {
        try {
            const response_getReservedServices = await httpService.get(`/v1/api/neka/purchaseServices/${simNumber}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + access_token
                }
            });

            if (response_getReservedServices.data.result.length > 0) {
                // console.log(response_getReservedServices.data.result);
                setReservedService(response_getReservedServices.data.result);
            }
        } catch (err) {
            toast("There is a network problem, please try again later");
            return false;
        }
    }

    useEffect(() => {
        if (simcardNumber) {
            getReservedServices(simcardNumber);
        }
    }, [simcardNumber])

    const getServiceName = async (serviceId) => {
        try {
            const response_getServices = await httpService.get("/v1/api/neka/serviceProducts", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + access_token
                }
            });

            const currentService = await response_getServices.data.result.map((service)=>{
                if(service.serviceId == serviceId){
                    return service;
                }
            })

            // setServiceName(currentService.serviceName);
            return urrentService.serviceName;
        } catch (err) {
            toast("There is a network problem, please try again later");
            return false;
        }
    }
    var data;
    useEffect(()=>{
        data = reservedService && reservedService.map(service => (
            {
                Service_id: service.serviceId,
                Service_name: getServiceName(service.serviceId),
                Reservation_date: service.cdt.split(' ')[0],
            }
        ));
        console.log(data);
        
    },[reservedService])



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
                <div class="w-full max-w-xs p-5">
                    <label for="terminals" class="block text-sm font-medium text-gray-700 mb-2">
                        Choose an option
                    </label>
                    <select
                        name="terminals"
                        id="terminals"
                        class="block w-full px-3 py-2 bg-white text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        onChange={(e) => setSimcardNumber(e.target.value)}
                    >
                        <option>Select</option>
                        {
                            terminals && terminals.map((terminal) => (
                                <option value={terminal.terminalSim}>{terminal.terminalSim}</option>
                            ))
                        }
                    </select>
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