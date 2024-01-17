import { FaArrowRightLong } from 'react-icons/fa6';

const Card = ({ head, para, img }) => {
  return (
    <main className="bg-[#F0F2F7] rounded-lg shadow-md hover:scale-110 transition-all duration-300 ease-in-out">
      <div className="p-8 mx-auto">
        <img className="w-52 h-32" src={img} alt="/" />
        <div className="mt-10 mx-auto flex flex-col gap-6">
          <h1 className="text-2xl font-semibold tracking-wide">{head}</h1>
          <p className="text-lg text-gray-500 font-normal tracking-wide">
            {para}
          </p>
          <div className="flex gap-3 mt-9 items-center">
            <a
              className="text-xl tracking-wide text-green-800 font-semibold"
              href="#"
            >
              Load more
            </a>
            <FaArrowRightLong size={25} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
