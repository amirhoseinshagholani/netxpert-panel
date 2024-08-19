import { useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import Grid from "../../../core/grid";
import { httpService } from "../../../core/http-service";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



const ReservedPackage = () => {

    const { handleSubmit } = useForm();
    const [services, setServices] = useState();
    const simcardNumber = Cookies.get('simcardNumber');
    const [getWayToken, setGetWayToken] = useState();
    const getServices = async (simcardNumber) => {
        const response_getAllServicesOfUser = await httpService.get(`/deltaSib/getAllServicesOfUser?Api_User=netxpert&Api_Pass=12345678aA*&username=${simcardNumber}`);
        // console.log(response_getAllServicesOfUser);
        setServices(response_getAllServicesOfUser);
    }

    const navigate = useNavigate();

    const payment = async () => {
        alert("hi hi")

        try {
            const response_getway = await httpService.post('/getway/test-redirect', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // setGetWayToken(response_getway.data);
        } catch (err) {
            console.log(err);
        }
    }

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
            setGetWayToken(response_getway.data.token);
            Cookies.set('token',response_getway.data.token,{expires:1});
            navigate('/reserveProccess');
            
            
        } catch (err) { 
            console.log(err);
        }

        return;
    };



    useEffect(() => {
        getServices(simcardNumber);
        // getway_token();
    }, []);


    useEffect(() => {
        console.log(getWayToken);
    }, [getWayToken])


    const data = [
        {
            name: {
                firstName: 'John',
                lastName: 'Doe',
            },
            address: '261 Erdman Ford',
            city: 'East Daphne',
            state: 'Kentucky',
        },
        {
            name: {
                firstName: 'Jane',
                lastName: 'Doe',
            },
            address: '769 Dominic Grove',
            city: 'Columbus',
            state: 'Ohio',
        },
        {
            name: {
                firstName: 'Joe',
                lastName: 'Doe',
            },
            address: '566 Brakus Inlet',
            city: 'South Linda',
            state: 'West Virginia',
        },
        {
            name: {
                firstName: 'Kevin',
                lastName: 'Vandy',
            },
            address: '722 Emie Stream',
            city: 'Lincoln',
            state: 'Nebraska',
        },
        {
            name: {
                firstName: 'Joshua',
                lastName: 'Rolluffs',
            },
            address: '32188 Larkin Turnpike',
            city: 'Charleston',
            state: 'South Carolina',
        },
    ];

    const columns = useMemo(
        () => [
            {
                accessorKey: 'name.firstName', //access nested data with dot notation
                header: 'First Name',
                size: 150,
            },
            {
                accessorKey: 'name.lastName',
                header: 'Last Name',
                size: 150,
            },
            {
                accessorKey: 'address', //normal accessorKey
                header: 'Address',
                size: 200,
            },
            {
                accessorKey: 'city',
                header: 'City',
                size: 150,
            },
            {
                accessorKey: 'state',
                header: 'State',
                size: 150,
            },
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
                    <form onSubmit={handleSubmit(getway_token)}>
                        <input type="submit" value={"payment"}/>
                    </form>
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