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

const convertDate = (dateString) => {
    const [year, month, day] = dateString.split('/');
    return `${year}-${month}-${day}`;
};

const calculatePercentageRemaining = (startDate, endDate) => {
    const today = new Date();
    const year = today.getFullYear(); 
    const month = today.getMonth() + 1; 
    const day = today.getDate();
    const todayDate = `${year}/${month}/${day}`;
    
    const totalDays = differenceInDays(parseISO(endDate), parseISO(startDate));
    const remainingDays = differenceInDays(parseISO(endDate), parseISO(convertDate(todayDate)));
    return (remainingDays / totalDays) * 100;
};

const Profile = () => {

    const usernamne = Cookies.get('username');
    const access_token = Cookies.get('access_token');
    const [terminals, setTerminals] = useState([]);
    const [creditInfos, setCreditInfos] = useState([]);
    const [activeService, setActiveService] = useState([]);

    useEffect(() => {
        let my_arr = [];
        if (terminals && activeService) {
            for (let i = 0; i < Math.min(terminals.length, activeService.length); i++) {
                my_arr.push({
                    terminalSim: terminals[i].terminalSim,
                    terminalType: terminals[i].terminalType,
                    serviceName: activeService[i].serviceName,
                    startDate: activeService[i].startDate,
                    endDate: activeService[i].endDate,
                });
            }
        }
        setCreditInfos(my_arr);
    }, [activeService])

    const getTerminalsAndService = async () => {
        try {
            const response_getTerminals = await httpService.get("/v1/api/neka/terminals", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + access_token
                }
            });

            var activeService_arr = [];

            if (response_getTerminals.data.result.length > 0) {
                setTerminals(response_getTerminals.data.result);

                for (const terminal of response_getTerminals.data.result) {

                    const response_getcreditInfos = await httpService.get(`/v1/api/neka/creditInfos/${terminal.terminalSim}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + access_token
                        }
                    });

                    if (response_getcreditInfos.data.result.length > 0) {
                        activeService_arr.push(
                            ...response_getcreditInfos.data.result
                        );
                    }
                }

                setActiveService(activeService_arr);
            }
        } catch (err) {
            toast("There is a network problem, please try again later");
            return false;
        }
    }

    useEffect(() => {
        getTerminalsAndService();
    }, []);

    const gaugeStyle = {
        width: '400px',
        height: '400px'
    };
    return (
        <>
            <div className="h-full pb-5 pt-0 pl-0 pr-0 bg-slate-200 shadow-lg rounded rounded-lg">
                <div className="bg-gradient-to-l from-blue-400 to-slate-600 h-14 p-2 rounded-tr-lg rounded-tl-lg">
                    <span className="text-white text-xl">Profile</span>
                </div>
                
                <div className="grid lg:grid-cols-8 p-5">
                    {

                        creditInfos && creditInfos.map((creditInfo) => (
                            <div className="shadow-2xl col-span-6 lg:col-span-2 w-72 h-96 p-5 bg-gradient-to-b from-blue-400 to-slate-900 rounded rounded-lg mt-3">
                                <div className="flex gap-1"><span className="text-[#f7ce16]"><SimCardSVG /></span><span className="text-gray-800 font-bold">{creditInfo.terminalSim}</span></div>
                                <GaugeComponent
                                    value={calculatePercentageRemaining(convertDate(creditInfo.startDate),convertDate(creditInfo.endDate.split(' ')[0]))}
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
        </>
    )
}

export default Profile;