import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SwiperCard from "./SwiperCard";
import img from "../assets/quotes-image-wallmart-canada-2x.avif";
import doctor from "../assets/Doctor-syneos-2x-1.avif";
import play from "../assets/playGround-texes-rangers-2x.avif";

const StoryLine = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, EffectFade, Pagination, Scrollbar]}
        effect={"fade"}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        speed={800}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        loop
        className="mb-28 hidden lg:block"
      >
        <SwiperSlide>
          <SwiperCard
            img={img}
            para="Established in 1994, Walmart Canada serves 2.4 million customers
              online or in one of their 400+ stores nationwide. As the largest
              global retailer, Walmart is intentional about helping people save
              money so they can live better. With more than 11,500 retail units
              under 55 banners in 27 countries, Walmart remains committed to
              creating opportunities that bring value to customers and
              communities around the world."
            para2=" With more than 11,500 retail units under 55 banners in 27
              countries"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            img={doctor}
            para="“The moment our teams saw Wrike, we heard a resounding 'yes'  it was the , Walmart is intentional about helping people save
              money so they can live better. With more than 11,500 retail units
              under 55 banners in 27 countries, Walmart remains committed to
              creating opportunities that bring value to customers and
              communities around the world."
            para2=" that met each and every one of our team’s comprehensive and complex requirements.“"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            img={play}
            para="Established in 1994, Walmart Canada serves 2.4 million customers
              online or in one of their 400+ stores nationwide. As the largest
              global retailer, Walmart is intentional about helping people save
              money so they can live better. With more than 11,500 retail units
              under 55 banners in 27 countries, Walmart remains committed to
              creating opportunities that bring value to customers and
              communities around the world."
            para2=" With more than 11,500 retail units under 55 banners in 27
              countries"
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        modules={[Navigation, EffectFade, Pagination]}
        effect={"fade"}
        navigation
        pagination={{ clickable: true }}
        speed={800}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        loop
        className="w-auto overflow-hidden p-12 lg:hidden"
      >
        <SwiperSlide>
          <main className=" mb-8 flex  flex-col gap-10 rounded-lg bg-[#EBF5F3] p-3">
            <button className=" w-[150px] rounded-lg bg-white px-8 py-3 text-base font-medium text-blue-600">
              Company
            </button>
            <h2 className="text-lg tracking-wide text-gray-700">{`'They needed a centralized, organized work  management solution that could unify teams across 47 countries, helping them streamline a high volume of work requests, create complex campaigns, and scale with the company as it grows.'`}</h2>
            <p className="text-base tracking-wide text-gray-500">{`Walmart is to customers and communities around the world'`}</p>
            <a
              className="text-base font-medium  tracking-wide text-amber-700"
              href="#"
            >
              Read Story line here{" "}
            </a>
          </main>
        </SwiperSlide>
        <SwiperSlide>
          <main className=" mb-8 flex  flex-col gap-10 rounded-lg bg-[#EBF5F3] p-3">
            <button className=" w-[150px] rounded-lg bg-white px-8 py-3 text-base font-medium text-blue-600">
              Company
            </button>
            <h2 className="text-lg tracking-wide text-gray-700">{`'The moment our teams saw Wrike, we heard a resounding   it was the , Walmart is intentional about helping people save money so they can live better. With more than 11,500 retail uni under 55 banners in 27 countries, Walmart remains committed to creating opportunities that bring value to customers and communities around the world'`}</h2>
            <p className="text-base tracking-wide text-gray-500">{`Walmart is to customers and communities around the world'`}</p>
            <a
              className="text-base font-medium  tracking-wide text-amber-700"
              href="#"
            >
              Read Story line here{" "}
            </a>
          </main>
        </SwiperSlide>

        <SwiperSlide>
          <main className=" mb-8 flex  flex-col gap-10 rounded-lg bg-[#EBF5F3] p-3">
            <button className=" w-[150px] rounded-lg bg-white px-8 py-3 text-base font-medium text-blue-600">
              Company
            </button>
            <h2 className="text-lg tracking-wide text-gray-700">{`'The moment our teams saw Wrike, we heard a resounding   it was the , Walmart is intentional about helping people save money so they can live better. With more than 11,500 retail uni under 55 banners in 27 countries, Walmart remains committed to creating opportunities that bring value to customers and communities around the world'`}</h2>
            <p className="text-base tracking-wide text-gray-500">{`Walmart is to customers and communities around the world'`}</p>
            <a
              className="text-base font-medium  tracking-wide text-amber-700"
              href="#"
            >
              Read Story line here{" "}
            </a>
          </main>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default StoryLine;
