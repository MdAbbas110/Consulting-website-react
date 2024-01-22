import colabImg from "../assets/collaborate-promo-cta.png";

const Collaborate = () => {
  return (
    <section className="mb-24 mt-20 h-auto w-full">
      <main className="mx-auto lg:w-[1300px]">
        <div className="mx-auto grid gap-8 rounded-xl bg-[#181F38] p-10 md:w-[1240px] md:grid-cols-3 ">
          <div className="col-span-2 mt-6 flex flex-col gap-12 text-white">
            <h1 className=" text-2xl font-bold tracking-wide md:text-4xl ">
              Catch up on Collaborate 2023
            </h1>
            <p className="line text-base font-medium leading-8 tracking-wide md:text-xl">
              Collaborate 2023 was bursting with insights on efficiency, Wrike
              best practices, and product innovations. If you missed the live
              event or want to rewatch your favorite bits, we’ve got you
              covered! All sessions, from keynotes to breakout presentations,
              are now available on demand.
            </p>
            <div className="">
              <button className=" rounded-lg bg-white px-12 py-5 text-lg font-semibold tracking-wide text-gray-800 md:text-xl">
                Watch now
              </button>
            </div>
          </div>
          <div>
            <img className="hidden md:block" src={colabImg} alt="/" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Collaborate;
