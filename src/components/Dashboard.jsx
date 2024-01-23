import Header from "./Header";
import Tabs from "./Tabs";
import { GrMonitor } from "react-icons/gr";
import { TbSettingsAutomation } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiMobile3 } from "react-icons/ci";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa6";
import ButtonArrow from "./ButtonArrow";
import Img from "../assets/product-screenshot-board-gantt-views.png";
import bgImg from "../assets/feature-bg-2-default.png";
import { FaArrowRightLong } from "react-icons/fa6";
import JumpStart from "./JumpStart";
import PowerfulEnter from "./PowerfulEnter";

const Dashboard = () => {
  return (
    <section className="mt-24 h-auto w-full bg-[#EBEDF5] pb-24 md:mt-28 lg:mt-44">
      <main className="mx-auto mt-12 md:w-[1240px]">
        <Header
          h1="The Most Versatile Work Management Platform™"
          p={`Maximize your team’s performance, accelerate growth, and improve customer experience with unique and extensive features that makes work seamless for any team or department.`}
        />
        <div className=" mx-auto mt-12 flex cursor-pointer flex-col pl-32 md:mt-20 md:flex-row md:items-center md:justify-around md:border-b-2 md:border-b-gray-500 md:pl-0 ">
          <Tabs logo={<GrMonitor size={20} color="purple" />} text="View" />
          <Tabs
            logo={<TbSettingsAutomation size={20} color="green" />}
            text="Automation "
          />
          <Tabs logo={<CiMobile3 size={20} color="red" />} text="Mobile apps" />

          <Tabs
            logo={<LuLayoutDashboard size={20} color="blue" />}
            text="Dashboard"
          />
          <Tabs
            logo={<IoCheckmarkDoneCircleOutline size={20} color="green" />}
            text="Request from"
          />
          <Tabs
            logo={<FaWpforms size={20} color="purple" />}
            text="Request from"
          />
        </div>

        <div className="relative mx-auto mt-20 gap-8 md:grid md:w-[1240px] md:grid-cols-3">
          <div className="flex flex-col gap-8 p-6">
            <p className="text-base font-medium text-gray-500">WORK VIEWS</p>
            <h1 className=" text-2xl font-bold  tracking-wide md:text-3xl">
              A range of views
            </h1>
            <p className="text-lg font-medium leading-7 tracking-wide text-gray-500">
              Visibility is mission critical for project management, but
              everyone digests information differently. Thats why we provide a
              range of views so you can visualize project progress, adjust
              resources quickly, and keep informed. Try our industry-leading{" "}
              <span className="cursor-pointer border-b-2 -tracking-wider text-green-700">
                {" "}
                Gantt charts
              </span>{" "}
              or easy-to-use{" "}
              <span className="cursor-pointer border-b-2 -tracking-wider text-green-700">
                {" "}
                Kanban boards.
              </span>
            </p>
            <div className="flex items-center gap-4">
              <a
                className="text-lg font-semibold tracking-wide text-green-800 md:text-xl"
                href="#"
              >
                Learn more
              </a>
              <FaArrowRightLong size={20} color="green" />
            </div>
          </div>
          <div className="col-span-2  p-10 md:p-0 ">
            <img
              className="z-20 hidden h-[70%] w-[60%] md:absolute"
              src={bgImg}
              alt="/"
            />
            <img className="object-cover" src={Img} alt="/" />
          </div>
        </div>

        <ButtonArrow />
      </main>

      <JumpStart />
      <PowerfulEnter />
    </section>
  );
};

export default Dashboard;
