import { useContext, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
 

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { user , loading , logOut } = useContext(AuthContext);
 

  return (
    <nav className="flex items-center justify-between w-full relative  boxShadow rounded-full px-[10px] py-[8px]">
      {/* <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" className="w-[55px] "/> */}
      <div className="logo  text-xl font-bold text-[#3B9DF8]">Help People</div>
      <ul className="items-center gap-[20px] text-[0.900rem] text-[#424242] lg:flex hidden">
        <NavLink to="/">
          <li className="   before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            home
          </li>
        </NavLink>
        <NavLink to="/allCampaign">
          <li className="  before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            All Campaign
          </li>
        </NavLink>
        <NavLink to="/addNewCampaign">
          <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            Add New Campaign
          </li>
        </NavLink>
        <NavLink to="/myCampaign">
          <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            My Campaign{" "}
          </li>
        </NavLink>
        <NavLink to="/myDonations">
          <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
            My Donations
          </li>
        </NavLink>
      </ul>

      { user?.email ? (
       <div className="flex space-x-5">
          <img src={user?.photoURL} alt="" className="w-8 h-8 rounded-full"/>
          <button onClick={logOut} className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 ">
          Sign Out 
          </button>
       </div>
      ) : (
        <div className="items-center gap-[10px] flex">
          <Link to="/login">
            <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-[#3B9DF8] transition-all duration-300 sm:flex hidden">
              Sign in
            </button>
          </Link>
          <Link to="/signUp">
            <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">
              Sign up
            </button>
          </Link>

        
        </div>
        
      )}
        <CiMenuFries
            className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer lg:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />

      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
      >
        {/* <div className="relative mb-5">
                <input
                    className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
                    placeholder="Search..."/>
                <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]"/>
            </div> */}
        <ul className="items-center gap-[20px]  text-[0.900rem] text-gray-600 flex flex-col">
          <NavLink to="/">
            <li className="   before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              home
            </li>
          </NavLink>
          <NavLink to="/allCampaign">
            <li className="  before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              All Campaign
            </li>
          </NavLink>
          <NavLink to="/addNewCampaign">
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              Add New Campaign
            </li>
          </NavLink>
          <NavLink to="/myCampaign">
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              My Campaign{" "}
            </li>
          </NavLink>
          <NavLink to="/myDonations">
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              My Donations
            </li>
          </NavLink>
          <NavLink to="/login">
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              Login
            </li>
          </NavLink>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
