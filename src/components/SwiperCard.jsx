// Import Swiper styles
import "swiper/css";

const SwiperCard = ({ img, para, para2 }) => {
  return (
    <section className="mb-16 mt-20 w-full">
      <main className="mx-auto w-[1300px]">
        <center className="text-5xl font-bold text-gray-800">
          Stories from our customers
        </center>
        <div className="mt-12 grid w-[1240px] grid-cols-3 gap-8 rounded-2xl bg-[#EBF5F3] p-4">
          <div className="">
            <img src={img} alt="" />
          </div>
          <div className="col-span-2 flex flex-col items-center justify-center gap-8">
            <p className=" text-xl font-medium -tracking-wide text-gray-700 ">
              {para}
            </p>
            <p className="text-base font-medium tracking-wide text-gray-700 ">
              {para2}
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SwiperCard;
