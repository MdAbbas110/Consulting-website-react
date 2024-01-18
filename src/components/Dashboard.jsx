import Header from './Header';
import Tabs from './Tabs';
import { GrMonitor } from 'react-icons/gr';
import { TbSettingsAutomation } from 'react-icons/tb';
import { LuLayoutDashboard } from 'react-icons/lu';
import { CiMobile3 } from 'react-icons/ci';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { FaWpforms } from 'react-icons/fa6';
import ButtonArrow from './ButtonArrow';
import Img from '../assets/product-screenshot-board-gantt-views.png';
import bgImg from '../assets/feature-bg-2-default.png';
import { FaArrowRightLong } from 'react-icons/fa6';
import JumpStart from './JumpStart';
import PowerfulEnter from './PowerfulEnter';

const Dashboard = () => {
  return (
    <section className="w-full bg-[#EBEDF5] h-auto mt-8">
      <main className="w-[1240px] mx-auto mt-12">
        <Header
          h1="The Most Versatile Work Management Platform™"
          p={`Maximize your team’s performance, accelerate growth, and improve customer experience with unique and extensive customization features that makes work seamless for any team or department.`}
        />
        <div className="flex justify-around items-center mx-auto mt-20 border-b-2 border-b-gray-500 ">
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

        <div className="w-[1240px] mx-auto grid grid-cols-3 relative mt-20 gap-8">
          <div className="flex flex-col p-6 gap-8">
            <p className="text-base text-gray-500 font-medium">WORK VIEWS</p>
            <h1 className="text-3xl  font-bold tracking-wide">
              A range of views
            </h1>
            <p className="text-lg text-gray-500 font-medium tracking-wide leading-7">
              Visibility is mission critical for project management, but
              everyone digests information differently. Thats why we provide a
              range of views so you can visualize project progress, adjust
              resources quickly, and keep informed. Try our industry-leading{' '}
              <span className="-tracking-wider text-green-700 cursor-pointer border-b-2">
                {' '}
                Gantt charts
              </span>{' '}
              or easy-to-use{' '}
              <span className="-tracking-wider text-green-700 cursor-pointer border-b-2">
                {' '}
                Kanban boards.
              </span>
            </p>
            <div className="flex items-center gap-4">
              <a
                className="text-xl tracking-wide text-green-800 font-semibold"
                href="#"
              >
                Learn more
              </a>
              <FaArrowRightLong size={20} color="green" />
            </div>
          </div>
          <div className="col-span-2 ">
            <img
              className="absolute w-[60%] h-[70%] z-20"
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
