import vid from "../assets/video-preview-okr-portfolio.png";
import Header from "./Header";

const Overview = () => {
  return (
    <section className="mb-14 mt-10 h-auto w-full bg-white text-black md:mb-44 md:mt-32">
      <main className="mx-auto md:w-[1240px]">
        <Header
          h1="Drive efficiency across all departments"
          p="Wrike streamlines work processes for maximum efficiency, empowering
        teams across all departments to collaborate, manage projects, drive
        strategic initiatives, and achieve goals."
        />

        <div className="mx-auto mt-16 flex w-full flex-col-reverse gap-8 md:mt-36 md:grid md:grid-cols-3">
          <div className="flex flex-col p-6 ">
            <h1 className="text-2xl font-bold tracking-wide md:text-4xl">
              Improve visibility and alignment
            </h1>
            <p className="mt-10 text-lg font-medium text-gray-500  md:mt-14 md:text-xl">
              Create a single source of truth and align your teams and
              departments by centralizing all your work in one powerful
              platform.
            </p>
            <p className="mt-10 text-lg font-medium text-gray-500  md:mt-14 md:text-xl">
              Create a single source of truth and align your teams and
              departments by centralizing all your work in one powerful
              platform.
            </p>
            <button className=" mt-14 w-48 rounded-md bg-[#04BA71] px-6 py-3 text-base font-semibold text-white hover:bg-[#007860]">
              Start Free trail
            </button>
          </div>
          <div className="mx-auto md:col-span-2">
            <img className="p-8 md:ml-20 md:w-[45rem] " src={vid} alt="image" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Overview;
