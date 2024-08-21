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

const calculatePercentageRemaining = (startDate, endDate, todayDate) => {
    const totalDays = differenceInDays(parseISO(endDate), parseISO(startDate));
    const remainingDays = differenceInDays(parseISO(endDate), parseISO(todayDate));
    return (remainingDays / totalDays) * 100;
};

const convertDate = (dateString) => {
    const [year, month, day] = dateString.split('/');
    return `${year}-${month}-${day}`;
};

const Profile=()=>{
    

    const sessionName = Cookies.get('sessionName');
    const simcardNumber = Cookies.get('simcardNumber');
    const [user,setUser] = useState(null);
    const [activeService,setActiveService]=useState(null);
    const [creditPercent,setCreditPercent]=useState();

    const getUser = async ()=>{
        try{
            const response_getUsers = await httpService.get("/deltaSib/getUsers?Api_User=netxpert&Api_Pass=12345678aA*");
            
            const currentUser = response_getUsers.data.find(res=>{
                return res.username == simcardNumber;
            });
            setUser(currentUser);
            // console.log(currentUser);


            const response_getServiceOfUser = await httpService.get(`/deltaSib/getActiveServiceOfUser?Api_User=netxpert&Api_Pass=12345678aA*&username='${currentUser.username}'`);
            // console.log(response_getServiceOfUser.data[0]);
            setActiveService(response_getServiceOfUser.data[0]);

            if(response_getServiceOfUser.data[0]){
                const percentageRemaining = calculatePercentageRemaining(
                    convertDate(response_getServiceOfUser.data[0].StartDate),
                    convertDate(response_getServiceOfUser.data[0].EndDate.split(' ')[0]),
                    convertDate(response_getServiceOfUser.data[0].CurrentDT.split(' ')[0])
                );
                setCreditPercent(percentageRemaining.toFixed(2));
                console.log(percentageRemaining.toFixed(2));
            }
        }catch(err){
            toast("There is a network problem, please try again later");
            return false;
        } 
    }

    useEffect(()=>{
        getUser();
    },[]);

    // useEffect(()=>{

    // },[activeService]);   

    const gaugeStyle = {
        width: '400px', 
        height: '400px' 
    };
    return(
        <>
        <div className="h-full pb-5 pt-0 pl-0 pr-0 bg-slate-200 shadow-lg rounded rounded-lg">
            <div className="bg-gradient-to-l from-blue-400 to-slate-600 h-14 p-2 rounded-tr-lg rounded-tl-lg">
                <span className="text-white text-xl">Profile</span>
            </div>
            <div className="grid lg:grid-cols-8 p-5">
                {
                    user && (
                        <div className="shadow-2xl col-span-6 lg:col-span-2 w-72 h-96 p-5 bg-gradient-to-b from-blue-400 to-slate-900 rounded rounded-lg mt-3">
                        <div className="flex gap-1"><span className="text-[#f7ce16]"><SimCardSVG/></span><span className="text-white">{user.username}</span></div>
                        <GaugeComponent
                             value={creditPercent} 
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
                        <div>
                            <span className="text-[#f7ce16] text-sm">Service: </span><span className="text-[#fff] text-sm">
                                {activeService && (
                                    activeService.ServiceName || "Please wait..."
                                )}
                            </span>
                        </div>
                        <div>
                            <span className="text-[#f7ce16] text-sm">Start Date: </span><span className="text-[#fff] text-sm">
                            {activeService && (
                                activeService.StartDate
                            )}
                            </span>
                        </div>
                        <div>
                            <span className="text-[#f7ce16] text-sm">End Date: </span><span className="text-[#fff] text-sm">
                            {activeService && (
                                activeService.EndDate.split(' ')[0]
                            )}
                            </span>
                        </div>
                    </div>
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