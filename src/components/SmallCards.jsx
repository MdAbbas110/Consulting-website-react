const SmallCards = ({ component, anchor }) => {
  return (
    <div className="flex items-center gap-4 rounded-full border-2 bg-[#EBF5F3] px-8 py-5 transition-all duration-200 ease-in-out hover:scale-110 hover:border-green-800">
      {component}
      <a className="text-xl font-medium tracking-wide text-gray-800" href="#">
        {anchor}
      </a>
    </div>
  );
};

export default SmallCards;
