const Header = ({ h1, p }) => {
  return (
    <header className="mx-auto mt-28 h-auto pt-8 md:w-[1240px]">
      <h1 className="text-center text-2xl font-bold tracking-wide md:text-5xl">
        {h1}
      </h1>
      <p className="mx-auto mt-8 w-[60%] text-center text-lg font-light tracking-wide text-gray-500">
        {p}
      </p>
    </header>
  );
};

export default Header;
