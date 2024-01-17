import vid from '../assets/video-preview-okr-portfolio.png';
import Header from './Header';

const Overview = () => {
  return (
    <section className="w-full h-auto bg-white text-black mt-32 mb-44">
      <main className="w-[1240px] mx-auto">
        <Header
          h1="Drive efficiency across all departments"
          p="Wrike streamlines work processes for maximum efficiency, empowering
        teams across all departments to collaborate, manage projects, drive
        strategic initiatives, and achieve goals."
        />

        <div className="grid grid-cols-3 gap-8 w-full mx-auto mt-36">
          <div className="flex flex-col p-6 ">
            <h1 className="text-4xl font-bold tracking-wide">
              Improve visibility and alignment
            </h1>
            <p className="text-xl font-medium  text-gray-500 mt-14">
              Create a single source of truth and align your teams and
              departments by centralizing all your work in one powerful
              platform.
            </p>
            <p className="text-xl font-medium  text-gray-500 mt-14">
              Create a single source of truth and align your teams and
              departments by centralizing all your work in one powerful
              platform.
            </p>
            <button className=" w-48 mt-14 py-3 px-6 font-semibold text-base text-white bg-[#04BA71] rounded-md hover:bg-[#007860]">
              Start Free trail
            </button>
          </div>
          <div className="col-span-2 mx-auto">
            <img className="ml-20 w-[45rem] " src={vid} alt="image" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Overview;
