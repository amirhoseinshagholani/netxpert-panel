import CustomGaugeChart from "../customGaugeChart";
import GaugeComponent from 'react-gauge-component'
import SimCardSVG from "../svg/simCard";

const Profile=()=>{
    const gaugeStyle = {
        width: '400px', // تنظیم عرض
        height: '400px' // تنظیم طول
    };
    return(
        <>
        <div className="h-full pb-5 pt-0 pl-0 pr-0 bg-slate-300 shadow-lg rounded rounded-lg">
            <div className="bg-gradient-to-l from-blue-400 to-slate-600 h-14 p-2 rounded-tr-lg rounded-tl-lg">
                <span className="text-white text-xl">Profile</span>
            </div>
            <div className="grid lg:grid-cols-8 p-5">
                {/* <div className="col-span-2 w-80 h-64 p-5 bg-gradient-to-b from-blue-500 to-slate-800 rounded rounded-lg mt-3 mb-3">
                    <CustomGaugeChart usedCredit={30} totalCredit={100} simcardNumber={"09902223355"} packageName={"1 Mounth"} packagePeriod={"2023-3-2 to 2023-4-2"} />
                </div> */}
                <div className="col-span-6 lg:col-span-2 w-72 h-96 p-5 bg-gradient-to-b from-blue-400 to-slate-900 rounded rounded-lg mt-3">
                    {/* <CustomGaugeChart usedCredit={50} totalCredit={100} simcardNumber={"09370965131"} packageName={"3 Mounth"} packagePeriod={"2023-3-5 to 2023-6-5"} /> */}
                    <div className="flex gap-1"><span className="text-[#f7ce16]"><SimCardSVG/></span><span className="text-white">09366987921</span></div>
                    <GaugeComponent
                         value={39} 
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
                    <div><span className="text-[#f7ce16]">Service: </span><span className="text-[#fff] text-sm">1 Mounth</span></div>
                    <div><span className="text-[#f7ce16]">Period: </span><span className="text-[#fff] text-sm">2023-3-5 to 2023-6-5</span></div>
                </div>
                <div className="col-span-6 lg:col-span-2 w-72 h-96 p-5 bg-gradient-to-b from-blue-400 to-slate-900 rounded rounded-lg mt-3">
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
                </div>
                
            </div>
        </div> 
        </>
    )
}

export default Profile;