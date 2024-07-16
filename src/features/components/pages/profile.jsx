import CustomGaugeChart from "../customGaugeChart";

const Profile=()=>{
    return(
        <>
        <div className="h-full pb-5 pt-0 pl-0 pr-0 bg-slate-100 shadow-lg rounded rounded-lg">
            <div className="bg-gradient-to-r from-orange-400 to-slate-100 h-14 p-2 rounded-tr-lg rounded-tl-lg">
                <span className="text-white text-2xl">Profile</span>
            </div>
            <div className="grid grid-cols-12 p-5">
                <div className="col-span-3 w-80 h-64 p-5 bg-gradient-to-b from-blue-500 to-slate-800 rounded rounded-lg m-3">
                    <CustomGaugeChart usedCredit={30} totalCredit={100} simcardNumber={"09902223355"} packageName={"1 Mounth"} packagePeriod={"2023-3-2 to 2023-4-2"} />
                </div>
                <div className="col-span-3 w-80 h-64 p-5 bg-gradient-to-b from-blue-500 to-slate-800 rounded rounded-lg m-3">
                    <CustomGaugeChart usedCredit={50} totalCredit={100} simcardNumber={"09370965131"} packageName={"3 Mounth"} packagePeriod={"2023-3-5 to 2023-6-5"} />
                </div>
            </div>
        </div> 
        </>
    )
}

export default Profile;