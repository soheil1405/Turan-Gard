import React from "react";

import bestPrice from "../../public/assets/bestPrice.svg";
import reserve from "../../public/assets/reserve.svg";
import liked from "../../public/assets/liked.svg";
import worldMove from "../../public/assets/world.mp4"
const Header2 = () => {
  return (
    <section className="mb-16 ">
       <div className="hidden md:flex items-center justify-center">
        <div className="h-120 min-w-full	 bg-red-50">
          <video
            src={worldMove}
            autoPlay
            loop
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      <div className="px-40  hidden md:flex items-center justify-center -mt-16 " >
        <div className="w-full bg-red-50 py-14 px-4 flex items-center justify-center  gap-x-10">
          {/* first */}
          <div className="flex flex-col  rounded-lg h-52 p-5 bg-orange-  hover:bg-indigo-400 border border-4">
            <div className="flex flex-col items-center gap-x-1  ">
              <img src={bestPrice} alt="bestPrice" className="w-10 h-10 mx-auto " /> <pre/>
              <span className="text-2xl font-medium   ">
                بهترین قیمت 
              </span>
            </div>

              <span className="text-sm">کمترین قیمت و با کیفیت ترین خدمات</span>

          </div>
          {/* second */}
          <div className="flex flex-col rounded-lg h-52	 p-5 bg-orange-200  hover:bg-indigo-400  border border-4">
           
              <img src={reserve} alt="reserve" className=" w-10 h-10 mx-auto	" />
              <span className="flex text-2xl font-medium justify-center mb-2">رزرو سریع</span>
            <div>
              <span className="text-sm">
                بهترین هتل ها و پرواز ها در اختیار شما
              </span>
            </div>
          </div>
          {/* third */}
          <div className="flex flex-col rounded-lg h-52 p-5 bg-orange-  hover:bg-indigo-400 border border-4" >
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

export default Header2;
