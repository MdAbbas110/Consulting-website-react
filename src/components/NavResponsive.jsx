import { useState } from "react";
import WrikeLogo from "../assets/wrike-logo-light.svg";
import { IoReorderThreeOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const NavResponsive = () => {
  const [nav, setNav] = useState(false);

  function toggleNav() {
    setNav(!nav);
  }

  return (
    <nav className="w-auto px-3 lg:hidden">
      <main className="flex justify-between">
        <div>
          <img src={WrikeLogo} alt="logo" />
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-md bg-[#04BA71] px-3 py-2 text-white hover:bg-[#007860]">
            Start free trail
          </button>
          <div onClick={toggleNav}>
            {nav ? (
              <AiOutlineClose size={30} />
            ) : (
              <IoReorderThreeOutline size={30} />
            )}
          </div>
        </div>
      </main>
      <div
        className={
          nav
            ? "fixed left-0 top-14 h-[32rem] w-[64%] border-r  border-r-gray-900 bg-[#EBF5F3] duration-500 ease-in-out"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="ml-5 mt-4 w-full text-3xl font-bold text-[#007860]">
          Wrike.
        </h1>
        <ul className="cursor-pointer p-4 text-lg uppercase">
          <li className="border-b border-gray-600 p-4">Home</li>
          <li className="border-b border-gray-600 p-4">Company</li>
          <li className="border-b border-gray-600 p-4">Resources</li>
          <li className="border-b border-gray-600 p-4">About</li>
          <li className="border-b border-gray-600 p-4">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavResponsive;
