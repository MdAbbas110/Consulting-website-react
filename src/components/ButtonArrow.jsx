import { FaArrowRightLong } from 'react-icons/fa6';

const ButtonArrow = () => {
  return (
    <div className="w-[1240px] mx-auto flex gap-8 items-center justify-center mt-20">
      <button className="py-4 px-8 font-semibold text-base text-white bg-[#04BA71] rounded-md hover:bg-[#007860]">
        Start Free trail
      </button>
      <div className="flex gap-3  items-center">
        <a
          className="text-xl tracking-wide text-green-800 font-semibold"
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
