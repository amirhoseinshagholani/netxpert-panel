import logo from "@public/img/profile-img.png";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useActionData, useNavigate, useNavigation, useSubmit} from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { httpService } from "../../core/http-service";
import Cookies from "js-cookie";

const swalert = withReactContent(Swal);

const Login = () => {
  const { register, handleSubmit } = useForm();
  const submitForm = useSubmit();

  const onSubmit = (data) => {
    if (data.username == "" || data.password == "") {
      swalert.fire({
        title: "The information is incomplete",
        text: "Please enter the information completely and accurately",
        icon: "warning",
      });
      return false;
    }

    if (data.region != "Iran") {
      swalert.fire({
        title: "ERROR!",
        text: "The username or password is incorrect. Please enter the information accurately",
        icon: "error",
      });
      return false;
    } else {
      submitForm(data, { method: "post" });
    }
  };

  const navigation = useNavigation();
  const isSubmitting = navigation.state != 'idle';

  const navigate = useNavigate();

  const actionData = useActionData();
  useEffect(()=>{
    if(actionData){
      navigate('/panel');
    }
  },[actionData]);

  return (
    <>
      <div>
        <div className="absolute h-full w-full bg-slate-200">
          <div className="flex mx-auto justify-center md:mt-40 p-2 mt-5 sm:mt-10 md:mt-14 lg:mt-20">
            <div className="bg-gradient-to-b from-blue-500 to-slate-800 w-full sm:w-2/4 md:w-2/4 lg:w-1/4 p-0 rounded rounded-lg pb-8">
              <div className="flex mx-auto justify-center">
                <img src={logo} className="w-36 m-12" alt="" />
              </div>
              <form onSubmit={handleSubmit(onSubmit)} action="#">
                <div className="flex p-5 pt-0">
                  <input
                    {...register("username", {})}
                    className="bg-slate-100 rounded-lg h-10 w-full p-2"
                    type="text"
                    placeholder="SIMcard Number"
                    value="09981912396"
                  />
                </div>
                <div className="flex p-5 pt-0">
                  <input
                    {...register("password", {})}
                    className="bg-slate-100 rounded-lg h-10 w-full p-2"
                    type="password"
                    placeholder="Password"
                    value="123456"
                  /> 
                </div>
                <div className="p-5 pt-0">
                  <select
                    {...register("region")}
                    className="bg-slate-100 rounded-lg h-10 w-full p-2 text-slate-600"
                  >
                    <option value="Argentina">Argentina</option>
                    <option value="Australia">Australia</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Canada">Canada</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Egypt">Egypt</option>
                    <option value="France">France</option>
                    <option value="India">India</option>
                    <option value="Iran">Iran</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Spain">Spain</option>
                    <option value="Turkey">Turkey</option>
                    <option value="United States">United States</option>
                  </select>
                </div>
                <div className="p-5">
                  <div className="flex gap-2 bg-white p-5 rounded rounded-md">
                    <input {...register('captcha')} type="checkbox" className="w-8 h-8" />
                    <span className="text-lg">اینجا کپچا قرار می گیرد</span>
                    {/* <img className="w-11" src={captchaPic} alt="" /> */}
                  </div>
                </div>
                <div className="p-5 pt-0 pb-0 mt-5 flex mx-auto justify-center">
                  <button disabled={isSubmitting ? true : false} className="bg-gradient-to-r from-[#ff6d00] to-[#f7a668] hover:bg-gradient-to-l text-black font-semibold pt-2 pb-3 p-5 rounded rounded-lg">
                    {isSubmitting ? 'Logging in...' : 'Login'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

export async function loginAction({ request }) {
  // toast("Hey there! Glad to have you at netXpert!");
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const username = data.username; //cf_1385
  const password = data.password; //cf_1485

  try{
    const response_sessionName = await httpService.post('/crm/getSessionName',{
      "username":"birashk@outlook.com"
    },{
      headers:{
        "Content-Type": "application/json",
      }
    });
    Cookies.set("sessionName",response_sessionName.data,{expires:1});

    const response_terminal = await httpService.post('/crm/getData',{
      'sessionName':response_sessionName.data,
      'query':`select * from vtcmTerminals where cf_1385='${username}' and cf_1485='${password}'`
    },{
      headers:{
        "Content-Type": "application/json",
      }
    });
    if(response_terminal.data.result[0]){

      const response_getUsers = await httpService.get("/deltaSib/getUsers?Api_User=netxpert&Api_Pass=12345678aA*"); 
      const isUser = response_getUsers.data.find(res=>{
          return res.username == username;
      });
      if(!isUser){
        swalert.fire({
          title: "SORRY!",
          text: "The desired user is not registered yet",
          icon: "warning",
        });
        return false;
      }

      Cookies.set("simcardNumber",response_terminal.data.result[0].cf_1385);
      return response_terminal.data.result[0];
    }else{
      swalert.fire({
        title: "ERROR!",
        text: "The username or password is incorrect. Please enter the information accurately",
        icon: "error",
      });
      return false;
    }
  }catch(err){
    toast("There is a network problem, please try again later");
    return false;
  }
}
