import { useForm } from "react-hook-form";
import img from "../../assets/others/authentication.png";
import img2 from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const imgHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

const SignUp = () => {
  const { signUpWithEmail, logInWithGoogle, updateUser, logOut } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data?.image[0] };
    const res = await axios.post(imgHostingApi, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data.data.display_url);
    const photo = res.data.data.display_url;
    if (res?.data?.success) {
      try {
        signUpWithEmail(data?.email, data?.password).then((res) => {
          if (res?.user?.email) {
            try {
              updateUser(data?.name, photo).then(() => {
                toast.success("Profile Updated.");
                try {
                  logOut().then(() => {
                    navigate("/logIn");
                  });
                } catch (error) {
                  console.log(error);
                }
              });
            } catch (error) {
              console.log(error);
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleGoogle = async () => {
    try {
      logInWithGoogle().then(() => {
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
          className="max-w-screen-xl mx-auto min-h-[80vh] flex flex-col md:flex-row-reverse justify-center items-center gap-10 py-10"
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
                {...register("name")}
                className="w-full h-11 outline-none px-5 bg-white border border-[#D0D0D0] rounded text-sm"
                type="text"
                placeholder="Name"
              />

              <input
                {...register("email")}
                className="w-full h-11 outline-none px-5 mt-4 bg-white border border-[#D0D0D0] rounded"
                type="email"
                placeholder="Email"
              />

              <label
                htmlFor="dropzone-file"
                className="flex items-center px-3 py-3 mx-auto mt-4 text-center bg-white border border-dashed border-[#D0D0D0] rounded cursor-pointer"
              >
                <h2 className="mx-1 text-gray-400">Profile Photo</h2>

                <input
                  {...register("image")}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                />
              </label>

              <input
                {...register("password")}
                className="w-full h-11 outline-none px-5 mt-4 bg-white border border-[#D0D0D0] rounded"
                type="password"
                placeholder="Password"
              />

              <input
                className="btn w-full mt-4 bg-[#D1A054B3] hover:bg-[#D1A054B3] rounded"
                type="submit"
                value="Sign Up"
              />
            </form>
            <div className="w-2/3 mx-auto">
              <div className="my-4 text-center">
                <p>
                  Already have an account?{" "}
                  <Link
                    className="text-lg font-bold text-[#D1A054B3]"
                    to="/logIn"
                  >
                    Log In
                  </Link>
                </p>
                <p>Or Sign Up With</p>
                <div className="mt-4 flex justify-center items-center gap-16">
                  <button className="btn btn-circle btn-outline btn-sm">
                    <FaFacebookF></FaFacebookF>
                  </button>
                  <button
                    onClick={handleGoogle}
                    className="btn btn-circle btn-outline btn-sm"
                  >
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
      </div>
    </div>
  );
};

export default SignUp;
