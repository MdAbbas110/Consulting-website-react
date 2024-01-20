import { FaArrowRightLong } from "react-icons/fa6";
import classnames from "classnames";

const Card = ({ head, para, img }) => {
  const cardClass = classnames(
    `bg-[#EBEDF5] rounded-lg shadow-md hover:scale-110 border-2 hover:border-green-800 transition-all duration-300 ease-in-out`,
  );

  return (
    <main className={cardClass}>
      <div className="mx-auto p-8">
        <img className="" src={img} alt="/" />
        <div className="bg-gray mx-auto mt-10 flex flex-col gap-6">
          <h1 className="text-2xl font-semibold tracking-wide">{head}</h1>
          <p className="text-lg font-normal tracking-wide text-gray-500">
            {para}
          </p>

          <div className="mt-9 flex items-center gap-3">
            <a
              className="text-xl font-semibold tracking-wide text-green-800"
              href="#"
            >
              Load more
            </a>
            <FaArrowRightLong size={20} color="green" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
