import Grid from "../../../core/grid";
import one_month_pic from "@public/img/1-month-iconjpg.jpg";
import three_month_pic from "@public/img/3-month-iconjpg.jpg";
import six_month_pic from "@public/img/6-month-iconjpg.jpg";
import twelve_month_pic from "@public/img/12-month-iconjpg copy.jpg";
import new_pic from "@public/img/new.jpg";
import { useEffect, useState } from 'react';
import { httpService } from "../../../core/http-service";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { formatNumber } from "../../../core/functions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const BuyPackage = () => {
  // const username = Cookies.get('username');
  const session_Name = Cookies.get('session_Name');
  const user_id = Cookies.get('user_id');

  const [terminals, setTerminals] = useState([]);
  const [services, setServices] = useState([]);
  const [simcardNumber, setSimcardNumber] = useState("");
  const [price, setPrice] = useState(0);

  const Navigate = useNavigate();

  const getTerminals = async () => {
    try {
      const response_getTerminals = await httpService.get('/nekatel/api/crm/getData', {
        params: {
          "sessionName": session_Name && session_Name,
          "query": `SELECT * FROM vtcmTerminals where cf_1409=${user_id}`
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

  const getServices = async () => {
    try {
      const response_getServices = await httpService.get('/nekatel/api/deltaSib/getServices?Api_User=netxpert&Api_Pass=12345678aA*', {
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response_getServices.data.length > 0) {
        setServices(response_getServices.data);
      }
    } catch (err) {
      toast("There is a network problem, please try again later");
      return false;
    }
  }

  useEffect(() => {
    getTerminals();
    getServices();
  }, []);

  const setPicture = (id) => {
    if (id == 63)
      return one_month_pic;
    else if (id == 64)
      return three_month_pic;
    else if (id == 65)
      return six_month_pic;
    else if (id == 66)
      return twelve_month_pic;
    else
      return new_pic
  }

  const buyPackage = async (service_id, price, userId) => {

    if (simcardNumber) {
      try {
        const response_buyServices = await httpService.post(
          "/nekatel/api/getway/payment",
          {
            amount: parseInt(price + "0"),
            passPhrase: "0D7566C195C8B5B9",
            acceptorId: "992180008175424",
            serviceId: service_id,
            user_id: userId,
            username: simcardNumber
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        // alert(simcardNumber);
        if (response_buyServices.data.status == true && response_buyServices.data.token) {
          const redirectUrl = "https://ikc.shaparak.ir/iuiv3/IPG/Index/?tokenIdentity=";
          const tokenIdentity = response_buyServices.data.token;

          const formContainer = document.getElementById('form-container');
          const form = document.createElement('form');
          form.action = redirectUrl;
          form.method = 'POST';
          const tokenIdentityInput = document.createElement('input');
          tokenIdentityInput.type = 'hidden';
          tokenIdentityInput.name = 'tokenIdentity';
          tokenIdentityInput.value = tokenIdentity;
          form.appendChild(tokenIdentityInput);

          const otherFieldInput = document.createElement('input');
          otherFieldInput.type = 'hidden';
          otherFieldInput.name = 'someOtherField';
          otherFieldInput.value = 'your-value';
          form.appendChild(otherFieldInput);

          formContainer.appendChild(form);
          form.submit();
        }
      } catch (error) {
        console.error("Error occurred:", error.response?.data || error.message);
      }
    } else {
      Swal.fire("Warning!", "Please choose a Terminal", "warning");
      return false;
    }
    // if (simcardNumber) {
    //   try {
    //     const response_buyServices = await httpService.post(
    //       "/v1/api/neka/purchaseServices/buy",
    //       {
    //         serviceId: String(service_id),
    //         terminalSim: simcardNumber
    //       },
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //           "Authorization": "Bearer " + access_token
    //         }
    //       }
    //     );

    //     console.log(response_buyServices.data.message);

    //     if (response_buyServices.data.message == "Success") {
    //       const redirectUrl = response_buyServices.data.result['redirectUrl'];
    //       const tokenIdentity = response_buyServices.data.result['requestBody']['tokenIdentity'];

    //       const formContainer = document.getElementById('form-container');
    //       const form = document.createElement('form');
    //       form.action = redirectUrl;
    //       form.method = 'POST';
    //       const tokenIdentityInput = document.createElement('input');
    //       tokenIdentityInput.type = 'hidden';
    //       tokenIdentityInput.name = 'tokenIdentity';
    //       tokenIdentityInput.value = tokenIdentity;
    //       form.appendChild(tokenIdentityInput);

    //       const otherFieldInput = document.createElement('input');
    //       otherFieldInput.type = 'hidden';
    //       otherFieldInput.name = 'someOtherField';
    //       otherFieldInput.value = 'your-value';
    //       form.appendChild(otherFieldInput);

    //       formContainer.appendChild(form);
    //       form.submit();
    //     }
    //   } catch (error) {
    //     console.error("Error occurred:", error.response?.data || error.message);
    //   }
    // } else {
    //   alert("Please choose a Terminal");
    // }
  };


  return (
    <>
      <div className="h-full pb-5 pt-0 pl-0 pr-0 bg-slate-200 shadow-lg rounded rounded-lg">
        <div className="bg-gradient-to-l from-blue-400 to-slate-600 h-14 p-2 rounded-tr-lg rounded-tl-lg">
          <span className="text-white text-xl">Shop Packages</span>
        </div>
        <div className="p-5">
          <div className="bg-gradient-to-r from-[#ff6d00] to-slate-600 h-10 w-full rounded rounded-lg p-2 text-white">
            <span>Packages - Choose one of the packages</span>
          </div>

          <div className="w-full max-w-xs p-5">
            <label htmlFor="terminals" className="block text-sm font-medium text-gray-700 mb-2">
              Choose a Terminal
            </label>
            <select
              name="terminals"
              id="terminals"
              className="block w-full px-3 py-2 bg-white text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              onChange={(e) => setSimcardNumber(e.target.value)}
            >
              <option value="">Select</option>
              {
                terminals && terminals.map((terminal) => (
                  <option key={terminal.id} value={terminal.cf_1385}>{terminal.cf_1385}</option>
                ))
              }
            </select>
          </div>

          <div className="m-5 grid grid-cols-12 gap-8 text-gray-100">

            {
              services && services.map((service) => (
                <div className="col-span-10 md:col-span-3 h-60 bg-gradient-to-b from-blue-400 to-slate-700 rounded-3xl p-3 shadow-xl">
                  <div className="gap-2 flex">
                    <div className="text-[#f7ce16] shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-boxes"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                      </svg>
                    </div>
                    <div className="text-md font-bold">{service.ServiceName}</div>
                  </div>
                  <div className="w-full mt-5 flex">
                    <img className="rounded rounded-md mx-auto justify-center w-16" src={setPicture(service.Service_Id)} alt="" />
                  </div>
                  <div className="mt-3">
                    <span className="font-bold text-md text-[#f5e4d7]">Description : </span>
                    <span className="text-sm">{service.Description}</span>
                  </div>
                  <div className="h-full w-full flex justify-end mt-0">
                    <div className="mt-5">
                      <span className="mb-3 flex">
                        <button onClick={() => buyPackage(Math.trunc(service.Service_Id), Math.trunc(service.Price), user_id)} className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 shadow-lg pt-1 pb-1 p-4 text-yellow-100 rounded-xl">
                          buy : {formatNumber(Math.trunc(service.Price))} IRR
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div id="form-container">{/* این قسمت به هیچ وجه حذف نشود بسیار مهم است */}</div>
        </div>
      </div>
    </>
  )
}

export default BuyPackage;