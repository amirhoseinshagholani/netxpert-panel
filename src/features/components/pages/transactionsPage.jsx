import { useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import Grid from "../../../core/grid";
import { httpService } from "../../../core/http-service";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



const TransactionsPage = () => {
    const [userServices, setUserServices] = useState();

    const usernamne = Cookies.get('username');
    const session_Name = Cookies.get('session_Name');
    const user_id = Cookies.get('user_id');

    const [terminals, setTerminals] = useState([]);
    const [allServices, setAllServices] = useState([]);
    // const [reservedServices, setReservedServices] = useState([]);
    const [simcardNumber, setSimcardNumber] = useState(null);
    const [serviceName, setServiceName] = useState(null);

    const getTerminals = async () => {
        try {
            const response_getTerminals = await httpService.get('/nekatel/api/crm/getData', {
                params: {
                    sessionName: session_Name && session_Name,
                    query: `SELECT * FROM vtcmTerminals where cf_1409=${user_id}`
                },
                headers: {
                    "Content-Type": "application/json",
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

    const getAllServices = async (simNumber) => {
        try {
            const response_getUsersOfDeltasib = await httpService.get('/nekatel/api/deltaSib/getUsers?Api_User=netxpert&Api_Pass=12345678aA*', {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const usersOfDeltasib = response_getUsersOfDeltasib.data.filter((user) => {
                return user.username == simNumber;
            })

            const response_getReservedServices = await httpService.get(`/nekatel/api/deltaSib/getAllServicesOfUser?Api_User=netxpert&Api_Pass=12345678aA*&user_id=${usersOfDeltasib[0]['user_id']}`, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response_getReservedServices.data.length > 0) {
                setAllServices(response_getReservedServices.data);
            }
        } catch (err) {
            toast("There is a network problem, please try again later");
            return false;
        }
    }

    useEffect(() => {
        if (simcardNumber) {
            getAllServices(simcardNumber);
        }
    }, [simcardNumber])

    const getServiceName = async (serviceId) => {
        try {
            const response_getServices = await httpService.get("/nekatel/api/deltaSib/getServices?Api_User=netxpert&Api_Pass=12345678aA*", {
                headers: {
                    "Content-Type": "application/json",
                }
            });


            const currentService = await response_getServices.data.find((service) =>
                service.Service_Id == serviceId
            )

            return currentService ? currentService.ServiceName : null;
        } catch (err) {
            toast("There is a network problem, please try again later");
            return false;
        }
    }


    var data;
    useEffect(() => {
        const fetchData = async () => {
            if (allServices) {
                data = await Promise.all(
                    allServices.map(async (service) => (
                        {
                            Service_id: service.Service_Id,
                            Status: service.ServiceStatus,
                            Service_name: await getServiceName(service.Service_Id),
                            Reservation_date: service.CDT.split(' ')[0],
                        }
                    ))
                );
                setUserServices(data.reverse());
                console.log(data);
            }
        }
        fetchData();
    }, [allServices])



    const columns = useMemo(
        () => [
            {
                accessorKey: 'Service_id',
                header: 'Service number',
                size: 150
            },
            {
                accessorKey: 'Service_name',
                header: 'Service Name',
                size: 150
            },
            {
                accessorKey: 'Reservation_date',
                header: 'Reservation Date',
                size: 150
            },
            {
                accessorKey: 'Status',
                header: 'Service Status',
                size: 150
            }
        ],
        [],
    );
    return (
        <>
            <div className="h-full pb-5 pt-0 pl-0 pr-0 bg-slate-200 shadow-lg rounded rounded-lg">
                <div className="bg-gradient-to-l from-blue-400 to-slate-600 h-14 p-2 rounded-tr-lg rounded-tl-lg">
                    <span className="text-white text-xl">History</span>
                </div>
                <div class="w-full max-w-xs p-5">
                    <label for="terminals" class="block text-sm font-medium text-gray-700 mb-2">
                        Choose a Terminal
                    </label>
                    <select
                        name="terminals"
                        id="terminals"
                        class="block w-full px-3 py-2 bg-white text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        onChange={(e) => setSimcardNumber(e.target.value)}
                    >
                        <option value={null}>Select</option>
                        {
                            terminals && terminals.map((terminal) => (
                                <option value={terminal.cf_1385}>{terminal.cf_1385}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="px-3 py-4">
                    {
                        <Grid columns={columns} data={userServices && userServices} />
                    }
                </div>
            </div>
        </>
    )
}

export default TransactionsPage;