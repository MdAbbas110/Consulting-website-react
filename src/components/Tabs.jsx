const Tabs = ({ logo, text }) => {
  return (
    <div className="flex items-center gap-4 mb-3">
      {logo}
      <h2 className="text-xl font-medium text-gray-600">{text}</h2>
    </div>
  );
};

export default Tabs;
