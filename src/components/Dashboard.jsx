import Header from './Header';
import Tabs from './Tabs';
import { GrMonitor } from 'react-icons/gr';
import { TbSettingsAutomation } from 'react-icons/tb';
import { LuLayoutDashboard } from 'react-icons/lu';
import { CiMobile3 } from 'react-icons/ci';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { FaWpforms } from 'react-icons/fa6';
import ButtonArrow from './ButtonArrow';

const Dashboard = () => {
  return (
    <section className="w-full bg-[#EBEDF5] h-screen mt-8">
      <main className="w-[1240px] h-screen mx-auto">
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
        <ButtonArrow />
      </main>
    </section>
  );
};

export default Dashboard;
