import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const {login , setUser } = useContext(AuthContext) ; 

    const handelLogin = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const  loginData = Object.fromEntries(formData.entries());

        login(loginData.email , loginData.password)
        .then(result => {
            const user = result.user ; 
             setUser(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          })
    }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-[850px] shadow-lg rounded-lg overflow-hidden">
        {/* Left Panel */}
        <div className="flex-1 bg-gradient-to-b from-blue-400 to-blue-500 p-8 text-white flex flex-col justify-center items-center md:items-start">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-sm mb-6">
              To stay connected with us, please login with your personal info
            </p>
           
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 bg-white p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#3B9DF8] text-center mb-4">
            Welcome
          </h2>
          <p className="text-center text-sm mb-6">
            Login in to your account to continue
          </p>
          <form onSubmit={handelLogin}>
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
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
            </div>
            <div className="text-right text-sm mb-4">
              <a href="#" className="text-[#3B9DF8] hover:underline">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full bg-[#3B9DF8] border-0 hover:bg-blue-700"
            >
              LOG IN
            </button>
          </form>
          <div className="text-center mt-6 text-sm">
            Don't have an account?{" "}
            <Link to='/signUp' className="text-[#3B9DF8] hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
