import Hero from "../assets/hero-1.jpg";

const HeroSection = () => {
  return (
    <div className="w-full bg-[#fff] rounded-md relative">
      {/* header */}
      <header className="flex lg:flex-row flex-col items-center gap-12 lg:gap-0 justify-between px-8 mt-10">
      <div>
      <div className="w-full lg:w-[80%]">
          <p>Hi there!</p>
          <h1 className="text-[40px] sm:text-[60px] font-semibold leading-[45px] sm:leading-[70px]">
            <span className="text-[#3B9DF8]">Become</span> a changemaker!
          </h1>
          <p className="mt-2 text-[1rem]">
            🫰Tap into the world of regular donations
          </p>
        </div>
        <section className="w-[80%] mt-10 ">
        <div className="bg-sky-100 md:py-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="stat">
              <h2 className="text-2xl font-bold">12.9K</h2>
              <p className="text-gray-600">Lives saved  </p>
            </div>
            <div className="stat">
              <h2 className="text-2xl font-bold">1.2M</h2>
              <p className="text-gray-600">Donors</p>
            </div>
            <div className="stat">
              <h2 className="text-2xl font-bold">15.9K</h2>
              <p className="text-gray-600">Trusted Campaign</p>
            </div>
          </div>
        </div>
        <button  className=" p-3 rounded-lg text-white bg-[#3B9DF8]  mt-5">Donation Now </button>
      </section>

      </div>

        

        <div className="w-full lg:w-[55%] ">
          {/* <img src="https://i.ibb.co/syHFhNy/image.png" alt="image" className=""/> */}
          <img className="path" src={Hero} alt="" />
        </div>
      </header>

    
      {/* right blur shadow */}
      <div className="w-[100px] h-[100px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
    </div>
  );
};

export default HeroSection;
