import React from "react";
import Blog from "./Blog";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


// images
import melk from "../../public/assets/melk.jpg";
import gardeshgari from "../../public/assets/gardeshgari.jpg";
import makee from "../../public/assets/makee.jpg";
import didani from "../../public/assets/didani.jpg";


const blogs = [
  { image: didani, title: "8 مکان دیدنی جهان", id: 1 },
  { image: melk, title: "خرید ملک در ترکیه", id: 2 },
  { image: makee, title: "راهنمای سفر به عربستان", id: 3 },
  { image: gardeshgari, title: "جاذبه گردشگری تر ترکیه", id: 4 },
];

const Blogs = () => {
  return (
    <div className="" id="weblog">
      
      <h2 className="text-xl md:text-2xl font-bold text-center">
        <span className="text-myorange">جدیدترین </span>وبلاگ ها
      </h2>
      <div className="flex items-center px-9 md:px-20 justify-between gap-x-4 overflow-auto mb-8 pb-8 mt-9 md:mt-14">
      <Swiper
               
               slidesPerView={3.1}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}
             >
        {blogs.map((blog) => (

               <SwiperSlide key={blog.id}> <Blog image={blog.image} title={blog.title} key={blog.id} /></SwiperSlide>))}
          </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
