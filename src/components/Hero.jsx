import heroImg from "../assets/hero-illustration-homepage-static-mobile.png";
import tMobile from "../assets/1440-logoroll-logo-tmobile.svg";
import olivia from "../assets/1440-logoroll-logo-oglivy.svg";
import sega from "../assets/1440-logoroll-logo-sega.svg";
import lifa from "../assets/1440-logoroll-logo-lyft.svg";
import pg from "../assets/1440-logoroll-logo-procter-and-gamble.svg";
import pfizer from "../assets/1440-logoroll-logo-pfizer.svg";
import sega2 from "../assets/1440-logoroll-logo-sega.svg";
import wave from "../assets/wave.png";

import { MdOutlineDownloadDone } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import ListItem from "./ListItem";

const Hero = () => {
  return (
    <>
      <section className=" h-auto w-full bg-[#EBF5F3] md:h-screen ">
        <div className="mx-auto h-auto w-full pt-8 md:pt-16">
          <main className=" mx-auto lg:w-[1320px] ">
            <div className="mx-auto flex flex-col md:grid md:max-w-[1240px] md:grid-cols-2">
              <div className="flex h-auto flex-col md:h-[407px] md:w-[600px]">
                <div className=" w-auto p-4 md:h-[399px] md:p-8">
                  <h1 className="text-4xl font-semibold leading-[60px] md:text-5xl md:leading-[72px] lg:text-6xl">
                    <span className="border-b-[1rem] border-b-yellow-400 ">
                      One{" "}
                    </span>
                    platform to streamline all workflows
                  </h1>
                  <div className="mt-10 text-base font-medium tracking-wide text-gray-600">
                    <ul className="grid grid-rows-4 gap-5 md:grid-cols-2 md:gap-8">
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
                  <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center">
                    <button className="w-56 rounded-lg bg-[#04BA71] px-8 py-4 text-base font-semibold text-white hover:bg-[#007860] md:w-auto">
                      Start Free trail
                    </button>
                    <div className="flex cursor-pointer">
                      <FaRegCirclePlay size={25} color="green" />
                      <a className="ml-2 text-lg font-semibold tracking-wide text-[#007860] md:text-xl md:font-medium">
                        Discover Wrike in 3 minutes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:h-[450px] md:w-[600px]">
                <img src={heroImg} alt="image" />
              </div>
            </div>
          </main>
        </div>

        <main className="mx-auto mt-16 pb-20 md:mt-24 lg:w-[1320px]">
          <div className="gap mx-auto flex flex-wrap justify-evenly gap-6 md:w-[1240px] md:items-center md:gap-0">
            <img src={pg} alt="/" />
            <img src={sega2} alt="/" />
            <img src={olivia} alt="/" />
            <img src={pfizer} alt="" />
            <img src={lifa} alt="/" />
            <img src={tMobile} alt="" />
            <img src={sega} alt="/" />
          </div>
          <p className="mt-5 text-center text-sm font-medium tracking-wide text-gray-500">
            TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE
          </p>
        </main>
      </section>
      <img className=" h-28 w-full" src={wave} alt="/" />
    </>
  );
};

export default Hero;
