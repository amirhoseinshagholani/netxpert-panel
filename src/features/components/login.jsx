
import logo from '@public/img/profile-img.png'
import { useForm } from 'react-hook-form';
import { useSubmit } from 'react-router-dom';

const Login = () => {

    const {register, handleSubmit } = useForm();
    const submitForm = useSubmit();

    const onSubmit = (data) => {
        console.log(data.region);
        if(data.region != 'Iran'){
            alert("Your location is wrong");
        }else{
            submitForm(data,{method:'post'});
        }
    }

    return (
        <div dir="ltr">
            <div className="absolute h-full w-full bg-slate-200">
                <div className="flex mx-auto justify-center md:mt-40 sm:mt-10">
                    <div className="bg-gradient-to-b from-blue-500 to-slate-800 w-3/4 md:w-1/4 p-0 rounded rounded-lg pb-8">
                        <div className="flex mx-auto justify-center">
                            <img src={logo} className="w-36" alt="" />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} action="#">
                            <div className='flex p-5 pt-0'>
                                <input {...register('username',{
                                    required:"نام کاربری اجباری است"
                                })} className='bg-slate-100 rounded-lg h-10 w-full p-2' type="text" placeholder='UserName' />
                            </div>
                            <div className='flex p-5 pt-0'>
                                <input {...register('password',{
                                    required:"رمزعبور اجباری است"
                                })} className='bg-slate-100 rounded-lg h-10 w-full p-2' type="text" placeholder='UserName' />
                            </div>
                            <div className='p-5 pt-0'>
                                <select {...register('region')} className='bg-slate-100 rounded-lg h-10 w-full p-2 text-slate-600'>
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
                            <div className='p-5 pt-0 pb-0 mt-5 flex mx-auto justify-center'>
                                <button className='bg-gradient-to-r from-[#ff6d00] to-[#f7a668] text-black font-semibold pt-2 pb-3 p-5 rounded rounded-lg'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

export async function loginAction(){
    alert("welcome to netXpert");
    return false;
}