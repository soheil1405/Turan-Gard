import React from "react";
import Blog from "./Blog";

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
        {blogs.map((blog) => (
          <Blog image={blog.image} title={blog.title} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
