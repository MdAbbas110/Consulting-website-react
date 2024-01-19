import Header from "./Header";
import Marquee from "react-fast-marquee";
import SmallCards from "./SmallCards";
import { RxSpeakerLoud } from "react-icons/rx";
import { IoPeople } from "react-icons/io5";
import { TbArrowsRandom } from "react-icons/tb";
import { MdSettingsSuggest } from "react-icons/md";
import { MdVideoSettings } from "react-icons/md";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";

const MarqueeSection = () => {
  return (
    <section className="mb-20 w-full ">
      <main className="mx-auto w-[1240px]">
        <Header
          h1="Integrate apps with just a few clicks"
          p="Connect your existing apps and workflows with pre-made integrations available for 400+ popular apps, plus custom integrations for more advanced users."
        />
      </main>

      <div className="mt-16">
        <Marquee speed={25} pauseOnHover gradient>
          <div className="p-5">
            <SmallCards
              component={<RxSpeakerLoud size={25} color="red" />}
              anchor="Marketing"
            />
          </div>
          <div className="p-5">
            <SmallCards
              component={<MdSettingsSuggest size={25} color="green" />}
              anchor="Project Management"
            />
          </div>
          <div className="p-5">
            <SmallCards
              component={
                <MdOutlineSettingsInputAntenna size={25} color="purple" />
              }
              anchor="Creative"
            />
          </div>

          <div className="p-5">
            <SmallCards
              component={<MdVideoSettings size={25} color="orange" />}
              anchor="Agile"
            />
          </div>

          <div className="p-5">
            <SmallCards
              component={<TbArrowsRandom size={25} color="green" />}
              anchor="Operations"
            />
          </div>
          <div className="p-5">
            <SmallCards
              component={<IoPeople size={25} color="blue" />}
              anchor="Support"
            />
          </div>
          <div className="px-5 py-2">
            <SmallCards
              component={
                <MdOutlineSettingsInputAntenna size={25} color="purple" />
              }
              anchor="Creative"
            />
          </div>
        </Marquee>

        {/* second marquee left to right  */}

        <Marquee speed={10} pauseOnHover direction="right">
          <div className="px-5 py-2">
            <SmallCards
              component={<RxSpeakerLoud size={25} color="red" />}
              anchor="Marketing"
            />
          </div>
          <div className="px-5 py-2">
            <SmallCards
              component={<MdSettingsSuggest size={25} color="green" />}
              anchor="Project Management"
            />
          </div>
          <div className="px-5 py-2">
            <SmallCards
              component={
                <MdOutlineSettingsInputAntenna size={25} color="purple" />
              }
              anchor="Creative"
            />
          </div>

          <div className="px-5 py-2">
            <SmallCards
              component={<MdVideoSettings size={25} color="orange" />}
              anchor="Agile"
            />
          </div>

          <div className="px-5 py-2">
            <SmallCards
              component={<TbArrowsRandom size={25} color="green" />}
              anchor="Operations"
            />
          </div>
          <div className="px-5 py-2">
            <SmallCards
              component={<IoPeople size={25} color="blue" />}
              anchor="Support"
            />
          </div>
          <div className="px-5 py-2">
            <SmallCards
              component={
                <MdOutlineSettingsInputAntenna size={25} color="purple" />
              }
              anchor="Creative"
            />
          </div>
        </Marquee>

        {/* Third marquee form right to left */}

        <Marquee speed={25} pauseOnHover gradient>
          <div className="p-5">
            <SmallCards
              component={<RxSpeakerLoud size={25} color="red" />}
              anchor="Marketing"
            />
          </div>
          <div className="p-5">
            <SmallCards
              component={<MdSettingsSuggest size={25} color="green" />}
              anchor="Project Management"
            />
          </div>
          <div className="p-5">
            <SmallCards
              component={
                <MdOutlineSettingsInputAntenna size={25} color="purple" />
              }
              anchor="Creative"
            />
          </div>

          <div className="p-5">
            <SmallCards
              component={<MdVideoSettings size={25} color="orange" />}
              anchor="Agile"
            />
          </div>

          <div className="p-5">
            <SmallCards
              component={<TbArrowsRandom size={25} color="green" />}
              anchor="Operations"
            />
          </div>
          <div className="p-5">
            <SmallCards
              component={<IoPeople size={25} color="blue" />}
              anchor="Support"
            />
          </div>
          <div className="px-5 py-2">
            <SmallCards
              component={
                <MdOutlineSettingsInputAntenna size={25} color="purple" />
              }
              anchor="Creative"
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueeSection;
