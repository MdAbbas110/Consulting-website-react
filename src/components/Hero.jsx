import heroImg from '../assets/hero-illustration-homepage-static-mobile.png';
import { MdOutlineDownloadDone } from 'react-icons/md';

const Hero = () => {
  return (
    <section className="w-full bg-[#EBF5F3] h-screen ">
      <div className="w-full mx-auto h-auto pt-16 font-serif">
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
                    <div className="flex items-center gap-2">
                      <MdOutlineDownloadDone size={22} color="green" />
                      <li>A single app for departments</li>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdOutlineDownloadDone size={22} color="green" />
                      <li>Manage projects organize</li>
                    </div>

                    <div className="flex items-center gap-2">
                      <MdOutlineDownloadDone size={22} color="green" />
                      <li>Integrate all of your tools</li>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdOutlineDownloadDone size={22} color="green" />
                      <li>Collaborate drive efficiency</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[600px] h-[450px]">
              <img src={heroImg} alt="image" />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
