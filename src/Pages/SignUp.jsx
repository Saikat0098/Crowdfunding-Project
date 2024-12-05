import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, Navigate, useLocation ,  } from "react-router-dom";

 

const SignUp = () => {
 
    const {createNewUser , setUser , updateUserProfile } = useContext(AuthContext)
   
    const handelSubmit =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;  
        const formData = new FormData(e.target);
        const  signUpData = Object.fromEntries(formData.entries());
        createNewUser(signUpData.email , signUpData.password)
        .then(result =>{
            const user = result.user ; 
            setUser(user)

            updateUserProfile({ displayName: name, photoURL: photo })
            .then((result) => {
               console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });
            
        }) 

       

    }
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-[850px] shadow-lg rounded-lg overflow-hidden">
        {/* Left Panel */}
        <div className="flex-1 bg-gradient-to-b from-blue-400 to-blue-500 p-8 text-white flex flex-col justify-center items-center md:items-start">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Welcome!</h1>
            <p className="text-sm mb-6">
              Create your account to join us and start your journey today.
            </p>
           
          </div>
        </div>

        {/* Right Panel */}
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
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
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
            <Link to='/login' className="text-[#3B9DF8] hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
