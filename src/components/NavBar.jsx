import WrikeLogo from '../assets/wrike-logo-light.svg';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoEarthOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [navbarBg, setNavbarBg] = useState('bg-green-100'); // Initial color

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Adjust the scroll threshold as needed
      const isScrolled = scrollTop > 50;

      // Update navbar background color based on scroll position
      setNavbarBg(isScrolled ? 'bg-white' : 'bg-green-100');
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={`transition-all duration-300 ease-in-out sticky top-0 z-50 ${navbarBg} shadow-lg`}
    >
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
