import logo from "@public/img/profile-img.png";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useActionData, useNavigate, useNavigation, useSubmit } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { httpService } from "../../core/http-service";
import Cookies from "js-cookie";
import ReCAPTCHA from 'react-google-recaptcha';

const swalert = withReactContent(Swal);


const Login = () => {
  const { register, handleSubmit } = useForm();
  const submitForm = useSubmit();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [region, setRegion] = useState("Iran");
  const [isLoading, setIsLoading] = useState(false);

  const [sessionName, setSessionName] = useState(null);
  const [user, setUser] = useState([]);
  const [terminals, setTerminals] = useState([]);
  // useEffect(() => {
  //   loadReCaptcha(siteKey);
  // }, [siteKey]);

  // const verifyCallback = (token) => {
  //   setCaptchaToken(token);
  // };

  const cancel = () => {
    navigate('/');
  }

  const onSubmit = async () => {
   
    setIsLoading(true);
    if (username == "" || password == "") {
      swalert.fire({
        title: "The information is incomplete",
        text: "Please enter the information completely and accurately",
        icon: "warning",
      });
      setIsLoading(false);
      return false;
    }

    if (region != "Iran") {
      swalert.fire({
        title: "ERROR!",
        text: "Please enter the information accurately",
        icon: "error",
      });
      setIsLoading(false);
      return false;
    } else {
      if (username && password) {
        try {
          const response_getSessionName = await httpService.get('/nekatel/api/crm/getSessionName', {
          }, {
            headers: {
              "Content-Type": "application/json",
            }
          });

          setSessionName(await response_getSessionName.data);
          // return false;
        } catch (err) {
          swalert.fire({
            title: "ERROR!",
            text: "The network is experiencing a problem, please try again",
            icon: "error",
          });
          setIsLoading(false);
          return false;
        }
      }
    }

  };

  const getUser = async () => {
    const response_getUser = await httpService.get('/nekatel/api/crm/getData', {
      params: {
        sessionName: sessionName && sessionName,
        query: `SELECT * FROM Contacts WHERE cf_1123=${username} AND cf_1785=${password}`
      },
      headers: {
        "Content-Type": "application/json",
      }
    });

    

    if(await response_getUser.data.result.length > 0){
      setUser(await response_getUser.data.result);
    }else{
      swalert.fire({
        title: "ERROR!",
        text: "The username or password is incorrect. Please enter the information accurately",
        icon: "error",
      });
      setIsLoading(false);
      return false;
    }
    
  }

  const getTerminals = async () => {
    // const response_getTerminals = await httpService.post('/nekatel/api/crm/getData', {
    //   "sessionName": sessionName,
    //   "query": `SELECT * FROM vtcmTerminals where cf_1409=${user[0]['id']}`
    // }, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // });

    const response_getTerminals = await httpService.get('/nekatel/api/crm/getData', {
      params: {
        sessionName: sessionName && sessionName,
        query: `SELECT * FROM vtcmTerminals where cf_1409=${user[0]['id']}`
      },
      headers: {
        "Content-Type": "application/json",
      }
    });

    console.log(response_getTerminals.data.result);
    

    if(await response_getTerminals.data.result.length > 0){
      setTerminals(await response_getTerminals.data.result);
    }else{
      setIsLoading(false);
      swalert.fire({
        title: "WARNING!",
        text: "Your account is being set up",
        icon: "warning",
      });
      return false;
    }
  }

  useEffect(() => {
    if (sessionName) {
      getUser();
    }
  }, [sessionName]);

  useEffect(() => {
    if (user.length > 0) {
      Cookies.set("session_Name", sessionName, { expires: 1 });
      Cookies.set("username", username, { expires: 1 });
      Cookies.set("user_id", user[0]['id'], { expires: 1 });
      getTerminals();
    }
  }, [user]);

  useEffect(()=>{
    if(terminals.length > 0){
      setIsLoading(false);
      navigate('/panel');      
    }
  },[terminals])

  return (
    <>
      <div>
        <div className="absolute h-full w-full  bg-gradient-to-t from-black to-[#141E61]">
          <div className="flex mx-auto justify-center md:mt-40 p-2 mt-20">
            <div className="bg-gradient-to-b from-blue-500 to-slate-800 w-full sm:w-2/4 md:w-2/4 lg:w-1/4 p-0 rounded rounded-lg pb-8">
              <div className="flex mx-auto justify-center">
                <img src={logo} className="w-36 m-12" alt="" />
              </div>
              <form onSubmit={handleSubmit(onSubmit)} action="#">
                <div className="flex p-5 pt-0">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-slate-100 rounded-lg h-10 w-full p-2"
                    type="text"
                    placeholder="Username"
                    value={username}
                  />
                </div>
                <div className="flex p-5 pt-0">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-slate-100 rounded-lg h-10 w-full p-2"
                    type="password"
                    placeholder="Password"
                    value={password}
                  />
                </div>
                <div className="p-5 pt-0">
                  <select
                    onChange={(e) => setRegion(e.target.value)}
                    className="bg-slate-100 rounded-lg h-10 w-full p-2 text-slate-600"
                  >
                    <option value="">Choose your country...</option>
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
                    <option selected value="Iran">Iran</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Spain">Spain</option>
                    <option value="Turkey">Turkey</option>
                    <option value="United States">United States</option>
                  </select>
                </div>
                <div className="p-5 flex justify-center rounded rounded-md">
                  {/* <div className="flex gap-2 bg-white p-5 rounded rounded-md">
                    <input type="checkbox" className="w-8 h-8" />
                    <span className="text-lg">اینجا کپچا قرار می گیرد</span>
                  </div> */}
                </div>
                <div className="p-5 pt-0 pb-0 gap-2 mt-5 flex mx-auto justify-center">
                  <button className="bg-gradient-to-r from-[#0E8388] to-green-300 w-32 hover:bg-gradient-to-l text-black font-semibold pt-2 pb-3 p-5 rounded rounded-lg">
                    {!isLoading ? 'login' : 'Logging in'}
                  </button>
                  <button onClick={cancel} type="button" className="bg-gradient-to-r w-32 from-[#ff6d00] to-orange-300 hover:bg-gradient-to-l text-black font-semibold pt-2 pb-3 p-5 rounded rounded-lg">
                    cancel
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

// export async function loginAction({ request }) {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);



//   const username = data.username;
//   const password = data.password;

//   try {
//     const response_getSessionName = await httpService.post('/nekatel/api/crm/getSessionName', {
//       "username": "birashk@outlook.com"
//     }, {
//       headers: {
//         "Content-Type": "application/json",
//       }
//     });



//     if (response_getSessionName.data) {
//       const response_getUser = await httpService.post('/nekatel/api/crm/getData', {
//         "sessionName": response_getSessionName.data,
//         "query": `SELECT * FROM Contacts WHERE cf_1123=${username} AND cf_1785=${password}`
//       }, {
//         headers: {
//           "Content-Type": "application/json",
//         }
//       });


//       if (response_getUser.data.result.length > 0) {
//         Cookies.set("session_Name", response_getSessionName.data, { expires: 1 });
//         Cookies.set("username", username, { expires: 1 });
//         Cookies.set("user_id", response_getUser.data.result[0]['id'], { expires: 1 });

//         const response_getTerminals = await httpService.post('/nekatel/api/crm/getData', {
//           "sessionName": response_getSessionName.data,
//           "query": `SELECT * FROM vtcmTerminals where cf_1409=${response_getUser.data.result[0]['id']}`
//         }, {
//           headers: {
//             "Content-Type": "application/json",
//           }
//         });

//         if (response_getTerminals.data.result.length > 0) {
//           return true;
//         } else {
//           swalert.fire({
//             title: "WARNING!",
//             text: "Your account is being set up",
//             icon: "warning",
//           });
//           return false;
//         }

//       }
//     }


//   } catch (err) {
//     swalert.fire({
//       title: "ERROR!",
//       text: "The username or password is incorrect. Please enter the information accurately",
//       icon: "error",
//     });
//     return false;
//   }
// }
