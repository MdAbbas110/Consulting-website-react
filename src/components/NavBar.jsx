import WrikeLogo from '../assets/wrike-logo-light.svg';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoEarthOutline } from 'react-icons/io5';

const NavBar = () => {
  return (
    <section className="w-full bg-[#EBF5F3] py-4 sticky top-0 ">
      <nav className="max-w-[1240px] mx-auto text-base font-medium">
        <div className="flex justify-between items-center">
          <img src={WrikeLogo} alt="" />
          <div className="flex items-center hover:bg-white">
            <a href="#">Why Wrike? </a> <RiArrowDropDownLine size={25} />
          </div>
          <div className="flex items-center hover:bg-white">
            <a href="#">Features </a> <RiArrowDropDownLine size={25} />
          </div>
          <div className="flex items-center hover:bg-white">
            <a href="#">Resource </a> <RiArrowDropDownLine size={25} />
          </div>
          <div className="flex items-center hover:bg-white">
            <a href="#">Enterprise</a> <RiArrowDropDownLine size={25} />
          </div>
          <div className="flex items-center hover:bg-white">
            <a href="#">Pricing</a> <RiArrowDropDownLine size={25} />
          </div>

          <a className="hover:bg-white" href="#">
            Contact Sale
          </a>
          <div className="flex items-center hover:bg-white">
            <IoEarthOutline size={15} />
            <a href="#"> EN</a>
          </div>
          <a className="text-[#007860] text-[1.2rem]" href="#">
            log in
          </a>
          <button className="py-2 px-3 bg-[#04BA71] text-white rounded-md hover:bg-[#007860]">
            Start a free Trail
          </button>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
