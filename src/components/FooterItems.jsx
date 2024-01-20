const FooterItems = ({ h1 = String, list = [] }) => {
  return (
    <div className="">
      <h5 className="text-lg font-medium text-white">{h1}</h5>
      <ul className="cursor-pointer text-gray-400">
        {list.map((li, index) => {
          return (
            <li className="py-6 text-base " key={index}>
              {li}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterItems;
