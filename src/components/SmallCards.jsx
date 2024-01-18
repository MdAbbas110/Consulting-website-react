const SmallCards = ({ component, anchor }) => {
  return (
    <div className="flex items-center gap-4 rounded-3xl px-8 py-5 bg-white hover:scale-110 border-2 hover:border-green-800 transition-all ease-in-out duration-200">
      {component}
      <a className="text-xl font-medium tracking-wide text-gray-800" href="#">
        {anchor}
      </a>
    </div>
  );
};

export default SmallCards;
