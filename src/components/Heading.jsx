import { TiTickOutline } from "react-icons/ti";
const Heading = () => {
  return (
    <div className="w-full bg-[#007860] p-3 text-xs font-normal text-white md:text-sm ">
      <div className="mx-auto flex items-center justify-center tracking-wide md:max-w-[1240px]">
        <TiTickOutline size={20} />
        <p>
          Catch up on all the sessions from Collaborate 2023, now available on
          demand. <span className=" border-b"> Watch Now</span>
        </p>
      </div>
    </div>
  );
};

export default Heading;
