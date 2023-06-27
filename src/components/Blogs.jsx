import React from "react";
import Blog from "./Blog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// images
import melk from "../../public/assets/melk.jpg";
import gardeshgari from "../../public/assets/gardeshgari.jpg";
import makee from "../../public/assets/makee.jpg";
import didani from "../../public/assets/didani.jpg";
import europe from "../../public/assets/europe.jpg";
import africa from "../../public/assets/africa-travel.jpg";
import canada from "../../public/assets/canada.webp";
import { Autoplay } from "swiper";

const blogs = [
  { image: didani, title: "8 مکان دیدنی جهان", id: 1 },
  { image: melk, title: "خرید ملک در ترکیه", id: 2 },
  { image: makee, title: "راهنمای سفر به عربستان", id: 3 },
  { image: gardeshgari, title: "جاذبه گردشگری  ترکیه", id: 4 },
  { image: europe, title: " همه چیز درمورد سفر به اروپا  ", id: 5 },
  { image: africa, title: "ارزان ترین کشور برای سفر", id: 6 },
  { image: canada, title: " آب وهوای  کانادا", id: 7 },
];

const Blogs = () => {
  return (
    <div className="" id="weblog">
      <h2 className="text-xl md:text-2xl font-bold text-center">
        <span className="text-myorange">جدیدترین </span>وبلاگ ها
      </h2>
      <div className="flex items-center px-9 md:px-20 justify-between gap-x-4 overflow-auto mb-8 pb-8 mt-9 md:mt-14">
        <Swiper
          spaceBetween={20}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              {" "}
              <Blog image={blog.image} title={blog.title} key={blog.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
