import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";  
import toast from "react-hot-toast";

const SignUp = () => {
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);  
  const { createNewUser, setUser, updateUserProfile, googleLogin , loading , setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const formData = new FormData(e.target);
    const signUpData = Object.fromEntries(formData.entries());

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "At least one uppercase, one lowercase, and length must be at least 6 characters."
      );
      return;
    }

    createNewUser(signUpData.email, signUpData.password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : location.state='/')
        toast.success("Successful")
          

        updateUserProfile({ displayName: name, photoURL: photo })
          .then((result) => {})
          .catch((err) => {
            setLoading(false)
          });
      });

  };

  const handelGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user ;
       setUser(user)
      if(result.user){
        toast.success("Successful")
        navigate(location?.state ? location.state : location.state='/')
      }
      })
      .catch(err =>{
        const errorCode = err.code;
        const errorMessage = err.message;
        setError(errorMessage )
      })
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-[850px] shadow-lg rounded-lg overflow-hidden">
      
        <div className="flex-1 bg-gradient-to-b from-blue-400 to-blue-500 p-8 text-white flex flex-col justify-center items-center md:items-start">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Welcome!</h1>
            <p className="text-sm mb-6">
              Create your account to join us and start your journey today.
            </p>
          </div>
        </div>

   
        <div className="flex-1 bg-white p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#3B9DF8] text-center mb-4">
            Sign Up
          </h2>
          <p className="text-center text-sm mb-6">
            Please fill in the details to create your account.
          </p>
          <form onSubmit={handelSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
              <label className="text-xs text-red-400">{error}</label>
              <div
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)} 
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />} {/* Show or hide password */}
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full bg-[#3B9DF8] border-0 hover:bg-blue-700"
            >
              SIGN UP
            </button>
          </form>
          <div className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-[#3B9DF8] hover:underline">
              Log in
            </Link>
          </div>
          
          {/* Google Login Button */}
          <div className="mt-6 flex items-center justify-center">
            <button
              onClick={handelGoogleLogin}
              className="border border-[#e5eaf2] rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] text-[#424242] hover:bg-gray-50 transition-all duration-200"
            >
              <img
                src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
                alt="google logo"
                className="w-[23px]"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
