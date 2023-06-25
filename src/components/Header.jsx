import React from "react";


import poster from "../../public/assets/poster.png";
import bestPrice from "../../public/assets/bestPrice.svg";
import reserve from "../../public/assets/reserve.svg";
import liked from "../../public/assets/liked.svg";
import worldMove from "../../public/assets/world.mp4"
const Header = () => {
  return (
    <section className="mb-16 ">
      {/* poster */}

      <div className="px-6 md:hidden flex items-center justify-center  ">
        <img src={poster} alt="poster" />
      </div>
      <div className=" hidden md:flex items-center justify-center  ">
        <video src={worldMove} autoPlay loop width="100%"/>
      </div>

      {/* services */}

      <div className="px-6 flex items-center justify-center -mt-16 md:hidden">
        <div className="w-[308px] bg-mywhite rounded-3xl py-14 px-12 flex flex-col gap-y-7">
          {/* first */}
          <div className="flex flex-col">
            <div className="flex items-center gap-x-1">
              <img src={bestPrice} alt="bestPrice" className="w-4 h-4" />
              <span className="text-sm font-medium">
                بهترین گارانتی قیمت ها
              </span>
            </div>
            <div className="pr-5">
              <span className="text-xs">کمترین قیمت و با کیفیت ترین خدمات</span>
            </div>
          </div>
          {/* second */}
          <div className="flex flex-col">
            <div className="flex items-center gap-x-1">
              <img src={reserve} alt="reserve" className="w-4 h-4" />
              <span className="text-sm font-medium">رزرو سریع</span>
            </div>
            <div className="pr-5">
              <span className="text-xs">
                بهترین هتل ها و پرواز ها در اختیار شما
              </span>
            </div>
          </div>
          {/* third */}
          <div className="flex flex-col">
            <div className="flex items-center gap-x-1">
              <img src={liked} alt="liked" className="w-4 h-4" />
              <span className="text-sm font-medium">رضایت مشتری</span>
            </div>
            <div className="pr-5">
              <span className="text-xs">
                آسایش و رضایت مشتریان بهتری رسالت ماست
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* servisec desktop version */}

      <div className="px-40  hidden md:flex items-center justify-center -mt-16 " >
        <div className="w-full bg-red-50	 rounded-3xl py-14 px-4 flex items-center justify-center  gap-x-10">
          {/* first */}
          <div className="flex flex-col md:border-8 border-sky-500 rounded-full p-5 bg-indigo-800	text-white">
            <div className="flex flex-col items-center gap-x-1 ">
              <img src={bestPrice} alt="bestPrice" className="w-10 h-10 mx-auto	" /> <pre/>
              <span className="text-2xl font-medium md:">
                بهترین گارانتی قیمت ها
              </span>
            </div>

              <span className="text-sm">کمترین قیمت و با کیفیت ترین خدمات</span>

          </div>
          {/* second */}
          <div className="flex flex-col md:border-8 border-sky-500 rounded-full p-5  bg-indigo-800	text-white">
           
              <img src={reserve} alt="reserve" className=" w-10 h-10 mx-auto	" />
              <span className="flex text-2xl font-medium justify-center mb-2">رزرو سریع</span>
            <div>
              <span className="text-sm">
                بهترین هتل ها و پرواز ها در اختیار شما
              </span>
            </div>
          </div>
          {/* third */}
          <div className="flex flex-col md:border-8 border-sky-500 rounded-full p-5  bg-indigo-800	text-white">
              <img src={liked} alt="liked" className="w-10 h-10 mx-auto	" />
              <span className="flex justify-center  text-2xl font-medium text">رضایت مشتری</span>

            <div className="pr-5 	">
              <span className="text-sm ">
                آسایش و رضایت مشتریان بهتری رسالت ماست
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
