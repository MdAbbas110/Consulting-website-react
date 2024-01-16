import heroImg from '../assets/hero-illustration-homepage-static-mobile.png';
import tMobile from '../assets/1440-logoroll-logo-tmobile.svg';
import olivia from '../assets/1440-logoroll-logo-oglivy.svg';
import sega from '../assets/1440-logoroll-logo-sega.svg';
import lifa from '../assets/1440-logoroll-logo-lyft.svg';
import pg from '../assets/1440-logoroll-logo-procter-and-gamble.svg';
import pfizer from '../assets/1440-logoroll-logo-pfizer.svg';
import sega2 from '../assets/1440-logoroll-logo-sega.svg';
import wave from '../assets/wave.png';

import { MdOutlineDownloadDone } from 'react-icons/md';
import { FaRegCirclePlay } from 'react-icons/fa6';
import ListItem from './ListItem';

const Hero = () => {
  return (
    <section className="w-full bg-[#EBF5F3] h-screen ">
      <div className="w-full mx-auto h-auto pt-16">
        <main className=" mx-auto w-[1320px] ">
          <div className=" grid grid-cols-2 mx-auto max-w-[1240px]">
            <div className="flex flex-col w-[600px] h-[407px]">
              <div className="w-auto h-[399px] p-8">
                <h1 className="text-6xl font-semibold leading-[72px]">
                  <span className="border-b-[1rem] border-b-yellow-400 ">
                    One{' '}
                  </span>
                  platform to streamline all workflows
                </h1>
                <div className="mt-10 text-base font-medium text-gray-600 tracking-wide">
                  <ul className="grid grid-cols-2 gap-8">
                    <ListItem
                      icon={<MdOutlineDownloadDone size={22} color="green" />}
                      text="A single app for departments"
                    />

                    <ListItem
                      icon={<MdOutlineDownloadDone size={22} color="green" />}
                      text="Manage projects organize"
                    />

                    <ListItem
                      icon={<MdOutlineDownloadDone size={22} color="green" />}
                      text="Integrate all of your tools"
                    />

                    <ListItem
                      icon={<MdOutlineDownloadDone size={22} color="green" />}
                      text="Collaborate drive efficiency"
                    />
                  </ul>
                </div>
                <div className="flex items-center mt-10 gap-8">
                  <button className="py-4 px-8 font-semibold text-base text-white bg-[#04BA71] rounded-md hover:bg-[#007860]">
                    Start Free trail
                  </button>
                  <div className="flex cursor-pointer">
                    <FaRegCirclePlay size={25} color="green" />
                    <a className="text-xl tracking-wide font-medium text-[#007860] ml-2">
                      Discover Wrike in 3 minutes
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[600px] h-[450px]">
              <img src={heroImg} alt="image" />
            </div>
          </div>
        </main>
      </div>

      <main className="w-[1320px] mt-24 mx-auto">
        <div className="w-[1240px] flex justify-evenly items-center mx-auto">
          <img src={pg} alt="/" />
          <img src={sega2} alt="/" />
          <img src={olivia} alt="/" />
          <img src={pfizer} alt="" />
          <img src={lifa} alt="/" />
          <img src={sega} alt="/" />
          <img src={tMobile} alt="" />
        </div>
        <p className="text-center text-sm font-medium text-gray-500 mt-4 tracking-wide">
          TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE
        </p>
      </main>
      <img className="w-full mt-36 h-24" src={wave} alt="/" />
    </section>
  );
};

export default Hero;
