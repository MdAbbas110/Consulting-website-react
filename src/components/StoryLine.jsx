import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectFade,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

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
      className="mb-28"
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
  );
};

export default StoryLine;
