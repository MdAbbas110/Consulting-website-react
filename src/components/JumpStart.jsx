import Header from "./Header";
import { RxSpeakerLoud } from "react-icons/rx";
import { IoPeople } from "react-icons/io5";
import { TbArrowsRandom } from "react-icons/tb";
import { MdSettingsSuggest } from "react-icons/md";
import { MdVideoSettings } from "react-icons/md";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import SmallCards from "../components/SmallCards";

const JumpStart = () => {
  return (
    <section className="h-full w-full bg-[#EBEDF5]">
      <main className="mx-auto md:w-[1300px]">
        <Header
          h1="Jump-start projects with customizable templates"
          p="Save time and launch projects or campaigns in seconds with Wrike range of pre-built templates — all fully adaptable to help you get to work faster than ever."
        />
        <div className="mx-auto mt-16 flex flex-wrap justify-evenly gap-8 px-3 md:w-[1240px] md:px-8">
          <SmallCards
            component={<RxSpeakerLoud size={25} color="red" />}
            anchor="Marketing"
          />
          <SmallCards
            component={<MdSettingsSuggest size={25} color="green" />}
            anchor="Project Management"
          />
          <SmallCards
            component={
              <MdOutlineSettingsInputAntenna size={25} color="purple" />
            }
            anchor="Creative"
          />
          <SmallCards
            component={<MdVideoSettings size={25} color="orange" />}
            anchor="Agile"
          />
          <SmallCards
            component={<TbArrowsRandom size={25} color="green" />}
            anchor="Operations"
          />

          <SmallCards
            component={<IoPeople size={25} color="blue" />}
            anchor="Support"
          />
          <SmallCards
            component={<RxSpeakerLoud size={25} color="pink" />}
            anchor="Engineering"
          />
        </div>
        <div className="mx-auto mt-20 flex justify-center">
          <div className="flex gap-6 ">
            <a className="text-xl font-semibold text-green-900" href="#">
              See More Features
            </a>
            <FaArrowRightLong size={25} color="green" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default JumpStart;
