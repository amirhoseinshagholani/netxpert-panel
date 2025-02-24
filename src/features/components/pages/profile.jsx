import CustomGaugeChart from "../customGaugeChart";
import GaugeComponent from 'react-gauge-component'
import SimCardSVG from "../svg/simCard";
import Cookies from "js-cookie";
import axios from "axios";
import { httpService } from "../../../core/http-service";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { differenceInDays, parseISO } from 'date-fns';
import { useNavigate } from "react-router-dom";
import { normalizePhoneNumber } from "../../../core/functions";
import Remain from "../svg/remain";
import Swal from "sweetalert2";

const convertDate = (dateString) => {
    const [year, month, day] = dateString.split('/');
    return `${year}-${month}-${day}`;
};

const Profile = () => {


    const access_token = "";
    var remaining = 0;
    const usernamne = Cookies.get('username');
    // const session_Name = Cookies.get('session_Name');
    const user_id = Cookies.get('user_id');

    const [terminals, setTerminals] = useState([]);
    const [servers, setServers] = useState([]);
    const [creditInfos, setCreditInfos] = useState([]);
    const [activeService, setActiveService] = useState([]);
    const [session_Name, setSession_Name] = useState();

    const getSessionName = async () => {
        const response_getSessionName = await httpService.get('/nekatel/api/crm/getSessionName', {
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        setSession_Name(response_getSessionName.data);
    }

    useEffect(() => {
        getSessionName();
    }, []);

    useEffect(() => {
        if (terminals && activeService && servers.length > 0) {
            const my_arr = [];
            for (let i = 0; i < Math.min(terminals.length, activeService.length, servers.length); i++) {
                let operator = "";

                if (terminals[i].cf_1750 === "شاتل") {
                    operator = "Shatel";
                } else if (terminals[i].cf_1750 === "پیشگامان") {
                    operator = "Pishgaman";
                } else {
                    operator = "NAN";
                }

                my_arr.push({
                    terminalSim: terminals[i].cf_1385,
                    terminalType: terminals[i].cf_1441,
                    serviceName: activeService[i].ServiceName,
                    startDate: activeService[i].StartDate,
                    endDate: activeService[i].EndDate,
                    ip: terminals[i].cf_1457,
                    location: servers[i].cf_1347,
                    operator: operator,
                });
            }
            setCreditInfos(my_arr);
        }
    }, [terminals, activeService, servers]);


    const calculatePercentageRemaining = (startDate, endDate) => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const todayDate = `${year}-${month}-${day}`;

        const totalDays = differenceInDays(parseISO(endDate), parseISO(startDate));
        const remainingDays = differenceInDays(parseISO(endDate), parseISO(todayDate));

        if (totalDays === 0) return 0;

        const percentageRemaining = (remainingDays / totalDays) * 100;

        remaining = remainingDays;

        return percentageRemaining;
    };

    const getTerminalsAndService = async () => {
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

            var activeService_arr = [];

            if (response_getTerminals.data.result.length > 0) {
                setTerminals(response_getTerminals.data.result);

                for (const terminal of response_getTerminals.data.result) {

                    const response_getcreditInfos = await httpService.get(`/nekatel/api/deltaSib/getActiveServiceOfUser?Api_User=netxpert&Api_Pass=12345678aA*&username=${terminal.cf_1385}`, {
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });
                    // console.log(response_getcreditInfos.data.length);

                    if (response_getcreditInfos.data.length > 0) {
                        const enrichedData = response_getcreditInfos.data.map(service => ({
                            ...service,
                        }));

                        activeService_arr.push(...enrichedData);
                    } else {
                        navigate('/login');
                        return false;
                    }
                }
                setActiveService(activeService_arr);
            }
        } catch (err) {
            // toast("There is a network problem, please try again later");
            navigate('/login');
            return false;
        }
    }

    useEffect(() => {
        session_Name && getTerminalsAndService();
    }, [session_Name]);


    const getServers = async () => {
        try {
            const server_arr = [];
            if (terminals) {
                const promises = terminals.map((terminal) => {
                    return httpService.get('/nekatel/api/crm/getData', {
                        params: {
                            sessionName: session_Name && session_Name,
                            query: `SELECT * FROM vtcmServer WHERE id=${terminal.cf_1445};`
                        },
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });
                });

                const responses = await Promise.all(promises);

                responses.forEach((response) => {
                    server_arr.push(...response.data.result);
                });

                if (server_arr.length > 0) {
                    console.log(server_arr);
                    setServers(server_arr);
                }
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    };


    useEffect(() => {
        getServers();
    }, [terminals])


    const gaugeStyle = {
        width: '400px',
        height: '400px'
    };
    return (
        <>
            {
                terminals ? (
                    <div className="h-full pb-5 pt-0 pl-0 pr-0 bg-slate-200 shadow-lg rounded rounded-lg">
                        <div className="bg-gradient-to-l from-blue-400 to-slate-600 h-14 p-2 rounded-tr-lg rounded-tl-lg">
                            <span className="text-white text-xl">Profile</span>
                        </div>

                        <div className="grid  md:grid-cols-8 p-5">
                            {

                                creditInfos && creditInfos.map((creditInfo) => (

                                    <div className="shadow-2xl col-span-6 lg:col-span-2 w-72 mx-auto justify-center p-5 bg-gradient-to-b from-blue-400 to-slate-900 rounded rounded-lg mt-3">
                                        <div className="flex gap-1"><span className="text-[#f7ce16]"><SimCardSVG /></span><span className="text-[#fff] font-bold">{creditInfo.terminalSim}</span></div>

                                        <GaugeComponent
                                            value={calculatePercentageRemaining(convertDate(creditInfo.startDate), convertDate(creditInfo.endDate.split(' ')[0]))}
                                            type="radial"
                                            style={{ width: 250, height: 250 }}
                                            minValue={0}
                                            maxValue={100}
                                            arc={{
                                                cornerRadius: 7,
                                                padding: 0.05,
                                                width: 0.25,
                                                colorArray: ["#FF0000", "#F5CD19", "#5BE12C"]
                                            }}
                                            pointer={{
                                                type: "needle",
                                                color: "#fff",
                                                length: 0.7,
                                                width: 20,
                                                animate: true,
                                                animationDuration: 3000,
                                                animationDelay: 100
                                            }}

                                            labels={{
                                                valueLabel: {
                                                    style: { fontSize: "35px", fill: "#fff", textShadow: "black 1px 1px 0px, black 0px 0px 2.5em, black 0px 0px 0.2em" },
                                                    maxDecimalDigits: 2,
                                                    hide: false
                                                }
                                            }}
                                        />
                                        <div className="flex gap-1 mb-5"><span className="text-[#f7ce16] text-xl mx-auto font-bold">Remaining days: <span className="">{remaining && remaining}</span> days</span></div>

                                        <div>
                                            <span className="text-[#f7ce16] text-sm">Service: </span><span className="text-[#fff] text-sm">
                                                {creditInfo && (
                                                    creditInfo.serviceName || "Please wait..."
                                                )}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[#f7ce16] text-sm">Start Date: </span><span className="text-[#fff] text-sm">
                                                {creditInfo && (
                                                    creditInfo.startDate
                                                )}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[#f7ce16] text-sm">End Date: </span><span className="text-[#fff] text-sm">
                                                {creditInfo && (
                                                    creditInfo.endDate.split(' ')[0]
                                                )}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[#f7ce16] text-sm">IP: </span><span className="text-[#fff] text-sm">
                                                {creditInfo && (
                                                    creditInfo.ip || "Please wait..."
                                                )}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[#f7ce16] text-sm">Operator: </span><span className="text-[#fff] text-sm">
                                                {creditInfo && (
                                                    creditInfo.operator || "Please wait..."
                                                )}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[#f7ce16] text-sm">Status: </span><span className="text-[#fff] text-sm">
                                                {creditInfo && (
                                                    "Active" || "Please wait..."
                                                )}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[#f7ce16] text-sm">Location: </span><span className="text-[#fff] text-sm">
                                                {creditInfo && (
                                                    creditInfo.location || "Please wait..."
                                                )}
                                            </span>
                                        </div>
                                    </div>


                                )
                                )
                            }




                            {/* <div className="col-span-6 lg:col-span-2 w-72 h-96 p-5 bg-gradient-to-b from-blue-400 to-slate-900 rounded rounded-lg mt-3">
                    <div className="flex gap-1"><span className="text-[#f7ce16]"><SimCardSVG/></span><span className="text-white">09370965131</span></div>
                    <GaugeComponent
                         value={76} 
                         type="radial" 
                         style={{ width: 250, height: 250 }} 
                         minValue={0} 
                         maxValue={100} 
                         arc={{
                             cornerRadius: 7,
                             padding: 0.05,
                             width: 0.25,
                             colorArray: ["#5BE12C", "#F5CD19", "#FF0000"] 
                         }}
                         pointer={{
                             type: "needle",
                             color: "#fff",
                             length: 0.7,
                             width: 20,
                             animate: true,
                             animationDuration: 3000,
                             animationDelay: 100
                         }}
                         labels={{
                             valueLabel: {
                                 style: { fontSize: "35px", fill: "#fff", textShadow: "black 1px 1px 0px, black 0px 0px 2.5em, black 0px 0px 0.2em" },
                                 maxDecimalDigits: 2,
                                 hide: false
                             }
                         }}
                    />
                    <div><span className="text-[#f7ce16]">Service: </span><span className="text-[#fff] text-sm">3 Mounth</span></div>
                    <div><span className="text-[#f7ce16]">Period: </span><span className="text-[#fff] text-sm">2023-3-5 to 2023-6-5</span></div>
                </div> */}

                        </div>
                    </div>
                ) : (
                    <div className="h-full">
                        <div className="spinner w-96 h-96 mx-auto mt-20"></div>
                    </div>
                )
            }
        </>
    )
}

export default Profile;