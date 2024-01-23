import { FaArrowRightLong } from "react-icons/fa6";

const ButtonArrow = () => {
  return (
    <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-8 md:mt-20 md:flex md:w-[1240px]">
      <button className="rounded-md bg-[#04BA71] px-8 py-4 text-base font-semibold text-white hover:bg-[#007860]">
        Start Free trail
      </button>
      <div className="flex items-center  gap-3">
        <a
          className="text-xl font-semibold tracking-wide text-green-800"
          href="#"
        >
          Load more
        </a>
        <FaArrowRightLong size={22} color="green" />
      </div>
    </div>
  );
};

export default ButtonArrow;
