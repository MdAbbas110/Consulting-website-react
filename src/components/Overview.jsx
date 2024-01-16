import vid from '../assets/video-preview-okr-portfolio.png';

const Overview = () => {
  return (
    <section className="w-full h-screen bg-white text-black mt-32">
      <main className="w-[1240px] mx-auto">
        <header className="w-[1300px] h-auto mx-auto">
          <h1 className="text-center text-4xl font-bold tracking-wide">
            Drive efficiency across all departments
          </h1>
          <p className="tracking-wide mx-auto text-center text-lg text-gray-500 font-light w-[60%] mt-10">
            Wrike streamlines work processes for maximum efficiency, empowering
            teams across all departments to collaborate, manage projects, drive
            strategic initiatives, and achieve goals.
          </p>
        </header>

        <div className="grid grid-cols-3 w-full mx-auto mt-36 h-screen">
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
          <div className="col-span-2 ">
            <img className="ml-40 h-[60%] w-[75%]" src={vid} alt="image" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Overview;
