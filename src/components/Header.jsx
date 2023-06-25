import React from "react";

// icone

import poster from "../../public/assets/poster.png";
import background from "../../public/assets/poster-background.png";
import bestPrice from "../../public/assets/bestPrice.svg";
import reserve from "../../public/assets/reserve.svg";
import liked from "../../public/assets/liked.svg";

const Header = () => {
  return (
    <section className="mb-16 ">
      {/* poster */}

      <div className="px-6 md:hidden flex items-center justify-center  ">
        <img src={poster} alt="poster" />
      </div>
      {/* poster desktop version */}
      <div className="px-20 hidden md:flex items-center justify-center  ">
        <img src={background} alt="background" />
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

      <div className="px-40  hidden md:flex items-center justify-center -mt-16">
        <div className="w-full bg-mywhite rounded-3xl py-14 px-4 flex items-center justify-center  gap-x-10">
          {/* first */}
          <div className="flex flex-col">
            <div className="flex items-center gap-x-1">
              <img src={bestPrice} alt="bestPrice" className="w-4 h-4" />
              <span className="text-base font-medium">
                بهترین گارانتی قیمت ها
              </span>
            </div>
            <div className="pr-5">
              <span className="text-sm">کمترین قیمت و با کیفیت ترین خدمات</span>
            </div>
          </div>
          {/* second */}
          <div className="flex flex-col">
            <div className="flex items-center gap-x-1">
              <img src={reserve} alt="reserve" className="w-4 h-4" />
              <span className="text-base font-medium">رزرو سریع</span>
            </div>
            <div className="pr-5">
              <span className="text-sm">
                بهترین هتل ها و پرواز ها در اختیار شما
              </span>
            </div>
          </div>
          {/* third */}
          <div className="flex flex-col">
            <div className="flex items-center gap-x-1">
              <img src={liked} alt="liked" className="w-4 h-4" />
              <span className="text-base font-medium">رضایت مشتری</span>
            </div>
            <div className="pr-5">
              <span className="text-sm">
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
