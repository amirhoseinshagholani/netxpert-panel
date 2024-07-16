import logo from "@public/img/profile-img.png";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useActionData,
  useNavigate,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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

  // const navigation = useNavigation();
  const navigate = useNavigate();

  const isSuccessOperation = useActionData();
  useEffect(() => {
    if (isSuccessOperation) {
      navigate("/panel");
    }
  }, [isSuccessOperation]);

  return (
    <>
      <div>
        <div className="absolute h-full w-full bg-slate-200">
          <div className="flex mx-auto justify-center md:mt-40 sm:mt-10">
            <div className="bg-gradient-to-b from-blue-500 to-slate-800 w-3/4 md:w-1/4 p-0 rounded rounded-lg pb-8">
              <div className="flex mx-auto justify-center">
                <img src={logo} className="w-36 m-12" alt="" />
              </div>
              <form onSubmit={handleSubmit(onSubmit)} action="#">
                <div className="flex p-5 pt-0">
                  <input
                    {...register("username", {})}
                    className="bg-slate-100 rounded-lg h-10 w-full p-2"
                    type="text"
                    placeholder="UserName"
                  />
                </div>
                <div className="flex p-5 pt-0">
                  <input
                    {...register("password", {})}
                    className="bg-slate-100 rounded-lg h-10 w-full p-2"
                    type="text"
                    placeholder="UserName"
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
                <div className="p-5 pt-0 pb-0 mt-5 flex mx-auto justify-center">
                  <button className="bg-gradient-to-r from-[#ff6d00] to-[#f7a668] hover:bg-gradient-to-l text-black font-semibold pt-2 pb-3 p-5 rounded rounded-lg">
                    Login
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
  toast("Hey there! Glad to have you at netXpert!");
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  if (data) {
    return true;
  } else {
    return false;
  }
}
