import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import img from "../../assets/others/authentication.png";
import img2 from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const LogIn = () => {
  const captchaRef = useRef();
  const navigate = useNavigate()
  const {logInWithEmail} = useContext(AuthContext)

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value, false) == true) {
      try {
        logInWithEmail(data?.email, data?.password)
        .then(res=>{
          console.log(res);
          navigate('/')
        })
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Captcha Does Not Match",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div
      className="min-h-screen py-[10vh]"
      style={{
        background: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="max-w-screen-xl mx-auto min-h-[80vh] flex flex-col md:flex-row justify-center items-center gap-10 py-10"
        style={{
          background: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="flex-1">
          <img src={img2} alt="IMAGE" />
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 mx-auto">
            <input
              {...register("email")}
              className="w-full h-11 outline-none px-5 bg-white border border-[#D0D0D0] rounded text-sm"
              type="text"
              placeholder="Email"
            />

            <input
              {...register("password")}
              className="w-full h-11 outline-none px-5 mt-4 bg-white border border-[#D0D0D0] rounded"
              type="password"
              placeholder="Password"
            />

            <div className="mt-4">
              <label htmlFor="captcha">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                id="captcha"
                className="w-full h-11 outline-none px-5 bg-white border border-[#D0D0D0] rounded"
                type="text"
                placeholder="Captcha"
              />
            </div>

            <input
              className="btn w-full mt-4 bg-[#D1A054B3] hover:bg-[#D1A054B3] rounded"
              type="submit"
              value="Log In"
            />
          </form>
          <div className="w-2/3 mx-auto my-4 text-center">
            <p>
              Don&#39;t have an account?{" "}
              <Link className="text-lg font-bold text-[#D1A054B3]" to="/signUp">
                Create One
              </Link>
            </p>
            <p>Or Sign In With</p>
            <div className="mt-4 flex justify-center items-center gap-16">
              <button className="btn btn-circle btn-outline btn-sm">
                <FaFacebookF></FaFacebookF>
              </button>
              <button className="btn btn-circle btn-outline btn-sm">
                <FaGoogle></FaGoogle>
              </button>
              <button className="btn btn-circle btn-outline btn-sm">
                <FaGithub></FaGithub>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
