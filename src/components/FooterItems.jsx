const FooterItems = ({ h1 = String, list = [] }) => {
  return (
    <div className="h-auto ">
      <h5 className="text-lg font-medium tracking-wide text-white">{h1}</h5>
      <ul className="cursor-pointer text-gray-400 hover:border-b-2">
        {list.map((li, index) => {
          return (
            <li className="px-3 py-8 text-base " key={index}>
              {li}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterItems;
