import { TiTickOutline } from 'react-icons/ti';
const Heading = () => {
  return (
    <div className="bg-[#007860] w-full p-3 text-white text-sm font-normal ">
      <div className="max-w-[1240px] flex justify-center mx-auto tracking-wide">
        <TiTickOutline size={20} />
        <p>
          Catch up on all the sessions from Collaborate 2023, now available on
          demand. <span className="border-b"> Watch Now</span>
        </p>
      </div>
    </div>
  );
};

export default Heading;
