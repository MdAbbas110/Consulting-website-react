const Header = ({ h1, p }) => {
  return (
    <header className="w-[1240px] h-auto mx-auto mt-28">
      <h1 className="text-center text-5xl font-bold tracking-wide">{h1}</h1>
      <p className="tracking-wide mx-auto text-center text-lg text-gray-500 font-light w-[60%] mt-8">
        {p}
      </p>
    </header>
  );
};

export default Header;
