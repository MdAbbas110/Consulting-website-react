import WrikeLogo from "../assets/wrike-logo-light.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoEarthOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import NavResponsive from "./NavResponsive";

const NavBar = () => {
  const [navbarBg, setNavbarBg] = useState("bg-transparent"); // Initial color

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Adjust the scroll threshold as needed
      const isScrolled = scrollTop > 50;

      // Update navbar background color based on scroll position
      setNavbarBg(isScrolled ? "bg-white" : "bg-transparent");
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`sticky top-0 z-50  transition-all duration-300 ease-in-out ${navbarBg} shadow-lg`}
    >
      <nav className=" mx-auto hidden max-w-[1240px] text-base font-medium lg:block">
        <div className="flex items-center justify-between">
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
          <a className="text-[1.2rem] text-[#007860]" href="#">
            log in
          </a>
          <button className="rounded-md bg-[#04BA71] px-3 py-2 text-white hover:bg-[#007860]">
            Start a free Trail
          </button>
        </div>
      </nav>
      <NavResponsive />
    </section>
  );
};

export default NavBar;
